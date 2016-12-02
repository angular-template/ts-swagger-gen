declare namespace swagen {
    interface Profile<TOptions> {
        /**
         * URL to retrieve the Swagger JSON.
         */
        url?: string;

        /**
         * Absolute or relative path to the file containing the Swagger JSON.
         */
        file?: string;

        /**
         * Absolute or relative path to the file where the generator output is to be written.
         */
        output: string;

        /**
         * Name of the swagen generator to use.
         */
        generator: string;

        /**
         * Optional output language, in cases where the generator supports multiple languages.
         */
        language?: string;

        /**
         * Debug configurations
         */
        debug?: {
            /**
             * If specified, writes an internal JSON representation of the parsed Swagger JSON to the specified file
             */
            definition?: string;
        };

        /**
         * Options for transforming parts of the generated output.
         */
        transforms?: Transforms;

        /**
         * Generator-specific options.
         */
        options: TOptions;
    }

    interface Transforms {
        serviceName?: string | ServiceNameTransformFn;
        operationName?: string | OperationNameTransformFn;
    }

    type ServiceNameTransformFn = (serviceName: string, details: any) => string;
    type OperationNameTransformFn = (operationName: string, details: any) => string;
}
