import PrismaService from 'config/db.config';
import { CreateUserDto, UpdateUserDto } from 'dto/user.dto';

const userExist = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  const user = await PrismaService.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });
  return user;
};

const findUserByEmail = async (email: string) => {
  const user = await PrismaService.user.findUnique({ where: { email } });
  return user;
};

const createUser = async (data: CreateUserDto) => {
  const user = await PrismaService.user.create({ data });
  return user;
};

const findUser = async (id: string) => {
  const user = await PrismaService.user.findUnique({ where: { id } });
  return user;
};

const findManyUsers = async () => {
  const users = await PrismaService.user.findMany();
  return users;
};

const updateUser = async (id: string, data: UpdateUserDto) => {
  const user = await PrismaService.user.update({ where: { id }, data });
  return user;
};

const deleteUser = async (id: string) => {
  const user = await PrismaService.user.delete({ where: { id } });
  return user;
};

export {
  createUser,
  findUser,
  findManyUsers,
  updateUser,
  deleteUser,
  findUserByEmail,
  userExist,
};
