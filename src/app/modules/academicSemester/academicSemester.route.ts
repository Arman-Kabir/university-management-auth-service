import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { academicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
);

router.get(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester
);
router.patch('/:id', academicSemesterController.updateSemester);

router.get('/', academicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
