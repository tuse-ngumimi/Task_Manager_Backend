const { stack } = require("../routes/taskRoutes")

const errorHandler = (errr, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode).json({
    message: errorHandler.message,
    stack: process.env.NODE_ENV === 'production' ? null : errorHandler.stack
  })
}

module.exports = { errorHandler }