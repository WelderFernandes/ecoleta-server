import express from 'express';

const app = express();


app.get('/users', (request, response) => {
    console.log('usuario Listado');

    response.json([
        'Welder',
        'Diego',
        'Katy',
        'Maker'
    ])
})

app.listen(3333);