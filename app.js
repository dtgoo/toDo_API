
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
// middleware
app.use(express.static('./public'))
app.use(express.json());



// more middleware 
app.use('/api/v1/tasks', tasks);
// route not found - if using an API route that doesn't exist
app.use(notFound);
app.use(errorHandlerMiddleware);
//creating a port number and telling the browser to listen on that port number
const port = process.env.PORT || 3000; 
const start = async () => {
 try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`SERVER IS LISTENING ON PORT ${port}...`));

 } catch (err) {
    console.log(err);
 }
}

start()
