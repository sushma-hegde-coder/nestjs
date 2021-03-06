import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column({ nullable: false })
  productName: string;

  @Column({ default: 0, type: 'decimal', precision: 2 })
  productPrice: number;

  @Column({ nullable: false })
  productImage: string;

  @Column({ default: 0, type: 'decimal', precision: 2 })
  productSalePrice: number;

  @Column({ default: 10 })
  productStock: number;
}
