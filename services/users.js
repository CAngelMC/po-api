const User = require('../models/Users');
const bcrypt = require('bcrypt');

class UsersService {
  async getUsers() {
    const users = await User.find();
    return users || [];
  }

  async getUser({ email }) {
    const user = await User.find({ email: email });
    return user[0] || {};
  }

  async createUser({ user }) {
    const newUser = new User(user);
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
    await newUser.save();
    return newUser.id;
  }

  async updateUser({ userId, user }) {
    const updatedUser = new User(user);
    updatedUser._id = userId;
    await User.findByIdAndUpdate(userId, updatedUser);
    return updatedUser.id;
  }

  async deleteUser({ userId }) {
    await User.findByIdAndUpdate(userId);
    return userId;
  }
}

module.exports = UsersService;
