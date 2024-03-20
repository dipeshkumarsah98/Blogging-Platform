/* eslint-disable @typescript-eslint/no-explicit-any */
import { getReasonPhrase } from 'http-status-codes';

export default (statusCode: number, data: any) => {
  const type = getReasonPhrase(statusCode);
  return { status: statusCode, success: true, type, payload: { ...data } };
};
