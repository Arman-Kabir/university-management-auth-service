import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
// import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersService from './app/modules/users/users.service'

const app: Application = express()
// const port = 3000;

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Appplication routes
app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })

  res.send('working successfully')

  // throw new Error('ore error');
  // throw new ApiError(400,'ore error')
  // next('ore error');
})

//global error handler
// app.use(globalErrorHandler)

export default app
