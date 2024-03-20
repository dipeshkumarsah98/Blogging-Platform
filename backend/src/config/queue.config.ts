/* eslint-disable import/no-extraneous-dependencies */
import Queue from 'bull';
import {
  processWelcomeJob,
  processOTPJob,
} from 'utils/processors/jobProcessor.utils';
import { MAIL_QUEUE, SEND_OTP, WELCOME_MSG } from '../constants/mail.constants';
import env from './env.config';
import logger from 'utils/logger.utils';

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = env;

const emailQueue = new Queue(MAIL_QUEUE, {
  redis: { port: +REDIS_PORT, host: REDIS_HOST, password: REDIS_PASSWORD },
});

emailQueue.on('active', (job) => {
  logger.info(`Processing job ${job.id} of type ${job.name}`);
});

emailQueue.on('completed', (job) => {
  logger.info(`Completed job ${job.id} of type ${job.name}`);
});

emailQueue.on('failed', (job, error) => {
  logger.warn(
    `Failed job ${job.id} of type ${job.name}: ${error.message}`,
    error.stack
  );
});

emailQueue.process(SEND_OTP, processOTPJob);
emailQueue.process(WELCOME_MSG, processWelcomeJob);

export default function createJob(name: string, data: any) {
  const options = {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
    removeOnComplete: true,
    removeOnFail: true,
  };
  emailQueue.add(name, data, options);
}
