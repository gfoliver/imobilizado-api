import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import User from '../../modules/User/models/User';
import { hash } from 'bcrypt';

export default class UserSeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const password = await hash('12345', 8);

        await connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { name: 'Admin', email: 'admin@imobilizado.com', password, active: true, type: "admin" }
            ])
            .execute()
    }
}