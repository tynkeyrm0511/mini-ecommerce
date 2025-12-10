import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column({ length: 60, select: false })
  password!: string;

  @Column({ length: 100 })
  full_name!: string;

  @Column({ type: "enum", enum: UserRole, default: UserRole.CUSTOMER })
  role!: UserRole;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
