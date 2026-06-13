import multer from "multer";

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Mongoose Bad ObjectId
  if (err.name === "CastError") {
    statusCode = 404;
    message = `Resource not found. Invalid ID: ${err.value}`;
  }

  // Mongoose Duplicate Key
  if (err.code === 11000) {
    statusCode = 400;

    const field = Object.keys(err.keyValue)[0];

    message = `${field} already exists`;
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400;

    message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }

  // Multer File Size Error
  if (
    err instanceof multer.MulterError &&
    err.code === "LIMIT_FILE_SIZE"
  ) {
    statusCode = 400;
    message = "File size exceeds the allowed limit";
  }

  // JWT Invalid Token
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  // JWT Expired Token
  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token has expired";
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack:
      process.env.NODE_ENV === "production"
        ? undefined
        : err.stack,
  });
};

export default errorHandler;