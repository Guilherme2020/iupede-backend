import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Companies from './Companies';
import Stores from './Stores';

@Entity('companies')
class Desks {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    number: number;

    @Column()
    status: string;

    @ManyToOne(() => Stores)
    @JoinColumn({ name: 'stores_id' })
    stores: Stores;

    @ManyToOne(() => Companies)
    @JoinColumn({ name: 'companies_id' })
    companies: Stores;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Desks;
