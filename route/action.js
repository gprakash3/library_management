const express=require('express');
const router=express.Router()

const expenseController=require('../controller/record');

router.post('/add' , expenseController.postData);
router.post('/delete' , expenseController.postDelete);
router.get('/data' , expenseController.getAllData);
module.exports = router;