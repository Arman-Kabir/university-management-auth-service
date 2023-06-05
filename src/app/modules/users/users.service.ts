import { User } from './users.model'
import { IUser } from './users.interface'
import config from '../../../config/index'
import { generateUserId } from './users.utils'
// import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // dafault password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Failed to create user! ')
    // throw new ApiError(400, 'Failed to create user! ')
  }

  return createdUser
}

export default {
  createUser,
}
