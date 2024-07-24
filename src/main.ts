import app from './app';
import { APP_PORT } from './app/app.config';
import { connection } from './app/database/mysql';

app.listen(APP_PORT, () => console.log('☘️ Server is running'));

/**
 * 测试数据库连接
 */
connection.connect((err) => {
  if (err) {
    console.error('😵 连接数据库失败: ' + err.stack);
    return;
  }
  console.log('🚛 连接数据库成功，connected as id ' + connection.threadId);
});
