const Category = require('./models/category')
const mongoose = require('mongoose');

let categories = ['Art', 'Career', 'Education', 'Events', 'Family', 'Financial', 'Food', 'Life Goals', 'Random', 'Relationships', 'Sports', 'Travel', 'Volunteer'];

// for (category of categories) {
//   let newCat = new Category({name: category});
//   newCat.save();
// }

for (category of categories) {
  console.log('made it here');
  Category.create({name: category}, (err, cat) => {
    console.log(cat);
  });
};

console.log('Done');
