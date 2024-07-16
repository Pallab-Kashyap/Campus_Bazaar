// const { createUser,findUser } = require("../postgresDB");
const { createUser, findUser } = require("../mongoDB/DBOperations");
const { v4 : uuidv4 } = require('uuid');
const { setUserAuthId, getUserByAuthId } = require('../services/auth')

async function handleNewUser(req, res) {
  const data = req.body;
  const user = await createUser(data.name, data.email, data.pass);

  if (user) {

    const sessionId = uuidv4();
    console.log(sessionId, user);
    setUserAuthId(sessionId, user);

    res.cookie('uid', sessionId);
    res.json({res: true, token: sessionId})
    
  } else {
    res.send({ res: false });
  }
}

async function authUser(req, res) {
  const data = req.body;
  const user = await findUser(data.email, data.pass);

  if (user) {

    // getUserByAuthId()
    res.send({ res: true });
  } else {
    res.send({ res: false });
  }
}

module.exports = {
  handleNewUser,
  authUser,
};
