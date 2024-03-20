export interface OtpMailerDto {
  otp: string;
  email: string;
  name: string;
}

export type WelcomeMailerDto = Omit<OtpMailerDto, 'otp'>;
