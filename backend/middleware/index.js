function signUpHandle(req, res, next) {
  const data = req.body;
  if (data.name && data.email && data.pass) {
    next();
  } else {
    res.send({ res: false });
  }
}

function loginHandle(req, res, next) {
  const data = req.body;
  if (data.email && data.pass) {
    next();
  } else {
    res.send({ res: false });
  }
}

module.exports = {
  signUpHandle,
  loginHandle,
};
