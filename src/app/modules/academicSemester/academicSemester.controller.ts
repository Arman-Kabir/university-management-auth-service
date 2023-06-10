import { Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;

  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );
  // logger('hello');
  res.status(200).json({
    success: true,
    message: 'academicSemester created successfully',
    data: result,
  });
});

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
