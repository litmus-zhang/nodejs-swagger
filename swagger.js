const swaggerAutogen = require("swagger-autogen")()
require("dotenv").config();

const doc = {
    info: {
        version: "1.0.0",
        title: "Quick start to auto-docs with swagger",
        description: "Auto-documenting our APIs with Swagger documentation. Tutorial by Daniel Olabemiwo"
    },
    host: "localhost:3000", // 3000 is our port
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
    ],
    definitions: {
        StudentModel: {
            $firstname: "Ade",
            $lastname: "Samuel",
            $middlename: "Daniel",
            $class: "BASIC 3",
            $age: 10
        },
    }
};


const outputFile = "./swagger_output.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require("./index");
});