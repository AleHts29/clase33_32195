import express from 'express';
import { config } from './src/utils/config.js';
const app = express();

let PORT = process.env.PORT || config.node.PORT


app.get('/', (req, res) => {
    res.send('Hola Git')
})

app.get('/ruta-dev', (req, res) => {
    res.send('Hola dev')
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})