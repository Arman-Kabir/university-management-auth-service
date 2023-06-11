import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import { UserRoutes } from './app/modules/user/user.route';
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import routes from './app/routes';
import httpStatus from 'http-status';
// import ApiError from './errors/ApiError'

// import usersService from './app/modules/users/users.service'

const app: Application = express();
// const port = 3000;

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Appplication routes
// app.use('api/v1/users/', )

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1/', routes);
// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     throw new Error('Testing Error logger');
// //   Promise.reject(new Error(' Unhandled Promise Rejection'))
// //   throw new ApiError(400, 'ore error')

//   //   res.send('working successfully')
//   //   throw new Error('ore error');
//   // next('ore error');
// })

//global error handler
app.use(globalErrorHandler);

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
