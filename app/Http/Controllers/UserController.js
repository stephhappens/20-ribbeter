'use strict';

const UserModel = use('App/Model/User');

class UserController {

  * index(request, response) {
    const users = yield UserModel.all();

    yield response.sendView('user.index', { users: users.toJSON() });
  }

  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {
    const { username } = request.all();
    const { id } = request.currentUser;

    const user = yield UserModel.create({
      user_id: id,
      username,
      email,
    });
  }
}

module.exports = UserController;
