import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('areas')
class Area {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    unity_id: number;

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date
}

export default Area;