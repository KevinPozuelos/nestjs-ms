import 'dotenv/config';
import * as joi from 'joi';
import { env } from 'process';


interface EnvVars {
    PORT: number;
    DATABASE_URL: string;
    PRODUCT_SERVICE_HOST: string;
    PRODUCTS_SERVICE_PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    PRODUCT_SERVICE_HOST: joi.string().required(),
    PRODUCTS_SERVICE_PORT: joi.number().required(),
}).unknown(true)

const {error, value} = envsSchema.validate (process.env)

if(error){
    throw new Error(`Cofing validation erro': ${ error.message}`)
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    productsMsHost: envVars.PRODUCT_SERVICE_HOST,
    productsMsPort: envVars.PRODUCTS_SERVICE_PORT,
  
}