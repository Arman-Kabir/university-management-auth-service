import express from 'express'
import usersController from './users.controller'

const router = express.Router()

router.post('/create-user', usersController.createUser)
// router.post('/create-user', ()=>{
//     console.log('hello');
// })

export default router
