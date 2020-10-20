import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}

export default Product