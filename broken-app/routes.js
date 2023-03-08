const express = require('express');
const ExpressError = require('./errorHandling');
let axios = require('axios');
const router = new express.Router();
const {getDevelopers} = require('./helper')


router.post('/', async function(req, res, next) {
    try {
        if(!req.body.developers) throw new ExpressError('need developers', 400)
        let developersInfo = await getDevelopers(req.body.developers)
        return res.json(developersInfo);
    } catch (err) {
      next(err);
    }
   
  });

  module.exports = router;