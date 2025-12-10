import { User } from "./User";
import { CartItem } from "./CartItem";
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "carts" })
export class Cart {
  @PrimaryGeneratedColumn() id!: number;

  //Quan hệ 1-1 với User
  @OneToOne(() => User) @JoinColumn({ name: "user_id" }) user!: User;
  //Quan hệ 1-N với CartItem
  @OneToMany(() => CartItem, (cartItem) => cartItem.cart) items!: CartItem[];
}
