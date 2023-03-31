const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require ("../controllers/user.js") ;
const { verifyAdmin, verifyToken, verifyUser } = require ("../utils/verifyToken.js");

const { Router } = require('express');
const router = Router();

//router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//  res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.route("/:id")
  .put(verifyUser, updateUser);

//DELETE
router.route("/:id")
  .delete(verifyUser, deleteUser);

//GET
router.route("/find/:id")
  .get(verifyUser, getUser);

//GET ALL
router.route('/')
  .get(verifyAdmin, getUsers);

module.exports = router;
