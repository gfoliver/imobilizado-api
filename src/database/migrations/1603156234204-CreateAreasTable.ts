import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAreasTable1603156234204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'areas',
            columns: [
                { name: 'id', type: 'INT', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'name', type: 'VARCHAR(45)', isNullable: false },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
                { name: 'updated_at', type: 'timestamp', default: 'now()' },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('areas');
    }

}
