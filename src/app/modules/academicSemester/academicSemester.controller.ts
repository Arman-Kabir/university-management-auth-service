import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;

    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();

    // logger('hello');
    // res.status(200).json({
    //   success: true,
    //   message: 'academicSemester created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Created Successfully',
      data: result,
    });
  }
);

export const academicSemesterController = {
  createSemester,
};

//code before optimization
// async (req, res, next) => {
//   try {
//     const { ...academicSemesterData } = req.body;
//     const result = await AcademicSemesterService.createSemester(
//       academicSemesterData
//     );
//     // logger('hello');
//     res.status(200).json({
//       success: true,
//       message: 'academicSemester created successfully',
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// }
