/**
 * Wraps an async Express handler so any thrown error / rejected promise
 * is forwarded to next(), landing in the errorHandler middleware.
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};