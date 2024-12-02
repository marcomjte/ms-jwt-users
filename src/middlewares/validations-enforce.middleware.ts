
import { log } from "console";
import { RequestHandler } from "express";
import { ZodArray, ZodEffects, ZodObject } from "zod";

const validationsEnforceMiddleware = (schema: ZodObject<any> | ZodEffects<ZodObject<any>> | ZodArray<any>): RequestHandler => {

  return (req, res, next) => {
    console.log('Validating request body');    
    try {
      schema.parse(req.body)
      log(' - request body is valid')
      next()
    } catch (error) {
      log(' - request body is invalid')
      log(' - error: ', error)
      next({ error, type: 'ZodError' })
    }      
  }
}

const validationsQueryEnforceMiddleware = (schema: ZodObject<any> | ZodEffects<ZodObject<any>> | ZodArray<any>): RequestHandler => {
  return (req, res, next) => {
    console.log('Validating request query');    
    try {
      schema.parse(req.query)
      log(' - request query is valid')
      next()
    } catch (error) {
      log(' - request query is invalid')
      next({ error, type: 'ZodError' })
    }      
  }
}

const validationsPathParamsMiddleware = (schema: ZodObject<any> | ZodEffects<ZodObject<any>> | ZodArray<any>): RequestHandler => {
  return (req, res, next) => {
    console.log('Validating request path params')
    try {
      schema.parse(req.params)
      console.log(' - request path params are valid')
      next()
    } catch (error) {
      console.log(' - request path params are invalid')
      next({ error, type: 'ZodError' })
    }
  }
};
export default validationsEnforceMiddleware
export const validationsQueryEnforce = validationsQueryEnforceMiddleware
export const validationsPathParamsEnforce = validationsPathParamsMiddleware

