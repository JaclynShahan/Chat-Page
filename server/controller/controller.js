const loginInfo = {
  username: '',
  password: ''
}

const loginUser = (req, res) => {
  req.session.user = loginInfo
  res.status(200).json(req.session.user)
}

const logoutUser = (req, res) => {
  req.session.detroy()
  res.status(200).json(req.session)
}

module.exports = {
  loginInfo,
  loginUser,
  logoutUser
}
