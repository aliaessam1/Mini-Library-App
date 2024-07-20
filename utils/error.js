export class appError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export const catchAsyncError = (func) => {
    return (req, res, next) => {
      func(req, res, next).catch((err) =>next(err)
      );
    };
  };
  
  //takes func(async function) as an argument and returns a a new func
  //the async functions returns a promise so it can catch the errors
  