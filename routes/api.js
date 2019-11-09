const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Category = require('../models/category');

// Everything here mounted at /api/...

// GET /api/categories Lists all categories will be used for the dropdown menu
router.get('/categories', (req, res) => {
  Category.find({}, (err, categories) => {
    res.json(categories);
  }).catch(err => console.log(err));
});

// GET /api/usercategories Shows all of the categories for a user in which a listitem exists (for /profile page)
/* B/c listitems is any array, we need to iterate through it to get to the category name that will 
end up showing on the client side. We add to the array 'arr' when we find a category name that is 
not already included. If a user has multiple saved line items, two within 'travel' and one within 'food,
the result should be 'travel' and 'food'.
*/
router.get('/usercategories', (req, res) => {
  User.findById(req.user._id).populate('listitems.categories').exec((err, user) =>{
    if (err) return console.log(err);
    let arr = [];
    for(let i = 0; i < user.listitems.length; i++){
      if (user.listitems[i].categories.length > 0 && !arr.includes(user.listitems[i].categories[0].name)) {
        console.log(user.listitems[i].categories[0].name);
        arr.push(user.listitems[i].categories[0].name)
      }
    }
    res.json(arr);
  });
});

// GET /api/listitems/:categoryName Will show a list of listItems for that category name
router.get('/listitems/:cName', (req, res) => { 
  User.findById(req.user._id).populate('listitems.categories').exec((err, user) =>{
    let arr = [];
    for(let i = 0; i < user.listitems.length; i++){
      if (user.listitems[i].categories[0].name === req.params.cName) {
        arr.push(user.listitems[i]);
      }
    }
    res.json(arr);
  });
});

// GET /api/listitems/:id Will show a list of the details linked to a specific listitem
router.get('/listitem/:id', (req, res) => { 
  User.findById(req.user._id, (err, user) => { // Be sure to pass in a name as the id or change to findById
    res.send(user.listitems.id(req.params.id));
    }).catch(err => console.log(err));
  });

// POST /api/newcategory ONLY FOR US TO USE to add new categories
router.post('/newcategory', (req, res) => {
  Category.create({name: req.body.name}, (err, category) => {
    res.json(category);
  })
}); 

// POST /api/categories Will "add" a new category & list item referencing that category
router.post('/categories', (req, res) => { 
  User.findById(req.body.uId, (err, user) => {
    user.listitems.push({
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo,
      categories: req.body.catId
    });
    user.save( (err, newUser) => {
      res.json(newUser);
    });
  }).catch(err => console.log(err));
});

// PUT /listitem/:id Will edit the bucket list item name from form on page /listName/edit
router.put('/listitem/:id', (req, res) => {
  User.findById(req.user._id, (err, user) => {
    user.listitems.id(req.params.id).remove();
    user.listitems.push({
      _id: req.params.id,
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo,
      completed: false
    });
    res.json(user.listitems.id(req.params.id));
  }).catch(err => console.log(err))
});

module.exports = router;