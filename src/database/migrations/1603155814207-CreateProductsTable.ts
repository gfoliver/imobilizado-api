import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsTable1603155814207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                { name: 'code', type: 'VARCHAR(45)', isPrimary: true },
                { name: 'name', type: 'VARCHAR(45)', isNullable: false, },
                { name: 'value', type: 'DOUBLE', isNullable: false, },
                { name: 'amount', type: 'INT', isNullable: false, },
                { name: 'image', type: 'VARCHAR(45)' },
                { name: 'description', type: 'TEXT' },
                { name: 'area_id', type: 'INT', isNullable: false }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
