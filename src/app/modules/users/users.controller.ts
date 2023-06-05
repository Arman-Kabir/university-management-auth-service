import { Request, Response } from 'express'
import usersService from './users.service'
// import { logger } from '../../../shared/logger';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    // logger('hello');
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user ',
      // error:err
    })
    // next(err)
  }
}

export default {
  createUser,
}
