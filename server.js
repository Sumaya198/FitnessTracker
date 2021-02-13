const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
//const morgan = require('morgan');
const path = require('path')
const dbConnection = require('./models/connection')

dotEnv.config();

const PORT = process.env.PORT || 3000;

//db connection
dbConnection()



const app = express()

//set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// const fitnessRouter = require('./routes/apiRoutes')
// app.use('/api/workouts', fitnessRouter)

// app.get('/exercise', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
// })

require('./routes/html')(app)

app.listen(PORT, () =>{

console.log(`Server listening on port ${PORT}`)
})
