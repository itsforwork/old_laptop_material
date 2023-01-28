import express from 'express';
import bodyParser from 'body-parser';
// import that router thing from other file
import userRoutes from './routes/users.js'


const app=  express();
const PORT = 5000;
app.use(bodyParser.json());

// all routes will starts from /users path
app.use('/users' , userRoutes)

// making a get request on '/path' this next arrow function will be triggered when we hit '/' path
app.get('/' , (req,res)=>{
    console.log("TEST")
    res.send('hello from homepage')
})
app.listen(PORT, ()=> console.log(`server running on port: http://localhost:${PORT}`))  