import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity({ name: "order_items" })
export class OrderItem {
  @PrimaryGeneratedColumn() id!: number;

  //Quan hệ N-1
  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({ name: "order_id" })
  order!: Order;

  // Chỉ lấy id product để tham chiếu không lấy thông tin
  @ManyToOne(() => Product, { nullable: true, onDelete: "SET NULL" })
  @JoinColumn({ name: "product_id" })
  product?: Product;

  // Thông tin snapshot tại thời điểm đặt hàng
  @Column()
  quantity!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;

  @Column({ name: "product_name" })
  productName!: string;

  @Column({ name: "product_image", nullable: true })
  productImage?: string;
}
