import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    // eslint-disable-next-line camelcase
    const { email, name, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      email,
      name,
      password,
    });

    delete user.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete (await user).password;

    return response.json(user);
  }
}
