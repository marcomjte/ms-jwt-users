import { log } from "console"
import User from "../../entities/User"
import { userRepository } from "../../app/repositories"
import NotFoundError from "../../errors/NotFoundError"
import bcrypt from 'bcrypt'

const storeUser = async (name: string, surname: string, email: string, password: string, language: string) => {
  log('Starting service store user... ')

  const userMail = await userRepository.findOneBy({ email })
  log(' - user', userMail)
  if(userMail) {
    throw new NotFoundError('Duplicate entry ' + email)
  }
  
  const user: User = new User()

  user.name = name
  user.surname = surname
  user.email = email
  user.language = language

  const password_crypted = await bcrypt.hash(password, 12);
  user.password = password_crypted

  const result = await userRepository.save(user)
  log( ' - result:', result )
  log( ' - user:', user )

  return user
}

export default storeUser