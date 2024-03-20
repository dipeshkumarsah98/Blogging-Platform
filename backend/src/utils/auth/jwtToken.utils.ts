import jwt from 'jsonwebtoken';
import env from 'config/env.config';

const { JWT_SECRET_KEY, ACCESSTOKENEXPIRETIME, REFRESHTOKENEXPIRETIME } = env;

function generateTokens(fields: { id: string; email: string }) {
  const accessToken = jwt.sign(fields, JWT_SECRET_KEY, {
    expiresIn: ACCESSTOKENEXPIRETIME,
  });

  const refreshToken = jwt.sign(fields, JWT_SECRET_KEY, {
    expiresIn: REFRESHTOKENEXPIRETIME,
  });

  return {
    accessToken,
    refreshToken,
  };
}

export default generateTokens;
