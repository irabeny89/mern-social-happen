import dotenv from 'dotenv'

dotenv.config()
export default {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "0d8afdccc5bacd293a8865f968b2d14a",
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || `mongodb://${process.env.IP || 'localhost'}:${process.env.MONGO_PORT || '27017'}/happen`
}