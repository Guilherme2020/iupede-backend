import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

import OrdersProducts from './OrdersProducts';
import Companies from './Companies';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column('int')
    quantity: number;

    @OneToMany(() => OrdersProducts, order_products => order_products.product)
    order_products: OrdersProducts[];

    @OneToMany(() => Companies, companie_products => companie_products.product)
    companies: Companies[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Product;
