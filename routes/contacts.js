// This will will have CRUD functionality with the contacts
const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    get all users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    update contact
// @access  Private
router.put('/', (req, res) => {
  res.send('Update Contact');
});

// @route   DELETE api/contacts/:id
// @desc    delete contact
// @access  Private
router.delete('/', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;