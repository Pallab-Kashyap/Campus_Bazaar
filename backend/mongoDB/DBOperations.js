const { User } = require("./mongoDB");

async function createUser(name, email, pass) {
  try {
    const user = await User.create({
      userName: name,
      email: email,
      password: pass,
    });

    return user || false;
  } catch (error) {
    console.log(error);
  }
}

async function findUser(email, pass) {
  try {
    const user = await User.find({ email: email });

    if (user && user[0].password === pass) {
      return user;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createUser,
  findUser,
};
