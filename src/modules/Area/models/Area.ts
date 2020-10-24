import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('areas')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date
}

export default User