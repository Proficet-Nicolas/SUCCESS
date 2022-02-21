const express = require('express');
const mongoose = require('mongoose');
const quizzRoutes = require('./routes/quizz')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//app.use((req, res) => {
   //res.json({ message: 'Votre requête a bien été reçue !' }); 
//});

mongoose.connect('mongodb+srv://20proficet:20proficet@success.ujv6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  app.use('/api/question', quizzRoutes);

 

module.exports = app;