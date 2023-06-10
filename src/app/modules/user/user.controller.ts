import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = req.body;
      const result = await UserService.createUser(user);
      // logger('hello');
      res.status(200).json({
        success: true,
        message: 'user created successfully',
        data: result,
      });
    } catch (err) {
      // res.status(400).json({
      //   error:err
      // })
      next(err);
    }
  }
);

export const UserController = {
  createUser,
};

//code before optimization
// async (req, res, next) => {
//   try {
//     const { user } = req.body;
//     const result = await UserService.createUser(user);
//     // logger('hello');
//     res.status(200).json({
//       success: true,
//       message: 'user created successfully',
//       data: result,
//     });
//   } catch (err) {
//     // res.status(400).json({
//     //   error:err
//     // })
//     next(err);
//   }
// };
