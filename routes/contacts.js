// This will will have CRUD functionality with the contacts
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/Users');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Sever Error');
  }
});

// @route   POST api/contacts
// @desc    add new contact
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is Required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const constact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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
