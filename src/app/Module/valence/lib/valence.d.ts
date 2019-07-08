/** Declaration file generated by dts-gen */

export class ApplicationContext {
    constructor(appId: any, appKey: any, ...args: any[]);

    createUrlForAuthentication(host: any, port: any, callback: any): any;

    createUserContext(host: any, port: any, url: any, skew: any): any;

    createUserContextWithValues(host: any, port: any, userId: any, userKey: any, skew: any): any;

}

export class UserContext {
    constructor(parameters: any);

    createAuthenticatedUrl(path: any, method: any): any;

    createUrlForAuthentication(path: any, method: any): any;

}

export namespace Auth {
    const APP_AUTH_ID_PARAM: string;

    const APP_AUTH_KEY_PARAM: string;

    const APP_ID_PARAM: string;

    const AUTH_URL: string;

    const CALLBACK_PARAM: string;

    const SIGNED_APP_PARAM: string;

    const SIGNED_TOKEN_PARAM: string;

    const TIMESTAMP_PARAM: string;

    const TOKEN_ID_PARAM: string;

    function isAuthenticated(url: any): any;

}

export namespace Util {
    function Sign(data: any, key: any): any;

    function base64Url(b64: any): any;

    function calculateSkew(response: any): any;

    function encodeURL(url: any): any;

    function getTimestamp(): any;

    function getTokenUrl(host: any, path: any, port: any, parameters: any): any;

    function parseFromUrl(name: any, url: any): any;

}
