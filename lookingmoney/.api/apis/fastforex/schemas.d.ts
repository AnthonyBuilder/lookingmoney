declare const GetConvert: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly pattern: "[A-Z0-9]{3,6}";
                    readonly description: "Base currency symbol (physical or digital)";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly pattern: "[A-Z0-9]{3,6}";
                    readonly description: "Target currency symbol (physical or digital)";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: 0.01;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Amount of source currency to convert";
                };
                readonly precision: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rounding precision for converted amount, defaults to 2 decimal places";
                };
            };
            readonly required: readonly ["to", "amount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly base: {
                    readonly type: "string";
                    readonly pattern: "[A-Z0-9]{3,6}";
                    readonly description: "Currency code for a physical or digital/cryptocurrency";
                };
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly amount: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly result: {
                    readonly type: "object";
                    readonly minProperties: 2;
                    readonly maxProperties: 2;
                    readonly properties: {
                        readonly rate: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                    };
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCryptoCurrencies: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly currencies: {
                    readonly type: "object";
                    readonly minProperties: 200;
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCryptoFetchPrices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pairs: {
                    readonly type: "string";
                    readonly pattern: "[A-Z0-9]{3,6}/[A-Z0-9]{3,6}(,[A-Z0-9]{3,6}/[A-Z0-9]{3,6})*";
                    readonly description: "Up to 10 target currency pairs, comma separated in XXX/YYY format";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["pairs"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly prices: {
                    readonly type: "object";
                    readonly minProperties: 1;
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCryptoPairs: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly pairs: {
                    readonly type: "object";
                    readonly minProperties: 400;
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly description: "Defines a currency trading pair.";
                        readonly properties: {
                            readonly base: {
                                readonly type: "string";
                                readonly pattern: "[A-Z0-9]{3,6}";
                                readonly description: "Base currency in the pair";
                                readonly examples: readonly ["USD"];
                            };
                            readonly quote: {
                                readonly type: "string";
                                readonly pattern: "[A-Z0-9]{3,6}";
                                readonly description: "Quote currency in the pair";
                                readonly examples: readonly ["BTC"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCurrencies: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly currencies: {
                    readonly type: "object";
                    readonly minProperties: 130;
                    readonly additionalProperties: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFetchAll: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Base currency 3-letter symbol, defaults to USD";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly base: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Three-letter ISO 4217 currency code";
                };
                readonly updated: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}";
                    readonly description: "UTC/GMT datetime YYYY-MM-DD HH:MM:SS";
                };
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "object";
                    readonly minProperties: 130;
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFetchMulti: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Base currency 3-letter symbol, defaults to USD";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}(,[A-Z]{3})*";
                    readonly description: "Target currencies, comma separated list of 3-letter symbols";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly base: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Three-letter ISO 4217 currency code";
                };
                readonly updated: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}";
                    readonly description: "UTC/GMT datetime YYYY-MM-DD HH:MM:SS";
                };
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "object";
                    readonly minProperties: 1;
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFetchOne: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly pattern: "[A-Z0-9]{3,6}";
                    readonly description: "Base currency symbol (physical or digital), defaults to USD";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly pattern: "[A-Z0-9]{3,6}";
                    readonly description: "Target currency symbol (physical or digital), defaults to USD";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly base: {
                    readonly type: "string";
                    readonly pattern: "[A-Z0-9]{3,6}";
                    readonly description: "Currency code for a physical or digital/cryptocurrency";
                };
                readonly updated: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}";
                    readonly description: "UTC/GMT datetime YYYY-MM-DD HH:MM:SS";
                };
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly result: {
                    readonly type: "object";
                    readonly minProperties: 1;
                    readonly maxProperties: 1;
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetHistorical: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                    readonly description: "UTC date in YYYY-MM-DD format. Must be in the past and after 2015-01-01.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly from: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Base currency 3-letter symbol, defaults to USD";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}(,[A-Z]{3})*";
                    readonly description: "Target currencies, comma separated list of 3-letter symbols. Defaults to all currencies if omitted";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["date"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly base: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Three-letter ISO 4217 currency code";
                };
                readonly date: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                    readonly description: "UTC/GMT date YYYY-MM-DD";
                };
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "object";
                    readonly minProperties: 130;
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTimeSeries: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Base currency 3-letter symbol, defaults to USD";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Target currency 3-letter symbol";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly start: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                    readonly description: "UTC start date in YYYY-MM-DD format. Must be in the past and after 2015-01-01.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly end: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                    readonly description: "UTC end date in YYYY-MM-DD format. Must be in the past and after 2015-01-01.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly interval: {
                    readonly type: "string";
                    readonly description: "ISO8601 duration, such as P1D (daily). Defaults to P1D. At launch only supports daily.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["to", "start", "end"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                    readonly description: "UTC/GMT date YYYY-MM-DD";
                };
                readonly end: {
                    readonly type: "string";
                    readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                    readonly description: "UTC/GMT date YYYY-MM-DD";
                };
                readonly interval: {
                    readonly type: "string";
                    readonly description: "ISO8601 Duration. https://en.wikipedia.org/wiki/ISO_8601#Durations";
                };
                readonly base: {
                    readonly type: "string";
                    readonly pattern: "[A-Z]{3}";
                    readonly description: "Three-letter ISO 4217 currency code";
                };
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "object";
                    readonly minProperties: 1;
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "float";
                        readonly minimum: -3.402823669209385e+38;
                        readonly maximum: 3.402823669209385e+38;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUsage: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly monthly_quota: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly ms: {
                    readonly type: "number";
                    readonly format: "int32";
                    readonly description: "Server response time in milliseconds";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly usage: {
                    readonly type: "object";
                    readonly minProperties: 15;
                    readonly maxProperties: 15;
                    readonly additionalProperties: {
                        readonly type: "number";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly current_period: {
                    readonly type: "object";
                    readonly properties: {
                        readonly start: {
                            readonly type: "string";
                            readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                            readonly description: "UTC/GMT date YYYY-MM-DD";
                        };
                        readonly end: {
                            readonly type: "string";
                            readonly pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}";
                            readonly description: "UTC/GMT date YYYY-MM-DD";
                        };
                        readonly remaining_quota: {
                            readonly type: "number";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly usage: {
                            readonly type: "number";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetConvert, GetCryptoCurrencies, GetCryptoFetchPrices, GetCryptoPairs, GetCurrencies, GetFetchAll, GetFetchMulti, GetFetchOne, GetHistorical, GetTimeSeries, GetUsage };
