import mongoose from 'mongoose'
import { IGenericErrorResponse } from '../interfaces/common'
import { IGenericErrorMessage } from '../interfaces/error'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidationError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )

  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
  //Rest of the code
}

export default handleValidationError
