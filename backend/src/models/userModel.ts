import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';

// Define the user model
class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public age!: number;
  public gender!: string;
  public height!: number;
  public weight!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: new DataTypes.STRING(50),
    allowNull: true,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'users',
  sequelize: sequelize, // This is the instance of Sequelize you created earlier
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Synchronize the model with the database, creating the table if it does not already exist
sequelize.sync();

export default User;
