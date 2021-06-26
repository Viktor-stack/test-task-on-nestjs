import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertRole1624732055494 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO role (value , description) values( 'ADMIN', 'Администратор')`);
    await queryRunner.query(`INSERT INTO role (value , description) values( 'USER', 'Пользователь')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
