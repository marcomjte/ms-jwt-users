const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Configuración de Swagger-jsdoc
const swaggerOptions = {
	definition: {
		openapi: '3.1.0', // Especificación OpenAPI 3.0.0
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
	apis: ['./routers/*.ts']
};

const swaggerspec = swaggerJsdoc(swaggerOptions);

function swaggerDocs(app:any, port:number) {
	// Swagger Page
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerspec))
	  
}
export default swaggerDocs