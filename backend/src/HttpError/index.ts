export default class HttpError extends Error {
  private httpStatusCode: number;

  /**
   * Class made to deal with Errors and send the proper HTTP status code
   * @param (Number) [statusCode] Can be any value between 100 ~ 500
   * @param (String) [message] Any message regarding the Error
   */
  constructor(statusCode: number, message: string) {
    super(message);
    this.httpStatusCode = statusCode;
  }

  get statusCode() {
    return this.httpStatusCode;
  }
}
