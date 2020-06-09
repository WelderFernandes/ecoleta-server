import express from 'express';

const app = express();


app.get('/users', (request, response) => {
    console.log('usuario Listado');
})

app.listen(3333);