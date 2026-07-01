const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  res.send("Data received");
};

module.exports = { registerUser };
