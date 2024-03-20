import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import sucessResponse from 'utils/common/sucessResponse.utils';
import { CreateUserDto } from 'dto/user.dto';
import ValidationError from 'errors/badRequestError';
import * as UserService from '../services/user.service';

const checkUserId = async (id: string) => {
  if (!id) {
    throw new ValidationError('Id required in params.');
  }

  const userExists = await UserService.findUser(id);

  if (!userExists) {
    throw new ValidationError('User not found');
  }
};

const findAll = async (req: Request, res: Response) => {
  const users = await UserService.findManyUsers();

  return res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, users));
};

const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.findUser(id);

  if (!user) {
    throw new ValidationError('User not found');
  }

  res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, user));
};

const createOne = async (req: Request, res: Response) => {
  const data: CreateUserDto = req.body;

  const userExists = await UserService.userExist({
    email: data.email,
    username: data.username,
  });

  if (userExists) {
    throw new ValidationError('User already exists');
  }

  const user = await UserService.createUser(data);

  res
    .status(StatusCodes.CREATED)
    .json(sucessResponse(StatusCodes.CREATED, user));
};

const updateOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  await checkUserId(id);

  const data = req.body;

  const user = await UserService.updateUser(id, data);

  res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, user));
};

const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  await checkUserId(id);

  const user = await UserService.deleteUser(id);

  res.status(StatusCodes.OK).json(sucessResponse(StatusCodes.OK, user));
};

export { findOne, createOne, deleteOne, updateOne, findAll };
