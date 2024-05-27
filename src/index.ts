import express, { Request, Response } from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import * as dotenv from "dotenv"

import { dataSource } from "./db/data-source"
import { errorHandler } from "./middlewares/errorHandler"

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization: ", err)
    })

const app = express()

dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(errorHandler)

app.get("/", (req: Request, res: Response) => {
    res.json({ "hello": "world" })
})

const port = Number(process.env.PORT || 5000)
app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on port ${port}`)
})