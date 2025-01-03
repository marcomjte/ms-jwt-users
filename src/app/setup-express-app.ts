import express, { } from "express"
import cors from 'cors'
import helmet from "helmet";
import errorHandler from "../middlewares/error-handler.middleware"
import userRouter from "../routers/user.router"
import swaggerDocument from './../swagger'
import { urlencoded } from 'body-parser'
import path from 'path'

const setupExpressApp = () => {
  const app = express()

  app.use(helmet())
  app.use(helmet.xssFilter())
  app.use(helmet.frameguard({ action: 'deny' }))
  app.use(
    helmet.hsts({
      maxAge: 60 * 60 * 24 * 365, // 1 año en segundos
    })
  )
  app.use(urlencoded({ limit: '50kb', extended: true }))
  app.use(cors({
    exposedHeaders: ['*', 'X-Total-Pages']
  }))

  app.use(express.json())

  app.use('/', userRouter)
	swaggerDocument(app, 3001)
    
  app.use(errorHandler)
  
  let { PORT: port } = process.env
  port = port || '3001'
  app.listen(+port, () => {
    console.log(' Server is listen on port: ', port)
  })
}

export default setupExpressApp