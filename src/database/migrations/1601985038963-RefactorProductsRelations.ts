import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactorProductsRelations1601985038963 implements MigrationInterface {
    name = 'RefactorProductsRelations1601985038963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_bb3c4d2c097e07ee1e94051b58a"`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "image_url" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image_url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "thumbnail_url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "companiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categoriesId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_fdc54ad8bbed8692bbb75315267" FOREIGN KEY ("companiesId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_3a9ea78a0f8110a3618098dc39b" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_3a9ea78a0f8110a3618098dc39b"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_fdc54ad8bbed8692bbb75315267"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "companiesId"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "thumbnail_url"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_url"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "productId" uuid`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_bb3c4d2c097e07ee1e94051b58a" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
