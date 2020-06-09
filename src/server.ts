import express from 'express';

const app = express();


app.get('/users', () => {
    console.log('usuario Listado');
})

app.listen(3333);