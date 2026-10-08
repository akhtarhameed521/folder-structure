import { Request, Response } from "express";
//import { AuthService } from "./auth.service";
import { asyncHandler } from "@helper/async-handler.helper";
import { ApiError } from "@helper/api-error.helper";
import { statusCode } from "@messages";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) { }

  forgotPassword = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body

    const response = await this.authService.forgotPassword(email);
    res.status(response.statusCode).json(response);
  });

  resetPassword = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, otp, newPassword } = req.body;

    const response = await this.authService.resetPassword(email, newPassword);
    res.status(response.statusCode).json(response);
  });

  updatePasswordByAdmin = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const {  newPassword } = req.body;

    const userId = req.params?.id

    const response = await this.authService.updatePasswordByAdmin(+userId, newPassword);
    res.status(response.statusCode).json(response);
  });

   updatePasswordByUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { currentPassword, newPassword } = req.body;

    const userId = req.params?.id

    const response = await this.authService.updatePasswordByUser(+userId, currentPassword, newPassword);
    res.status(response.statusCode).json(response);
  });

  verifyOtp = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, otp } = req.body;

    const response = await this.authService.verifyOtp(email, otp);
    res.status(response.statusCode).json(response);
  });

  resendOtp = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    const response = await this.authService.resendOtp(email);
    res.status(response.statusCode).json(response);
  });


}