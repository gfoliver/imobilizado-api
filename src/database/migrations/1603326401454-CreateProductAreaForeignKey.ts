import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKey1603326401454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("products", new TableForeignKey({
            name: "productArea",
            columnNames: ["area_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "areas",
            onDelete: "SET NULL"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("products", "productArea");
    }
}
