const mongoose = require('mongoose');




const connectDB = (url) => {
   return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

// only one, so just add one - no object. 
module.exports = connectDB
