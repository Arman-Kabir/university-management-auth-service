import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

export const academicSemesterController = {
  createSemester,
};
