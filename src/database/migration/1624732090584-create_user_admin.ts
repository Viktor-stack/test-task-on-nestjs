import { MigrationInterface, QueryRunner } from 'typeorm';
import * as  bcrypt from 'bcryptjs';


export class createUserAdmin1624732090584 implements MigrationInterface {
  async generatePassword() {
    return await bcrypt.hash('admin', 12);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO user (email, password, roleId) values('admin@gmail.com', '${await this.generatePassword()}', 1)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
