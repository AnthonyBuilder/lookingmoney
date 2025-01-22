import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Fetch a single currency exchange rate, from and to any supported physical or digital
     * currency.
     *
     */
    getFetchOne(metadata: types.GetFetchOneMetadataParam): Promise<FetchResponse<200, types.GetFetchOneResponse200>>;
    /**
     * Fetch multiple currency rates at once
     *
     */
    getFetchMulti(metadata: types.GetFetchMultiMetadataParam): Promise<FetchResponse<200, types.GetFetchMultiResponse200>>;
    /**
     * Fetch all available currency rates
     *
     */
    getFetchAll(metadata?: types.GetFetchAllMetadataParam): Promise<FetchResponse<200, types.GetFetchAllResponse200>>;
    /**
     * Convert an amount of one currency into another currency (supports physical and digital
     * currencies)
     *
     */
    getConvert(metadata: types.GetConvertMetadataParam): Promise<FetchResponse<200, types.GetConvertResponse200>>;
    /**
     * Fetch exchange rates for a date in the past
     *
     */
    getHistorical(metadata: types.GetHistoricalMetadataParam): Promise<FetchResponse<200, types.GetHistoricalResponse200>>;
    /**
     * Fetch a time-series dataset of currency rates for the specified interval (only daily
     * supported at launch)
     *
     */
    getTimeSeries(metadata: types.GetTimeSeriesMetadataParam): Promise<FetchResponse<200, types.GetTimeSeriesResponse200>>;
    /**
     * Fetch a list of supported currencies
     *
     */
    getCurrencies(): Promise<FetchResponse<200, types.GetCurrenciesResponse200>>;
    /**
     * Fetch a list of 200+ supported cryptocurrencies
     *
     */
    getCryptoCurrencies(): Promise<FetchResponse<200, types.GetCryptoCurrenciesResponse200>>;
    /**
     * Fetch a list of 400+ supported cryptocurrency pairs
     *
     */
    getCryptoPairs(): Promise<FetchResponse<200, types.GetCryptoPairsResponse200>>;
    /**
     * Fetch one or more (up to 10) real-time prices for supported cryptocurrency pairs
     *
     */
    getCryptoFetchPrices(metadata: types.GetCryptoFetchPricesMetadataParam): Promise<FetchResponse<200, types.GetCryptoFetchPricesResponse200>>;
    /**
     * Fetch recent usage data for the supplied API key. Includes current period start, end,
     * usage and quota remaining
     *
     */
    getUsage(): Promise<FetchResponse<200, types.GetUsageResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
