import express, { Request, Response } from "express"
import morgan from "morgan"
import * as dotenv from 'dotenv'
import { dataSource } from './db/data-source'

dataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!')
    })
    .catch((err) => {
        console.error('Error during Data Source initialization: ', err)
    })

const app = express()

dotenv.config()
app.use(morgan("dev"))

app.get("/", (req: Request, res: Response) => {
    res.json({ "hello": "world" })
})

const port = Number(process.env.PORT || 5000)
app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on port ${port}`)
})