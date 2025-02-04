import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type GetConvertMetadataParam = FromSchema<typeof schemas.GetConvert.metadata>;
export type GetConvertResponse200 = FromSchema<typeof schemas.GetConvert.response['200']>;
export type GetCryptoCurrenciesResponse200 = FromSchema<typeof schemas.GetCryptoCurrencies.response['200']>;
export type GetCryptoFetchPricesMetadataParam = FromSchema<typeof schemas.GetCryptoFetchPrices.metadata>;
export type GetCryptoFetchPricesResponse200 = FromSchema<typeof schemas.GetCryptoFetchPrices.response['200']>;
export type GetCryptoPairsResponse200 = FromSchema<typeof schemas.GetCryptoPairs.response['200']>;
export type GetCurrenciesResponse200 = FromSchema<typeof schemas.GetCurrencies.response['200']>;
export type GetFetchAllMetadataParam = FromSchema<typeof schemas.GetFetchAll.metadata>;
export type GetFetchAllResponse200 = FromSchema<typeof schemas.GetFetchAll.response['200']>;
export type GetFetchMultiMetadataParam = FromSchema<typeof schemas.GetFetchMulti.metadata>;
export type GetFetchMultiResponse200 = FromSchema<typeof schemas.GetFetchMulti.response['200']>;
export type GetFetchOneMetadataParam = FromSchema<typeof schemas.GetFetchOne.metadata>;
export type GetFetchOneResponse200 = FromSchema<typeof schemas.GetFetchOne.response['200']>;
export type GetHistoricalMetadataParam = FromSchema<typeof schemas.GetHistorical.metadata>;
export type GetHistoricalResponse200 = FromSchema<typeof schemas.GetHistorical.response['200']>;
export type GetTimeSeriesMetadataParam = FromSchema<typeof schemas.GetTimeSeries.metadata>;
export type GetTimeSeriesResponse200 = FromSchema<typeof schemas.GetTimeSeries.response['200']>;
export type GetUsageResponse200 = FromSchema<typeof schemas.GetUsage.response['200']>;
