import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterAppointmentsAddConstraintInUuid1594084663859
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE appointments ALTER COLUMN id SET DEFAULT uuid_generate_v4()',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE appointments ALTER COLUMN id DROP DEFAULT',
    );
  }
}
