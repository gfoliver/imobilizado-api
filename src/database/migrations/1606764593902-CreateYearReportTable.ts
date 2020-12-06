import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateYearReportTable1606764593902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'yearReport',
            columns: [
                { name: 'id', type: 'INT', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'name', type: 'VARCHAR(45)', isNullable: false },
                { name: 'cpf', type: 'VARCHAR(11)', isNullable: false },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('yearReport');
    }

}
