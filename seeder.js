require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('./models/category');
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => console.log(`Connected to MongoDB on ${db.host} at ${db.port}`));
db.on('error', (err) => console.log(`Database error: ${err}`));

let categories = ['Art', 'Career', 'Education', 'Events', 'Family', 'Financial', 'Fitness', 'Food', 'Life Goals', 'Random', 'Relationships', 'Sports', 'Travel', 'Volunteer'];

categories.forEach(cat => {
  Category.create({name: cat}, (err, category) => {
  });
});
