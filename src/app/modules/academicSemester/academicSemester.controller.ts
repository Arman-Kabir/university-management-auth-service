import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableFileds } from './academicSemester.constant';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;

    // console.log('Aca Sem');
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    // logger('hello');
    // res.status(200).json({
    //   success: true,
    //   message: 'academicSemester created successfully',
    //   data: result,
    // });
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Created Successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const paginationOptions = {
    //   page:Number(req.query.page),
    //   limit:Number(req.query.limit),
    //   sortBy:req.query.sortBy,
    //   sortOrder:req.query.sortOrder
    // };

    const filters = pick(req.query, academicSemesterFilterableFileds);

    const paginationOptions = pick(req.query, paginationFields);

    console.log(filters);

    // console.log(paginationOptions);

    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: ' Semesters retrieved Successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await AcademicSemesterService.getSingleSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: ' Semester retrieved Successfully',
      data: result,
    });
    next();
  }
);

export const academicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
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
