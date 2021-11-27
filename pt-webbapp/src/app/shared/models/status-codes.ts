/**
 * Status codes used to figure out what happened in for example a communication attempt to the server.
 */
export enum StatusCodes {
  Success = 200,
  Error = 400,
  EmailAlreadyInUse = 409,
  InvalidEmail = 510,
  NotFound = 404,
  CantAccess = 403,
}
