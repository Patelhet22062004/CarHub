const express = require("express")
const userController = require("../controllers/user")
const checkAuthMiddleware = require("../middleware/check-auth")
const router = express.Router();

//Create a user
router.post("/sign-up",userController.signUpUser);

//Login user
router.post("/login",userController.loginUser);

// Get user by ID
router.get('/:id',userController.getUserById);

// Update user details
router.put('/:id' ,userController.updateUser);

// Delete user
router.delete('/:id' ,userController.deleteUser);

// Change user password
router.put('/change-password/:id' ,userController.changePassword);

module.exports = router;