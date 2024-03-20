import bcrypt from 'bcrypt';

const saltRound = 10;

/**
 * Compare hash password with new one
 * @param {string} newPassword
 * @param {string} hashedPassword
 *
 */
export const comparePassword = async (
  password: string,
  oldPassword: string
) => {
  const isValid = await bcrypt.compare(password, oldPassword);
  return isValid;
};

/**
 * Hash password
 * @param {string} password
 *
 */
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
