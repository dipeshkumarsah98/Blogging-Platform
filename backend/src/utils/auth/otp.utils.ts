import { totp } from 'otplib';
import env from 'config/env.config';

const { OTP_SECRET, OTP_DURATION_IN_SECS } = env;

totp.options = {
  step: +OTP_DURATION_IN_SECS,
};

const generateOtp = () => totp.generate(OTP_SECRET);

const verifyOtp = (otp: string) =>
  totp.verify({ token: otp, secret: OTP_SECRET });

export { generateOtp, verifyOtp };
