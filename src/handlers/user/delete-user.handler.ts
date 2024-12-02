import { log } from "console"
import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import removeUser from "../../services/user/delete-user.service"
import UserParamsSchema, { UserParamSchemaType } from "../../schemes/user/param-user.schema"
import { JSON } from "../../constants/mime-types.constants"

const deleteUserHandler: RequestHandler = async (req, res, next) => {
  log('Starting delete handler...')
  const { id }: UserParamSchemaType = UserParamsSchema.parse({
    id: parseInt(req.params.id)
  })

  log('- id', id)

  const user = await removeUser(id)
  res.status(200).contentType(JSON).send()
}

export default expressAsyncHandler(deleteUserHandler)