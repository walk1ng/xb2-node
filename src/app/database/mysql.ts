import mysql from 'mysql2';
import { ConnectionOptions } from 'mysql2';

import {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER,
} from '../app.config';

const connectionOptions: ConnectionOptions = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  port: parseInt(MYSQL_PORT, 10),
};

export const connection = mysql.createConnection(connectionOptions);
