const dbType = require('./types')

const selectDB = type => {
  switch (type) {
    case dbType.MONGO_DB:
      return require('./mongodb')
    case dbType.MEMORY_BD:
      return require('./memorydb')
    default:
      return require('./memorydb')
  }
}

module.exports = (() => ({
    config: selectDB
}))()