const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
let bcrypt = require('bcryptjs');
// var cors = require('cors');
let config = require('config');
let jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
// const passport = require('passport');
const DBname = require('./config/keys').mongoURI;
const User = require('../server/models/User')
const validateLoginInput = require('../server/validation/login')
const validateRegisterInput = require('../server/validation/register')

const cors =  require('cors');
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

mongoose.connect(DBname,{
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(()=> console.log('connection established'))
  .catch(err => {
      console.log(err.message)
  }) 

  app.post('/login', function(req, res) {
    console.log(req.body)
    const {email, password } = req.body;
const { errors, isValid } = validateLoginInput({email,password,name:email});
// Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email }).then(user => {
      if (!user) return res.status(400).json({ msg: 'User does not exist' });
      //validate password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) return res.status(400).json({ msg: 'invalid credentials' });
        jwt.sign(
          {
            id: user.id,
            email: user.email,
            name: user.name
          },
          'JwtSecret',
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                user: user.id,
                email: user.email,
                name: user.name
              },
              success: true
            });
          }
        );
      });
    });
  });
  app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    console.log(req.body);
//     // Form validation
    const { errors, isValid } = validateRegisterInput({name,email,password, password2:password});
// // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email }).then(user => {
        if (user) return res.status(400).json({ msg: 'User already exist' });
      });
      const newUser = new User({
        name,
        email,
        password
      });
      //create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            jwt.sign(
              { id: user.id },
              'secret',
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    // id: user.id,
                    name: user.name,
                     number: user.number,
                     password: user.password
                  },
                  success: true
                });
               
              }
            );
          });
        })
    })
  })
  // const users = require('./../server/routes/api/user')

//passport middleware
// app.use(passport.initialize());
// Passport config
// require("./config/passport")(passport);
// Routes
// app.use("/register", users);
// app.use("/login/loginUser",users)

const PORT =  5000;
const port = process.env.PORT || PORT;
app.listen(port, ()=> {console.log(`Server up and running on port ${port} !`)})


