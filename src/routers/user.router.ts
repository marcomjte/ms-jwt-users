import { Router, Request, Response } from 'express';

import authenticationMiddleware from "../middlewares/authentication-handler.middleware"
import getUserHandler from "../handlers/user/get-user.handler"
import putUserHandler from "../handlers/user/put-user.handler"
import postUserHandler from "../handlers/user/post-user.handler"
import deleteUserHandler from "../handlers/user/delete-user.handler"
import userSchema from "../schemes/user/data-user.schema"
import validationsEnforceMiddleware from "../middlewares/validations-enforce.middleware"

const userRouter = Router() 

/**
 * @openapi
 * '/user/{id}':
 *  get:
 *     summary: Obtener usuario por id
 *     description: End point para poder obtener los datos de un usuario mediante ID
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Jorge Adiel"
 *                 surname:
 *                   type: string
 *                   example: "Hernandez Guzman"
 *                 email:
 *                   type: string
 *                   example: "jorge@gmail.com"
 *                 language:
 *                   type: string
 *                   example: "es"
 *       404:
 *         description: Not found
 */
userRouter.get('/user/:id', [ authenticationMiddleware ], getUserHandler)

/**
 * @openapi
 * '/user/{id}':
 *   put:
 *     summary: Actualizar usuario por ID
 *     description: End point que actualiza los datos del usuario mediante ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jorge"
 *               surname:
 *                 type: string
 *                 example: "Hernandez Gutierrez"
 *               email:
 *                 type: string
 *                 example: "jorge@gmail.com"
 *               pasword:
 *                 type: string
 *                 example: "Ds3Fksdf!98hDn"
 *               language:
 *                 type: string
 *                 example: "es"
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *       404:
 *         description: Not found
 */
userRouter.put('/user/:id', [ authenticationMiddleware, validationsEnforceMiddleware(userSchema) ], putUserHandler)

/**
 * @openapi
 * '/user':
 *   post:
 *     summary: Crear un usuario nuevo
 *     description: End point que permite realizar un registro nuevo de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Jorge"
 *               surname:
 *                 type: string
 *                 example: "Hernandez Gutierrez"
 *               email:
 *                 type: string
 *                 example: "jorge@gmail.com"
 *               pasword:
 *                 type: string
 *                 example: "Ds3Fksdf!98hDn"
 *               language:
 *                 type: string
 *                 example: "es"
 *     responses:
 *       201:
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 34
 *                 name:
 *                   type: string
 *                   example: "Jorge"
 *                 surname:
 *                   type: string
 *                   example: "Hernandez Gutierrez"
 *                 email:
 *                   type: string
 *                   example: "jorge@gmail.com"
 *                 language:
 *                   type: string
 *                   example: "es"
 */
userRouter.post('/user', [ authenticationMiddleware, validationsEnforceMiddleware(userSchema) ], postUserHandler)

/**
 * @openapi
 * '/user/{id}':
 *   delete:
 *     summary: Borrar un usuario por ID
 *     description: End point que nos permite borrar un usuario mediante ID
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *       404:
 *         description: Not found
 */
userRouter.delete('/user/:id', [ authenticationMiddleware ], deleteUserHandler)

export default userRouter