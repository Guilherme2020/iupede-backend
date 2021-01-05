import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';
import Product from './Product';

@Entity('categories')
class Categories {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    image_url: string;

    @OneToMany(
        () => Product,
        product_categorie => product_categorie.categories_id,
    )
    products: Product[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Categories;
