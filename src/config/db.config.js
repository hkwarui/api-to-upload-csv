module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "28582027",
  DB: "testdb",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
