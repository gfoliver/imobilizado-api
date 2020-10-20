import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('areas')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
}

export default User