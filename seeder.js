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
  })
});

// for (category of categories) {
//   let newCat = new Category({name: category});
//   newCat.save();
// }

// for (category of categories) {
//   console.log('made it here');
//   Category.insertMany({name: category}, (err, cat) => {
//     console.log(cat);
//   });
// };

// Category.insert([{name: 'Art'}, {name: 'Career'}, {name: 'Education'}]);

console.log('Done');
