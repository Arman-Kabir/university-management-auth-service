import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
// import ApiError from './errors/ApiError'

// import usersService from './app/modules/users/users.service'

const app: Application = express()
// const port = 3000;

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Appplication routes
// app.use('api/v1/users/', )
app.use('/api/v1/users/', UserRoutes)

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
app.use(globalErrorHandler)

export default app
