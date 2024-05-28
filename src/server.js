import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from "*/config/environtment"
import { BoardModel } from './models/board.model'
import { ColumnModel } from './models/column.model'

import { apiV1 } from './routes/V1'

connectDB()
    .then(() => console.log('connected successfully'))
    .then(() => bootServer())
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

const bootServer = () => {
    const app = express()

    //enable req.body 
    app.use(express.json())

    app.use('/v1', apiV1)

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log('hello')
    })
}