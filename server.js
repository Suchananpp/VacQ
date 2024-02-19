const express = require('express');
const dotenv = require('dotenv');
const cookieParser=require('cookie-parser');
const connectDB = require('./config/db');


dotenv.config({path:'./config/config.env'});

connectDB();

const hospitals = require('./routes/hospitals')
const auth = require('./routes/auth')

const app=express();


//#region Comment Code
// app.get('/', (req,res) =>{
    
  
//     // res.send('<h1>Hello from express</h1>'); //1
//     // res.send({name:'Brad'}); //2
//     // res.json({name:'Brad'}); //3
//     // res.sendStatus(400); //4
//     // res.status(400).json({success:false}); //5
//     res.status(200).json({success:true,data:{id:1}});
// });




// app.get('/api/v1/hospitals', (req,res) =>{
    

//     res.status(200).json({success:true,msg:'Show all hospital'});
// });


// app.get('/api/v1/hospitals/:id', (req, res) => {
//     res.status(200).json({success: true, msg: `Show hospital ${req.params.id}`});
// });



// app.post('/api/v1/hospitals', (req,res) =>{

//     res.status(200).json({success:true,msg:'Create new hospitals'});
    
// });


// app.put('/api/v1/hospitals/:id', (req,res) =>{

//     res.status(200).json({success:true,msg:`Update hospital ${req.params.id}`});

// });


// app.delete('/api/v1/hospitals/:id', (req,res) =>{

//     res.status(200).json({success:true,msg:`Delete hospital${req.params.id}`});

// });

//#endregion
//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());
app.use('/api/v1/hospitals',hospitals);
app.use('/api/v1/auth',auth);

const PORT=process.env.PORT || 5000;
const server = app.listen(PORT , console.log('Server running in',process.env.NODE_ENV,' mode on port ',PORT));

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(()=>process.exit(1));
});