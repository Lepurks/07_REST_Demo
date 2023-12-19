// import

const app = require('express')();
const PORT = 8080;

// Listener für express-instanz
app.listen(
    PORT,
    () => console.log('server ready at http://localhost"${PORT}')
);
