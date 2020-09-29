import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Desks from './Desks';
import Employees from './Employees';
import User from './User';

@Entity('attendances')
class Attendance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Desks)
    @JoinColumn({ name: 'desks_id' })
    desks: Desks;

    @ManyToOne(() => Employees)
    @JoinColumn({ name: 'employees_id' })
    employees: Employees;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Attendance;
