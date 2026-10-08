import { BaseAppEntity } from "@entities";
import { Column, Entity } from "typeorm";

@Entity("otp_store")
export class OtpEntity extends BaseAppEntity {
  @Column({ type: "varchar", length: 100 })
  email: string;

  @Column({ type: "varchar", length: 6 })
  otp: string;

  @Column({ type: "timestamp" })
  expiresAt: Date;

  @Column({ type: "varchar", enum: ["RegisterUnit", "Supplementary"] })
  userType: string;
}