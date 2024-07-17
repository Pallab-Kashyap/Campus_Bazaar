const { User } = require("./mongoDB");

async function createUser(name, email, pass) {
  const user = await User.create({
    userName: name,
    email: email,
    password: pass,
  });

  return user;
}

async function findUser(email, pass) {
  const user = await User.find({ email: email });

  if (user[0].password === pass) {
    return user;
  }
  return false;
}

module.exports = {
  createUser,
  findUser,
};
