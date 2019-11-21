// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// let config = require('config');
// const keys = require("../../config/keys");
// // Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");
// // Load User model
// const User = require("../../models/User");


// // @route POST api/users/register
// // @desc Register user
// // @access Public
// router.post("/", (req, res) => {
//     const { name, email, password } = req.body;

//     console.log(req.body);
// //     // Form validation
//     const { errors, isValid } = validateRegisterInput({name,email,password, password2:password});
// // // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     User.findOne({ email }).then(user => {
//         if (user) return res.status(400).json({ msg: 'User already exist' });
//       });
//       const newUser = new User({
//         name,
//         email,
//         password
//       });
//       //create salt and hash
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser.save().then(user => {
//             jwt.sign(
//               { id: user.id },
//               'secret',
//               { expiresIn: 3600 },
//               (err, token) => {
//                 if (err) throw err;
//                 res.json({
//                   token,
//                   user: {
//                     // id: user.id,
//                     name: user.name,
//                      number: user.number,
//                      password: user.password
//                   },
//                   success: true
//                 });
               
//               }
//             );
//           });
//         })
//     })
// //     User.findOne({ email: req.body.email }).then(user => {
// //         if (user) {
// //             return res.status(400).json({ email: "Email already exists" });
// //         } else {
// //             const newUser = new User({
// //                 name: req.body.name,
// //                 email: req.body.email,
// //                 password: req.body.password
// //             });
// // // Hash password before saving in database
// //             bcrypt.genSalt(10, (err, salt) => {
// //                 bcrypt.hash(newUser.password, salt, (err, hash) => {
// //                     if (err) throw err;
// //                     newUser.password = hash;
// //                     newUser
// //                         .save()
// //                         .then(user => res.json(user))
// //                         .catch(err => console.log(err));
// //                 });
// //             });
// //         }
// //     });

    

// });




// router.get('/test', (req, res) => {
//   res.json("result...");
// });


// router.post('/login', function(req, res) {
//     console.log(req.body)
//     const {email, password } = req.body;
// const { errors, isValid } = validateLoginInput({email,password,name:email});
// // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     User.findOne({ email }).then(user => {
//       if (!user) return res.status(400).json({ msg: 'User does not exist' });
//       //validate password
//       bcrypt.compare(password, user.password).then(isMatch => {
//         if (!isMatch) return res.status(400).json({ msg: 'invalid credentials' });
//         newUser.save().then(user => {
//             jwt.sign(
//               { id: user.id },
//               'secret',
//               { expiresIn: 3600 },
//               (err, token) => {
//                 if (err) throw err;
//                 res.json({
//                   token,
//                   user: {
//                     // id: user.id,
//                     name: user.name,
//                     //  number: user.number,
//                      email:user.email
//                   },
//                   success: true
//                 });
               
//               }
//             );
//           });
//         })
//     })
//   });

// // @route POST api/users/login
// // @desc Login user and return JWT token
// // @access Public
// // router.post("/login", (req, res) => {
// //     console.log(req.body)
// //     // Form validation
// //     const { errors, isValid } = validateLoginInput(req.body);
// // // Check validation
// //     if (!isValid) {
// //         return res.status(400).json(errors);
// //     }
// //     const email = req.body.email;
// //     const password = req.body.password;
// // // Find user by email
// //     User.findOne({ email }).then(user => {
// //         // Check if user exists
// //         if (!user) {
// //             return res.status(404).json({ emailnotfound: "Email not found" });
// //         }
// // // Check password
// //         bcrypt.compare(password, user.password).then(isMatch => {
// //             if (isMatch) {
// //                 // User matched
// //                 // Create JWT Payload
// //                 const payload = {
// //                     id: user.id,
// //                     name: user.name
// //                 };
// // // Sign token
// //                 jwt.sign(
// //                     payload,
// //                     keys.secretOrKey,
// //                     {
// //                         expiresIn: 31556926 // 1 year in seconds
// //                     },
// //                     (err, token) => {
// //                         res.json({
// //                             success: true,
// //                             token: "Bearer " + token
// //                         });
// //                     }
// //                 );
// //             } else {
// //                 return res
// //                     .status(400)
// //                     .json({ passwordincorrect: "Password incorrect" });
// //             }
// //         });
// //     });
// // });










// module.exports = router;
