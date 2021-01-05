import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm';

import Companies from './Companies';
import Product from './Product';
import Stores from './Stores';

@Entity('stocks')
class Stocks {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;

    @Column()
    identifySize: string;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => Stores)
    @JoinColumn({ name: 'stores_id' })
    stores: Stores;

    @ManyToOne(() => Companies)
    @JoinColumn({ name: 'companies_id' })
    companies: Companies;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Stocks;
