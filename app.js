
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDb = require('./seed.js');
const cors = require('cors');




mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Db connected");
})
.catch((err) => {
  console.log(err);
});

//seedDb();

app.use(express.json());
app.use(cors(
  {
    origin: ['http://localhost:3000','https://stupefied-williams-d52d03.netlify.app'],
    credentials: true,
  }
));

const foodRoutes = require('./api/foodRoutes');

app.get('/hello', function(req,res){
   res.status(200).json({msg: 'Hello from the server'});
});


app.use(foodRoutes);


app.listen(process.env.PORT || 8000, function(){
    console.log("Server is listen at port");
});