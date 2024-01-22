/** 
 * Custom error class for Express, extending standard JavaScript Error.
 * It allows easy addition of an HTTP status code when creating an instance.
 *
 * This class is intended for use by the error-handling middleware, 
 * which can respond with this error instance, including the associated status code.
 */

class ExpressError extends Error {
     constructor(msg, status) {
          super();
          this.msg = msg;
          this.status = status;
          console.error(this.stack);
     }
}

module.exports = ExpressError;