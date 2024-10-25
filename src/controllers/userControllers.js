const express = require('express');
const userService = require(`../service/userService`);
const router = express.Router();

router.get('/User', async(req,res) =>{
    const users = userService.getAllUsers();
    res.json(Users);
})
module.exports = router;