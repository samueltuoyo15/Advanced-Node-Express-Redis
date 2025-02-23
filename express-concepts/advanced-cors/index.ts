import express from "express" 
import { corsConfig } from "./config/corsConfig.ts"

const app = express()
app.use(corsConfig())
app.use(express.json())

app.listen(5000, () => console.log("app is running at http://localhost:5000"))