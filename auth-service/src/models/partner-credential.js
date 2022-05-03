import { DataTypes } from 'sequelize'
import sequelize from '../db.js';

const PartnerCredential = sequelize.define('PartnerCredential', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  partner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secret: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: DataTypes.DATE,
}, {
  timestamps: false,
  tableName: 'partner_credentials',
})

export default PartnerCredential
