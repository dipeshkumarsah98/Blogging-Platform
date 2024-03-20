import { CreateUserDto } from 'dto/user.dto';
import UnauthorizedError from 'errors/unauthorizedError';
import { comparePassword, hashPassword } from 'utils/auth/bcrypt.utils';
import generateTokens from 'utils/auth/jwtToken.utils';
import * as userService from '../services/user.service';

const signUp = async (data: CreateUserDto) => {
  const hashPass = await hashPassword(data.password);

  const user = await userService.createUser({
    ...data,
    password: hashPass,
  });

  return user;
};

const signIn = async (data: { email: string; password: string }) => {
  const user = await userService.findUserByEmail(data.email);
  if (!user) {
    throw new UnauthorizedError('Invalid email or password');
  }
  const { password, ...rest } = user;
  const isValid = await comparePassword(data.password, password);
  if (!isValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const token = generateTokens({ id: user.id, email: user.email });

  return {
    user: rest,
    token,
  };
};

export { signUp, signIn };
