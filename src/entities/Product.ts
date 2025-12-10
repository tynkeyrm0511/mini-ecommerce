import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 255 })
  slug!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;

  @Column({ name: "stock_quantity", type: "int" })
  stockQuantily!: number;

  @Column({ name: "image_url", length: 255, nullable: true })
  imageUrl?: string;

  @Column({ name: "is_active", default: true })
  isActive!: boolean;

  // Định nghĩa quan hệ
  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category!: Category;

  // Timestamp
  @CreateDateColumn({ name: "created_at" }) 
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" }) 
  updatedAt!: Date;
  
  @DeleteDateColumn({ name: "deleted_at", select: false }) 
  deletedAt?: Date;
}
