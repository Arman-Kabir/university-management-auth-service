/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import { IGenericErrorMessage } from '../../interfaces/error';
import ApiError from '../../errors/ApiError';
import handleValidationError from '../../errors/handleValidationError';
import config from '../../config';
import { errorlogger } from '../../shared/logger';
import handleZodError from '../../errors/handleZodError';
import { ZodError } from 'zod';
import handleCastError from '../../errors/handleCastError';

const globalErrorHandler: ErrorRequestHandler = (
  // err,
  error,
  req,
  res,
  next
) => {
  // console.log(err);
  //   if (err instanceof Error) {
  //     res.status(400).json({ error: err })
  //   } else {
  //     res.status(500).json({ error: 'somethign went wrong' })
  //   }

  config.env === 'development'
    ? console.log('global error handler', error)
    : errorlogger.error('global error handler', error);

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  //castError in mod-14:10
  else if (error?.name === 'CastError') {
    // res.status(200).json({error})
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    // stack: config.env !== 'production' ? error?.stack:undefined ,
  });

  next();
};

export default globalErrorHandler;

//path:
//message:
