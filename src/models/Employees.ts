import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import EmployeesTypes from './EmployeeTypes';

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
    employeType: EmployeesTypes;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Employees;
