import Mailgen from 'mailgen';
import env from 'config/env.config';
import { OtpMailerDto, WelcomeMailerDto } from 'dto/mailer.dto';

const { APP_NAME, CLIENT_URL } = env;

const MailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: `${APP_NAME}`,
    link: 'https://phasezeroclothing.com/',
    copyright: `Copyright © 2024 ${APP_NAME}. All rights reserved.`,
  },
});

export function sendOtpTemplate(otpMailerDto: OtpMailerDto) {
  const { name, otp } = otpMailerDto;

  const template = {
    body: {
      name,
      title: 'Verify your email address',
      intro:
        "Confirm it's you by entering the code. Ignore if you're not making an account.",
      action: {
        instructions: `<br><strong>To get started with ${APP_NAME}, Verify this OPT:</strong>`,
        button: {
          color: '#48cfad',
          text: otp,
          link: '#',
        },
      },
      outro:
        'We will never email you and ask you to disclose or verify your password.',
    },
  };

  return MailGenerator.generate(template);
}
export function sendWelcomeTemplate(welcomeMailerDto: WelcomeMailerDto) {
  const { email, name } = welcomeMailerDto;

  const template = {
    body: {
      name,
      title: `Welcome to ${APP_NAME}`,
      intro: `You have successfully created an account on ${APP_NAME}`,
      dictionary: {
        name,
        email,
      },
      outro: 'Thank you for joining with us',
    },
  };

  return MailGenerator.generate(template);
}
