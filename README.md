- Inside the `src/config` folder create a file named as `config.json` and write the following code:
  {
  "development": {
  "username": "root",
  "password": null,
  "database": "database_development",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  "test": {
  "username": "root",
  "password": null,
  "database": "database_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  "production": {
  "username": "root",
  "password": null,
  "database": "database_production",
  "host": "127.0.0.1",
  "dialect": "mysql"
  }
  }

go inside src
-- npx sequelize init
if you are setting your develpoment env write your own name and passwaord and in dialect set your database and you port

--- now npm run dev
