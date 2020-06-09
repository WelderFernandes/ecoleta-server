import express from 'express';

const app = express();


app.get('/users', (request, response) => {
    console.log('usuario Listado');

    response.json([
        'Welder',
        'Diego',
        'teste'
    ])
})

app.listen(3333);