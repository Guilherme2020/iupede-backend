import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import Companies from './Companies';
import Stores from './Stores';

@Entity('administrators')
class Administrators {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    level: string;

    @Column()
    name: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @OneToOne(() => Stores)
    @JoinColumn({ name: 'stores_id' })
    stores: Stores;

    @OneToOne(() => Companies)
    @JoinColumn({ name: 'companies_id' })
    companies: Companies;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Administrators;
