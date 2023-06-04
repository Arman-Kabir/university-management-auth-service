import { Request, Response, NextFunction } from 'express'

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(err);
  //   if (err instanceof Error) {
  //     res.status(400).json({ error: err })
  //   } else {
  //     res.status(500).json({ error: 'somethign went wrong' })
  //   }

  next()
}

export default globalErrorHandler
