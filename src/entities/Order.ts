import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { OrderItem } from "./OrderItem";

export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

@Entity({ name: "orders" })
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  //Quan hệ N-1 với User
  @ManyToOne(() => User) @JoinColumn({ name: "user_id" }) user!: User;

  //Thông tin snapshot
  @Column({ type: "decimal", precision: 12, scale: 2 })
  total_amount!: number;

  @Column({ type: "enum", enum: OrderStatus, default: OrderStatus.PENDING })
  status!: OrderStatus;

  @Column({ name: "shipping_name" })
  shippingName!: string;

  @Column({ name: "shipping_address" })
  shippingAddress!: string;

  @Column({ name: "shipping_phone" })
  shippingPhone!: string;

  //Quan hệ 1-N với OrderItem
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  items!: OrderItem[];

  //Timestamp
  @CreateDateColumn({ name: "created_at" }) 
  createdAt!: Date;
  
  @UpdateDateColumn({ name: "updated_at" }) 
  updatedAt!: Date;
}
