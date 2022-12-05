const pgtools = require('pgtools');
const {dbName, dbUser, dbPwd} = require('./configDB');
const PORT = process.env.PORT || 5432;

const config = {
    user: dbUser,
    host: 'localhost',
    port: PORT,
    password: dbPwd
  };

  //attempt to create DB
  //if it already exists, this does nothing and just connects to
  //the existing db of that name
  const createDB = async () => {
      try {
          await pgtools.createdb(config, dbName);
          console.log(`Successfully created the database: ${dbName}!`);
        } catch (err) {
          if (err.name === 'duplicate_database') {
              console.log(`Database ${dbName} already exists`);
              return;
            } else {
              console.error('createDB error:', err);
              process.exit(1);
            }
        }
  }

module.exports = createDB;
