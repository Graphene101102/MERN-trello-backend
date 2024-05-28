import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from "*/config/environtment"
import { BoardModel } from './models/board.model'
import { ColumnModel } from './models/column.model'

connectDB()
    .then(() => console.log('connected successfully'))
    .then(() => bootServer())
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

const bootServer = () => {
    const app = express()

    app.get('/', async (req, res) => {

        // let fakeData ={
        //     boardId:'6655783f72662e0762bbc96e',
        //     title: 'Quang Viet',
        // }
        // await ColumnModel.createNew(fakeData)

        res.end('<h1>hello</h1><hr/>')
    })

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log('hello')
    })
}