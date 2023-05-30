const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);


const newUser = new User({
    username: 'john_doe',
    email: 'john@example.com',
    password: 'hashed_password'
  });

  
  newUser.save()
  .then(savedUser => {
    console.log('User saved:', savedUser);
  })
  .catch(error => {
    console.error('Error saving user:', error);
  });


  