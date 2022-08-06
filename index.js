require("dotenv/config")
const express = require('express');
const cors = require('cors')
const {connect} = require('mongoose');

const router = require('./routes/index')
const app = express();
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("./swagger_output.json")
app.use(express.urlencoded({extended: false}))

app.use(express.json());
app.use(router)
app.use("/doc", swaggerUi.serve, swaggerUi/swaggerUi.setup(swaggerFile))

const runApp = async () =>
{
    try
    {
        await connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Successfully connected to the database ${process.env.MONGO_DB}`)
        app.listen(process.env.PORT, () => {
            console.log(`Server Started on PORT ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
        runApp()
    }
}

runApp()