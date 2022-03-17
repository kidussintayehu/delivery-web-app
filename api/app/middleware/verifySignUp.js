const db =  require("../models");
const ROLES = db.ROLES;
const User = db.user;


checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  if(req.body.username === "" || req.body.email === "" || req.body.password === "" || req.body.roles === ""){
    res.status(404).send({
      message:"blank input is not permissable"
    })
    return;
  }
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    console.log(req.body.roles,'req.body.roles')
    // const roles = req.body.roles
    // const roles = roles.toSmaller
    if(ROLES[0] ==! req.body.roles  || ROLES[1] ==! req.body.roles){
      res.status(400).send({
        message: `Failed! Role ${req.body.roles} does not exist!`
      });
      return;
    }
  }

next();
    }
//     for (let i = 0; i < req.body.roles.length; i++) {
//       console.log(ROLES.includes(req.body.roles[i]))
//       if (!ROLES.includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: `Failed! Role ${req.body.roles[i]} does not exist!`
//         });
//         return;
//       }
//     }
//   }
//   next();
// };

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
module.exports = verifySignUp;