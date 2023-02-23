import express from 'express';
const app = express();

let PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.send('Hola Git')
})

app.get('/ruta-dev', (req, res) => {
    res.send('Hola dev')
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})