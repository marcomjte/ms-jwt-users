
import HttpError from "./HttpError";

export default class forbiddenError extends HttpError{
  constructor(message: string){
    super(403, message)
  }
}