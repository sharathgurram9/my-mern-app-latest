const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// CRUD Routes
router.get('/', getUsers);          // GET all
router.get('/:id', getUserById);    // GET one
router.post('/', createUser);       // POST new
router.put('/:id', updateUser);     // PUT update
router.delete('/:id', deleteUser);  // DELETE

module.exports = router;
