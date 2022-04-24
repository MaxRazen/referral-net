import { Table, MigrationInterface, QueryRunner } from "typeorm"
import {
    primaryIdColumn,
    createdAtColumn,
} from '../utils'

export class CreateActivitiesTable1650823088314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'activities',
                columns: [
                    primaryIdColumn(),
                    {
                        name: 'causer_type',
                        type: 'enum',
                        enum: ['system', 'user', 'partner'],
                    },
                    {
                        name: 'causer_id',
                        type: 'int',
                        unsigned: true,
                    },
                    {
                        name: 'action',
                        type: 'int',
                    },
                    {
                        name: 'data',
                        type: 'json',
                    },
                    createdAtColumn(),
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('activities');
    }

}
