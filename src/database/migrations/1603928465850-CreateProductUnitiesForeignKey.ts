import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateProductUnitiesForeignKey1603928465850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("areas", new TableForeignKey({            
            columnNames: ["unity_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "unities",
            onDelete: "SET NULL"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("areas", "productUnities");
    }

}
