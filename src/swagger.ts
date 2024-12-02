const swaggerJsdoc = require('swagger-jsdoc')
import path from 'path'

// Configuración de Swagger-jsdoc
const swaggerOptions = {
	definition: {
		openapi: '3.0.0', // Especificación OpenAPI 3.0.0
		info: {
				title: 'API Documentation',
				version: '1.0.0',
				description: 'Documentación de la API con Swagger',
		},
		servers: [
				{
						url: 'http://localhost:3001',
						description: 'Development server',
				},
		],
		components: {
			securitySchemes: {
					bearerAuth: {
							type: 'http',
							scheme: 'bearer',
					},
			},
		},
		security: [
			{
					bearerAuth: [],
			},
		],
	},
	apis: [`${path.join(__dirname, '../../routers/*.ts')}`]
};

const swaggerspec = swaggerJsdoc(swaggerOptions);

export default swaggerspec