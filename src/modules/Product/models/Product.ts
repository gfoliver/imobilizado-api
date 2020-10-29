import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryColumn()
    code: string;

    @Column()
    name: string;
    
    @Column()
    value: number;
    
    @Column()
    amount: number;
    
    @Column()
    image?: string;
    
    @Column()
    description?: string;
    
    @Column()
    area_id: number;

    @Column()
    unity_id: number;

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date
}

export default Product