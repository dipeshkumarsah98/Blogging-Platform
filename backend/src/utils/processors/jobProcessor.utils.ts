import Queue from 'bull';
import env from 'config/env.config';
import mailer from 'config/mailer.config';
import logger from 'utils/logger.utils';
import {
  sendOtpTemplate,
  sendWelcomeTemplate,
} from '../emailTemplates/template.utils';

const { EMAIL_ADDRESS, APP_NAME } = env;

const processOTPJob = async (job: Queue.Job) => {
  try {
    logger.info(`Sending otp email to '${job.data.email}'`);
    const message = {
      from: EMAIL_ADDRESS,
      to: job.data.email,
      subject: `${APP_NAME} Email Verification`,
      html: sendOtpTemplate(job.data),
    };

    return await mailer.sendMail(message);
  } catch (error) {
    logger.error(`Failed to send Otp mail to '${job.data.email}`);
  }
  return null;
};

const processWelcomeJob = async (job: Queue.Job) => {
  try {
    logger.info(`Sending welcome email to '${job.data.email}'`);

    const message = {
      from: EMAIL_ADDRESS,
      to: job.data.email,
      subject: `Welcome to ${APP_NAME}`,
      html: sendWelcomeTemplate(job.data),
    };
    return await mailer.sendMail(message);
  } catch (error) {
    logger.error(`Failed to send welcome mail to '${job.data.email}'`);
  }
  return null;
};

export { processOTPJob, processWelcomeJob };
