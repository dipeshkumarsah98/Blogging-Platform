import Joi from 'joi';
import dotenv from 'dotenv';

dotenv.config();

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'staging')
      .required(),
    PORT: Joi.number().positive().required(),
    JWT_SECRET_KEY: Joi.string().required(),
    ACCESSTOKENEXPIRETIME: Joi.string().required(),
    REFRESHTOKENEXPIRETIME: Joi.string().required(),
    BUCKET_NAME: Joi.string().required(),
    BUCKET_REGION: Joi.string().required(),
    AWS_ACCESS_KEY: Joi.string().required(),
    AWS_SECRET_ACCESS_KEY: Joi.string().required(),
    APP_NAME: Joi.string().required(),
    CLIENT_URL: Joi.string().required(),
    REDIS_HOST: Joi.string().required(),
    REDIS_PORT: Joi.string().required(),
    REDIS_PASSWORD: Joi.string().allow(''),
    EMAIL_SERVICE: Joi.string().required(),
    EMAIL_ADDRESS: Joi.string().required(),
    EMAIL_PASSWORD: Joi.string().required(),
    SMTP_PORT: Joi.string().required(),
    OTP_SECRET: Joi.string().required(),
    OTP_DURATION_IN_SECS: Joi.string().required(),
  })
  .unknown();

const { value: env, error } = envVarsSchema
  .prefs({
    errors: { label: 'key' },
  })
  .validate(process.env);

if (error) {
  throw new Error(`Config env validation error: ${error.message}`);
}

export default env;
