const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json') // Make sure the path matches your file

const app = express()

// Serve Swagger UI on /api-docs or your preferred route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Other app routes and middleware here...

const PORT = process.env.SWAGGER_PORT || 3500

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
