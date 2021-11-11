module.exports = {
  "type": "mongodb",
  "database": "inkCalculation",
  "host": process.env.MONGO_HOST || 'localhost',
  "synchronize": true,
  "logging": false,
  "entities": [
    "build/entity/**/*.js",
    "build/entity/**/*.ts"
  ],
  "migrations": [
    "src/migration/**/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "build/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}
