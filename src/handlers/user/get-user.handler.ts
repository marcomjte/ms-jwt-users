import { log } from "console"
import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import findUser from "../../services/user/find-user.service"
import UserParamsSchema, { UserParamSchemaType } from "../../schemes/user/param-user.schema"
import { JSON } from "../../constants/mime-types.constants"

const getUserHandler: RequestHandler = async (req, res, next) => {
  log('Starting get handler...')
  const { id }: UserParamSchemaType = UserParamsSchema.parse({
    id: parseInt(req.params.id)
  })

  log('- id', id)

  const user = await findUser(id)
  res.status(200).contentType(JSON).send(user)
}

export default expressAsyncHandler(getUserHandler)