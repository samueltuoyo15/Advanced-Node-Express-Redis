import cors from "cors"

const corsConfig = () => {
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:3000"]
    }
  })
}