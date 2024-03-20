interface CreateUserDto {
  name: string;
  username: string;
  email: string;
  password: string;
}

type UpdateUserDto = Partial<CreateUserDto>;

export { CreateUserDto, UpdateUserDto };
