import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateRelations1601428805111
    implements MigrationInterface {
    name = 'CreateRelations1601428805111';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "cpf" character varying NOT NULL, "fcm" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "stores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "address" character varying NOT NULL, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "companiesId" uuid, CONSTRAINT "PK_7aa6e7d71fa7acdd7ca43d7c9cb" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "desks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "number" integer NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "stores_id" uuid, "companies_id" uuid, CONSTRAINT "PK_cb80c291b12d16786b843e6274f" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "employeesTypes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_931dea2d0575915b23240886494" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "employee_id" uuid, "stores_id" uuid, "companies_id" uuid, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "attendances" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "desks_id" uuid, "employees_id" uuid, CONSTRAINT "PK_483ed97cd4cd43ab4a117516b69" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "attendance_id" uuid, "desks_id" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "orders_products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "order_id" uuid NOT NULL, "status" character varying NOT NULL, "price" numeric NOT NULL, "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4945c6758fd65ffacda760b4ac9" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" numeric NOT NULL, "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "cnpj" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "productId" uuid, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "administrators" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "level" character varying NOT NULL, "name" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "stores_id" uuid, "companies_id" uuid, CONSTRAINT "REL_7feeb804452986a970b264ca83" UNIQUE ("stores_id"), CONSTRAINT "REL_87eeaff47b6cb284369024a8bc" UNIQUE ("companies_id"), CONSTRAINT "PK_aaa48522d99c3b6b33fdea7dc2f" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "stocks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "identifySize" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "product_id" uuid, "stores_id" uuid, "companies_id" uuid, CONSTRAINT "PK_b5b1ee4ac914767229337974575" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "stores" ADD CONSTRAINT "FK_f52ede15e6d09a802efc0438a2d" FOREIGN KEY ("companiesId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "desks" ADD CONSTRAINT "FK_c97cd0ddffffc981597b7ca603e" FOREIGN KEY ("stores_id") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "desks" ADD CONSTRAINT "FK_36f772f115459cea6bdc17146bb" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "employees" ADD CONSTRAINT "FK_c9a09b8e6588fb4d3c9051c8937" FOREIGN KEY ("employee_id") REFERENCES "employeesTypes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "employees" ADD CONSTRAINT "FK_53a602ccdade9571cbafaf222c2" FOREIGN KEY ("stores_id") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "employees" ADD CONSTRAINT "FK_3759af07a8be366195eb22fcbcd" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "attendances" ADD CONSTRAINT "FK_aa902e05aeb5fde7c1dd4ced2b7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "attendances" ADD CONSTRAINT "FK_5ace4bd0906eaa17a724f8d435a" FOREIGN KEY ("desks_id") REFERENCES "desks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "attendances" ADD CONSTRAINT "FK_d96e935989c05c1d6de36dbc4b7" FOREIGN KEY ("employees_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders" ADD CONSTRAINT "FK_a922b820eeef29ac1c6800e826a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders" ADD CONSTRAINT "FK_b24b90e104a2fb4b1323d361594" FOREIGN KEY ("attendance_id") REFERENCES "attendances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders" ADD CONSTRAINT "FK_124d57fd103b392e2e876765a89" FOREIGN KEY ("desks_id") REFERENCES "desks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "companies" ADD CONSTRAINT "FK_bb3c4d2c097e07ee1e94051b58a" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "administrators" ADD CONSTRAINT "FK_7feeb804452986a970b264ca836" FOREIGN KEY ("stores_id") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "administrators" ADD CONSTRAINT "FK_87eeaff47b6cb284369024a8bc9" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "stocks" ADD CONSTRAINT "FK_cdcdc9a4b531cbd24c06bc4f9e7" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "stocks" ADD CONSTRAINT "FK_9eb90c60a13342e76c5faf7f7cf" FOREIGN KEY ("stores_id") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "stocks" ADD CONSTRAINT "FK_720310e0314c97f2e02edb43405" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "stocks" DROP CONSTRAINT "FK_720310e0314c97f2e02edb43405"`,
        );
        await queryRunner.query(
            `ALTER TABLE "stocks" DROP CONSTRAINT "FK_9eb90c60a13342e76c5faf7f7cf"`,
        );
        await queryRunner.query(
            `ALTER TABLE "stocks" DROP CONSTRAINT "FK_cdcdc9a4b531cbd24c06bc4f9e7"`,
        );
        await queryRunner.query(
            `ALTER TABLE "administrators" DROP CONSTRAINT "FK_87eeaff47b6cb284369024a8bc9"`,
        );
        await queryRunner.query(
            `ALTER TABLE "administrators" DROP CONSTRAINT "FK_7feeb804452986a970b264ca836"`,
        );
        await queryRunner.query(
            `ALTER TABLE "companies" DROP CONSTRAINT "FK_bb3c4d2c097e07ee1e94051b58a"`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb"`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1"`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders" DROP CONSTRAINT "FK_124d57fd103b392e2e876765a89"`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders" DROP CONSTRAINT "FK_b24b90e104a2fb4b1323d361594"`,
        );
        await queryRunner.query(
            `ALTER TABLE "orders" DROP CONSTRAINT "FK_a922b820eeef29ac1c6800e826a"`,
        );
        await queryRunner.query(
            `ALTER TABLE "attendances" DROP CONSTRAINT "FK_d96e935989c05c1d6de36dbc4b7"`,
        );
        await queryRunner.query(
            `ALTER TABLE "attendances" DROP CONSTRAINT "FK_5ace4bd0906eaa17a724f8d435a"`,
        );
        await queryRunner.query(
            `ALTER TABLE "attendances" DROP CONSTRAINT "FK_aa902e05aeb5fde7c1dd4ced2b7"`,
        );
        await queryRunner.query(
            `ALTER TABLE "employees" DROP CONSTRAINT "FK_3759af07a8be366195eb22fcbcd"`,
        );
        await queryRunner.query(
            `ALTER TABLE "employees" DROP CONSTRAINT "FK_53a602ccdade9571cbafaf222c2"`,
        );
        await queryRunner.query(
            `ALTER TABLE "employees" DROP CONSTRAINT "FK_c9a09b8e6588fb4d3c9051c8937"`,
        );
        await queryRunner.query(
            `ALTER TABLE "desks" DROP CONSTRAINT "FK_36f772f115459cea6bdc17146bb"`,
        );
        await queryRunner.query(
            `ALTER TABLE "desks" DROP CONSTRAINT "FK_c97cd0ddffffc981597b7ca603e"`,
        );
        await queryRunner.query(
            `ALTER TABLE "stores" DROP CONSTRAINT "FK_f52ede15e6d09a802efc0438a2d"`,
        );
        await queryRunner.query(`DROP TABLE "stocks"`);
        await queryRunner.query(`DROP TABLE "administrators"`);
        await queryRunner.query(`DROP TABLE "companies"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "orders_products"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "attendances"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "employeesTypes"`);
        await queryRunner.query(`DROP TABLE "desks"`);
        await queryRunner.query(`DROP TABLE "stores"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
