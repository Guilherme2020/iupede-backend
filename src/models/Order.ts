import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

import User from './User';
import OrdersProducts from './OrdersProducts';
import Attendance from './Attendances';

@Entity('orders')
class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Attendance)
    @JoinColumn({ name: 'attendance_id' })
    attendance: Attendance;

    @OneToMany(() => OrdersProducts, order_products => order_products.order, {
        cascade: true,
    })
    order_products: OrdersProducts[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Order;
