import proprietarioRouter from "./routes/proprietario.route.js"
import express from 'express'


const app = express()

app.use(express.json())

app.use("/proprietario", proprietarioRouter)


app.use((err, req, res, next) => {
    res.status(404).send({error: err.message})
})

app.listen(3005, () => {
    console.log('Servidor rodando!')
})