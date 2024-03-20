import createJob from 'config/queue.config';
import { OtpMailerDto, WelcomeMailerDto } from 'dto/mailer.dto';
import { SEND_OTP, WELCOME_MSG } from 'constants/mail.constants';

const sendOtp = (otpMailerDto: OtpMailerDto) => {
  createJob(SEND_OTP, otpMailerDto);
};

const sendWelcome = (welcomeMailerDto: WelcomeMailerDto) => {
  createJob(WELCOME_MSG, welcomeMailerDto);
};

export { sendOtp, sendWelcome };
