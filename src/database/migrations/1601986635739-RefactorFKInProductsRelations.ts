import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactorFKInProductsRelations1601986635739 implements MigrationInterface {
    name = 'RefactorFKInProductsRelations1601986635739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_fdc54ad8bbed8692bbb75315267"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_3a9ea78a0f8110a3618098dc39b"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "companiesId"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "companies_id" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categories_id" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ef1ac2809a1208fb5aba93f9699" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_0caaab91b663757a4086208d0b0" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_0caaab91b663757a4086208d0b0"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ef1ac2809a1208fb5aba93f9699"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categories_id"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "companies_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categoriesId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD "companiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_3a9ea78a0f8110a3618098dc39b" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_fdc54ad8bbed8692bbb75315267" FOREIGN KEY ("companiesId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
