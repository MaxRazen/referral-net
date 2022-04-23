import { TableColumnOptions } from 'typeorm'

const primaryIdColumn = (): TableColumnOptions => {
    return {
        name: 'id',
        type: 'int',
        isPrimary: true,
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

export {
    primaryIdColumn,
    uidColumn,
    createdAtColumn,
    updatedAtColumn,
}
