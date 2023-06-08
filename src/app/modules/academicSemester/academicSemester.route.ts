import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
);
// router.post('/create-user', ()=>{
//     console.log('hello');
// })

export const UserRoutes = router;
