import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import OrdersProducts from './OrdersProducts';
import Companies from './Companies';
import Categories from './Categories';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('int')
    price: number;

    @Column()
    description: string;

    @Column('int')
    quantity: number;

    @Column()
    image_url: string;

    @Column()
    thumbnail_url: string;

    @OneToMany(() => OrdersProducts, order_products => order_products.product)
    order_products: OrdersProducts[];

    @ManyToOne(() => Companies, (companies: Companies) => companies.products)
    @JoinColumn({ name: 'companies_id' })
    companies_id: Companies;

    @ManyToOne(
        () => Categories,
        (categories: Categories) => categories.products,
    )
    @JoinColumn({ name: 'categories_id' })
    categories_id: Categories;

    // @OneToMany(() => Companies, companie_products => companie_products.product)
    // companies: Companies[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Product;
