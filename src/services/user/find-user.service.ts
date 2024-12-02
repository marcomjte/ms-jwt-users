import { log } from "console"
import { userRepository } from "../../app/repositories"
import NotFoundError from "../../errors/NotFoundError"

interface User {
  id:number
  name: string
  surname: string
  email: string
  language: string
}
const findUser = async (id: number) => {
  log(' Starting service find user... ')
  log(' - id: ', id)

  const user = await userRepository.findOneBy({ id })
  if(!user) {
    throw new NotFoundError('User not found')
  }

  const { name, surname, email, language } = user
  const userData: User = {
    id,
    name,
    surname,
    email,
    language
  }
  return userData
}

export default findUser