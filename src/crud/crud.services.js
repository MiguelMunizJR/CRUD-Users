const {
  getAllUsers,
  getUserById,
  createNewUser,
} = require("./crud.controller");

const getAll = (req, res) => {
  const data = getAllUsers();
  res.status(200).json(data);
};

const getOne = (req, res) => {
  const id = req.params.id;
  const data = getUserById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ id: id, message: "Invalid ID" });
  }
};

const createOne = (req, res) => {
  const user = req.body;

  if (user) {
    const data = createNewUser(user);
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "Missing Data" });
  }
};

module.exports = {
  getAll,
  getOne,
  createOne,
};
