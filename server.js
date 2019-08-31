const {PORT} = require('./app/config/environment')
const app = require('./app')

app.listen(PORT, () => console.log(`app is running on http://localhost:${PORT}`))
