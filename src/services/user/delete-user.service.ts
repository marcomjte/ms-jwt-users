import { log } from "console"
import { userRepository } from "../../app/repositories"
import NotFoundError from "../../errors/NotFoundError"

const removeUser = async (id: number) => {
  log(' Starting service remove user... ')
  log(' - id: ', id)

  const user = await userRepository.findOneBy({ id })
  if(!user) {
    throw new NotFoundError('User not found')
  }

  const result = userRepository.remove(user)
  log( ' - result:', result )
  log( ' - user:', user )
}

export default removeUser