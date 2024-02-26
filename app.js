const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const routes = require('./routes');
const http = require('http')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db');
const socketSetup = require('./socket')

dotenv.config();


const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

connectDB();

app.use('/api',routes)

const server = http.createServer(app)

socketSetup(server);

app.use('*', (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode).json({
      error: {
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🍰' : err.stack,
      },
    });
})
const port = process.env.PORT || 4000;

server.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})
