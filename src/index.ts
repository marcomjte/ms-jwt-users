import dotenv from 'dotenv'
dotenv.config()
import { log } from 'console'

log("Initializing all ....")
import { AppDataSource } from './app/data-source'
import setupExpressApp from './app/setup-express-app'
log("all loaded ....")

AppDataSource.initialize().then(() => setupExpressApp())
