import { ApiError } from "@helper/api-error.helper";
import { ApiResponse } from "@helper/api-success.helper";
import { hashPassword } from "@helper/auth.helper";
import { sendOtpEmail } from "@helper/email.helper";
import { ErrorResponse, statusCode, SuccessResponse } from "@messages";
import AppDataSource from "@config/db-config";
import { RegisterUnitEntity, CreateSupplementaryEntity, OtpEntity } from "@entities";
import * as bcrypt from "bcrypt";


export class AuthService {
  private readonly registerUnitRepository = AppDataSource.getRepository(RegisterUnitEntity);
  private readonly supplementaryRepository = AppDataSource.getRepository(CreateSupplementaryEntity);
  private readonly otpRepository = AppDataSource.getRepository(OtpEntity);

  async generateAndStoreOtp(email: string, userType: "RegisterUnit" | "Supplementary"): Promise<string> {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Set expiration time (2 minutes from now)
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000);

    // Remove any existing OTP for this email
    await this.otpRepository.delete({ email });

    // Create and save new OTP
    const otpEntity = this.otpRepository.create({
      email,
      otp,
      expiresAt,
      userType,
    });

    await this.otpRepository.save(otpEntity);

    return otp;
  }

  async forgotPassword(email: string): Promise<ApiResponse<any>> {
    const registerUser = await this.registerUnitRepository.findOne({ where: { email } });
    const supplementaryUser = await this.supplementaryRepository.findOne({ where: { email } });

    if (!registerUser && !supplementaryUser) {
      throw new ApiError(statusCode.NotFound, ErrorResponse.userNotExists);
    }

    const userType = registerUser ? "RegisterUnit" : "Supplementary";
    const otp = await this.generateAndStoreOtp(email, userType);
    await sendOtpEmail(email, otp);

    return new ApiResponse(
      statusCode.OK,
      null,
      `OTP sent to email for ${userType.toLowerCase()} account`
    );
  }

 async verifyOtp(email: string, otp: string): Promise<ApiResponse<any>> {
    const otpRecord = await this.otpRepository.findOne({ where: { email, otp } });

    if (!otpRecord) {
      throw new ApiError(statusCode.BadRequest, "Invalid OTP");
    }

    if (otpRecord.expiresAt < new Date()) {
      await this.otpRepository.delete({ email });
      throw new ApiError(statusCode.BadRequest, "OTP has expired");
    }

    return new ApiResponse(statusCode.OK, null, "OTP verified successfully");
  }

  async resendOtp(email: string): Promise<ApiResponse<any>> {
    const otpRecord = await this.otpRepository.findOne({ where: { email } });

    if (!otpRecord) {
      throw new ApiError(statusCode.BadRequest, "No OTP request found for this email");
    }

    const registerUser = await this.registerUnitRepository.findOne({ where: { email } });
    const supplementaryUser = await this.supplementaryRepository.findOne({ where: { email } });

    if (!registerUser && !supplementaryUser) {
      throw new ApiError(statusCode.NotFound, ErrorResponse.userNotExists);
    }

    const userType = registerUser ? "RegisterUnit" : "Supplementary";
    const otp = await this.generateAndStoreOtp(email, userType);
    await sendOtpEmail(email, otp);

    return new ApiResponse(
      statusCode.OK,
      null,
      `New OTP sent to email for ${userType.toLowerCase()} account`
    );
  }

  async resetPassword(email: string, newPassword: string): Promise<ApiResponse<any>> {
    const otpRecord = await this.otpRepository.findOne({ where: { email } });

    if (!otpRecord) {
      throw new ApiError(statusCode.BadRequest, "Invalid or expired OTP");
    }

    if (otpRecord.expiresAt < new Date()) {
      await this.otpRepository.delete({ email });
      throw new ApiError(statusCode.BadRequest, "OTP has expired");
    }

    const hashedPassword = await hashPassword(newPassword, 10);

    if (otpRecord.userType === "RegisterUnit") {
      const user = await this.registerUnitRepository.findOne({ where: { email } });
      if (!user) {
        throw new ApiError(statusCode.NotFound, ErrorResponse.userNotExists);
      }
      await this.registerUnitRepository.update(user.id, { password: hashedPassword });
    } else if (otpRecord.userType === "Supplementary") {
      const user = await this.supplementaryRepository.findOne({ where: { email } });
      if (!user) {
        throw new ApiError(statusCode.NotFound, ErrorResponse.supplementaryNotFound);
      }
      await this.supplementaryRepository.update(user.id, { password: hashedPassword });
    }

    // Delete OTP after successful reset
    await this.otpRepository.delete({ email });

    return new ApiResponse(statusCode.OK, null, "Password reset successfully");
  }

   async updatePasswordByUser(userId: number, currentPassword: string, newPassword: string): Promise<ApiResponse<any>> {
    const user = await this.registerUnitRepository.findOne({ where: { id : userId } });

    if (!user) {
      throw new ApiError(statusCode.NotFound, ErrorResponse.userNotExists);
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      throw new ApiError(statusCode.BadRequest, "Current password is incorrect");
    }

    // Hash new password
    const hashedPassword = await hashPassword(newPassword, 10);

    // Update password
    await this.registerUnitRepository.update(user.id, { password: hashedPassword });

    return new ApiResponse(statusCode.OK, null, "Password updated successfully");
  }

  async updatePasswordByAdmin(userId: number,  newPassword: string): Promise<ApiResponse<any>> {
    const user = await this.registerUnitRepository.findOne({ where: { id : userId } });

    if (!user) {
      throw new ApiError(statusCode.NotFound, ErrorResponse.userNotExists);
    }

   

    // Hash new password
    const hashedPassword = await hashPassword(newPassword, 10);

    // Update password
    await this.registerUnitRepository.update(user.id, { password: hashedPassword });

    return new ApiResponse(statusCode.OK, null, "Password updated successfully");
  }
}