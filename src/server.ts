import express from 'express'
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate'
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))

if( process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*', function (req,res) {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.use(errors());
const PORT = process.env.PORT || 8000;
app.listen(PORT) 