import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from "*/config/environtment";

const app = express()

connectDB().catch(console.log)

app.get('/', (req, res) => {
    res.end('<h1>Hello Viet!</h1><hr/>')
})

app.listen(env.HOST, env.PORT, () => {
    console.log('hello')
})