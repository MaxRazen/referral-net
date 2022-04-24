import {TableColumnOptions, TableForeignKeyOptions} from 'typeorm'

const primaryIdColumn = (): TableColumnOptions => {
    return {
        name: 'id',
        type: 'int',
        isPrimary: true,
        unsigned: true,
    }
}

const uidColumn = (): TableColumnOptions => {
    return {
        name: 'uid',
        type: 'varchar(12)',
        isUnique: true,
    }
}

const createdAtColumn = (): TableColumnOptions => {
    return {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
    }
}

const updatedAtColumn = (): TableColumnOptions => {
    return {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
    }
}

const partnerIdColumn = (): TableColumnOptions => {
    return {
        name: 'partner_id',
        type: 'int',
        unsigned: true,
    }
}

const partnerIdForeignKeyOptions = (): TableForeignKeyOptions => {
    return {
        columnNames: ['partner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'partners',
        onDelete: 'CASCADE',
    }
}

export {
    primaryIdColumn,
    uidColumn,
    createdAtColumn,
    updatedAtColumn,
    partnerIdColumn,
    partnerIdForeignKeyOptions,
}
