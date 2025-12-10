import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { Cart } from "./Cart";

@Entity({ name: "cart_items" })
export class CartItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  //Quan hệ N-1 với Cart
  @ManyToOne(() => Cart, (cart) => cart.items)
  @JoinColumn({ name: "cart_id" })
  cart!: Cart;
  // Quan hệ N-1 với Product
  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product!: Product;
}
