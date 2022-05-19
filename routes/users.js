const express = require('express');
const { isAuthorised } = require('../middlewares/auth.middleware');
const {
  getListUsers,
  addUser,
  findUserById,
  changeUserById,
  deleteUserById } = require('../services/user.service');
const router = express.Router();

/* GET users listing. */
router.get('/', isAuthorised, function (req, res, next) {
  let result = getListUsers();
  if (result) {
    res.send(result)
  } else {
    res.status(400).send(`Some error`);
  }

});

/* GET users by id */
router.get('/:id', isAuthorised, function (req, res, next) {
  findUserById(req.params.id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      res.send(result)
    }
  });

});

/* delete users by id */
router.delete('/:id', isAuthorised, function (req, res, next) {
  deleteUserById(req.params.id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      res.send(result)
    }
  });

});

/* change users by id */
router.put('/:id', isAuthorised, function (req, res, next) {
  changeUserById(req.params.id, req.body, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      res.send(result)
    }
  });

});

/* add user */
router.post('/', isAuthorised, function (req, res, next) {
  addUser(req.body, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      res.send(result)
    }
  });

});
module.exports = router;
