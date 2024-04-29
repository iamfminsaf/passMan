const getPasswords = (req, res) => {
  res.json({
    msg: "get all passwords",
  });
};
const newPassword = (req, res) => {
  const {title,app,password} = req.body
  res.json({
    msg: "Created new password",
  });
};
const updatePassword = (req, res) => {
  res.json({
    msg: `Update password of ${req.params.id}`,
  });
};
const deletePassword = (req, res) => {
  res.json({
    msg: `get all passwords ${req.params.id}`,
  });
};

module.exports = { getPasswords, newPassword, updatePassword, deletePassword };
