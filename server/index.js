import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares/middlewares.js'
import router from "./routes/servers.js"


const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()


app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'client/views/pages'))

app.use(express.static(path.resolve(__dirname + '/client')))
app.use(requestTime)
app.use(logger)
app.use(router)


app.listen(PORT, () => {
    console.log("Server has been started...")
})