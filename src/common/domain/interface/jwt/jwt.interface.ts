/**
 * @interface
 * @description this interface defainet the payload for token.
 */
export interface IJwtServicePayload {
  userName: string;
  role: string;
}

/**
 * @interface
 * @description this interface defainet token.
 */
export interface IJwtService {
  /**
   * check if token is valid.
   * @param {string} token - user token .
   */
  checkToken(token: string): Promise<void>;

  /**
   * create a jwt token.
   * @param {IJwtServicePayload} payload - token info content .
   * @param {string} secret - token secret key FROM env.
   * @param {string} expiresIn - token expiration time FROM env.
   */
  createToken(
    payload: IJwtServicePayload,
    secret: string,
    expiresIn: string,
  ): Promise<string>;
}
