import { Sequelize } from 'sequelize';
import * as connection from '../config/database';

const sequelize = new Sequelize(connection);

export default sequelize;
