const express = require('express');
const userController = require('./controllers/userControllers')
require('dotenv').config();
const app = express();
app.use(express.json);
app.use('/api/users',userCon)
const port = 3000;

app.get('/',(req,res)=>{
  res.send('Hola mundo');
})

app.listen(port,()=>{

    console.log(`servidor corriendo en en http://localhost:${port}`)
})
