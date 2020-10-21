import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1603151156199 implements MigrationInterface {
    name = 'CreateUsersTable1603151156199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                { name: 'id', type: 'INT', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'name', type: 'VARCHAR(45)', isNullable: false },
                { name: 'email', type: 'VARCHAR(45)', isNullable: false, isUnique: true },
                { name: 'password', type: 'VARCHAR(70)', isNullable: false },
                { name: 'type', type: 'VARCHAR(10)', isNullable: false },
                { name: 'active', type: 'BOOLEAN', isNullable: false }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
