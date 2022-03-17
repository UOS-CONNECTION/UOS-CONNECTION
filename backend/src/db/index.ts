import { createConnection } from 'typeorm';

import connectionOptions from '../../ormconfig';

class DBConfig {
  connectionDB() {
    try {
      createConnection(connectionOptions).then(() => {
        console.log('DB Connection');
      });
    } catch (err) {
      console.log('[DataBase] DB Connection Error');
    }
  }
}

export default new DBConfig();
