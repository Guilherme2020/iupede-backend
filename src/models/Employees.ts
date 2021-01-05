import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import Stores from './Stores';
import EmployeesTypes from './EmployeeTypes';
import Companies from './Companies';

@Entity('employees')
class Employees {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(() => EmployeesTypes)
    @JoinColumn({ name: 'employee_id' })
    employesType: EmployeesTypes;

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

export default Employees;
