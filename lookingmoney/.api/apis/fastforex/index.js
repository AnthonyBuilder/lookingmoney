"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'fastforex/1.6.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Fetch a single currency exchange rate, from and to any supported physical or digital
     * currency.
     *
     */
    SDK.prototype.getFetchOne = function (metadata) {
        return this.core.fetch('/fetch-one', 'get', metadata);
    };
    /**
     * Fetch multiple currency rates at once
     *
     */
    SDK.prototype.getFetchMulti = function (metadata) {
        return this.core.fetch('/fetch-multi', 'get', metadata);
    };
    /**
     * Fetch all available currency rates
     *
     */
    SDK.prototype.getFetchAll = function (metadata) {
        return this.core.fetch('/fetch-all', 'get', metadata);
    };
    /**
     * Convert an amount of one currency into another currency (supports physical and digital
     * currencies)
     *
     */
    SDK.prototype.getConvert = function (metadata) {
        return this.core.fetch('/convert', 'get', metadata);
    };
    /**
     * Fetch exchange rates for a date in the past
     *
     */
    SDK.prototype.getHistorical = function (metadata) {
        return this.core.fetch('/historical', 'get', metadata);
    };
    /**
     * Fetch a time-series dataset of currency rates for the specified interval (only daily
     * supported at launch)
     *
     */
    SDK.prototype.getTimeSeries = function (metadata) {
        return this.core.fetch('/time-series', 'get', metadata);
    };
    /**
     * Fetch a list of supported currencies
     *
     */
    SDK.prototype.getCurrencies = function () {
        return this.core.fetch('/currencies', 'get');
    };
    /**
     * Fetch a list of 200+ supported cryptocurrencies
     *
     */
    SDK.prototype.getCryptoCurrencies = function () {
        return this.core.fetch('/crypto/currencies', 'get');
    };
    /**
     * Fetch a list of 400+ supported cryptocurrency pairs
     *
     */
    SDK.prototype.getCryptoPairs = function () {
        return this.core.fetch('/crypto/pairs', 'get');
    };
    /**
     * Fetch one or more (up to 10) real-time prices for supported cryptocurrency pairs
     *
     */
    SDK.prototype.getCryptoFetchPrices = function (metadata) {
        return this.core.fetch('/crypto/fetch-prices', 'get', metadata);
    };
    /**
     * Fetch recent usage data for the supplied API key. Includes current period start, end,
     * usage and quota remaining
     *
     */
    SDK.prototype.getUsage = function () {
        return this.core.fetch('/usage', 'get');
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
