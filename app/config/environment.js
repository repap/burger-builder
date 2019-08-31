require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  db: {
    URL: process.env.DB_URL,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
  }
}