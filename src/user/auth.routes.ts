  import { Router } from "express";
  import { AuthService } from "./auth.service";
  import { asyncHandler } from "@helper/async-handler.helper";
  import { validateRequest } from "@middlewares/validation.middleware";
  import { z } from "zod";
  import { AuthController } from "./auth.controller";
import { verifyOtpSchema } from "@dtos";

  export class AuthRoutes {
    private router = Router();
    private authController: AuthController;

    constructor() {
      const authService = new AuthService();
      this.authController = new AuthController(authService);
      this.initializeRoutes();
    }

    private initializeRoutes() {
     
    
       this.router.post(
      "/user/update-password/:id",
      this.authController.updatePasswordByUser
    );
       this.router.post(
      "/admin/update-password/:id",
      this.authController.updatePasswordByAdmin
    );

      // Public routes
      this.router.post(
        "/forgot-password",
      
        this.authController.forgotPassword
      );

      this.router.post(
        "/reset-password",
        
        this.authController.resetPassword
      );

      this.router.post(
        "/verify-otp",
        validateRequest(verifyOtpSchema),
        this.authController.verifyOtp
      );

      this.router.post(
      "/resend-otp",
      this.authController.resendOtp
    );

   
    }

    getRouter() {
      return this.router;
    }
  }