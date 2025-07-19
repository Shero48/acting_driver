require('dotenv').config();
const express=require('express');
const app=express();
const connect=require('./middleware/db');
const user_route=require('./router/user_route');
const driver_route=require('./router/driver_route')
const cookie_parser=require('cookie-parser');
const cors=require('cors');
const order_route=require('./router/order_route');

app.use(cors({
    origin:'http://localhost:5173',
    methods:'*',
    allowedHeaders:'*',
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization'] 
}))

app.use(cookie_parser());

app.use(express.json())
app.use('/api/v1',user_route);
app.use('/api/v1/driver',driver_route);
app.use('/api/v1/order',order_route);

app.listen(process.env.PORT,()=>{
    console.log("server is running");
    connect();
})