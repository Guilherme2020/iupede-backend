import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import Product from './Product';
import Stores from './Stores';

@Entity('companies')
class Companies {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    cnpj: string;

    @ManyToOne(() => Product, (product: Product) => product.companies)
    product: Product;

    @OneToMany(() => Stores, stores_companie => stores_companie.companies)
    stores: Stores[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Companies;
