const UUID = require("uuid").v4;

const database = [
  {
    id: "6328a0a9-7660-4e79-ba84-7db16114b268",
    first_name: "Miguel",
    last_name: "Muñiz",
    email: "miguel@hotmail.com",
    password: "123456",
    birthday: "1999/10/12",
  },
  {
    id: "69aa4f33-5206-40fd-960e-32a1689cec75",
    first_name: "Juan",
    last_name: "Lopez",
    email: "juan@outlook.com",
    password: "135790",
    birthday: "1992/02/22",
  },
  {
    id: "dc10c1c2-d93e-42e2-b26d-30061826b387",
    first_name: "Gabriela",
    last_name: "Jimenez",
    email: "gabriela@live.com",
    password: "gabriela123456",
    birthday: "1999/11/16",
  },
];

const getAllUsers = () => {
  return database;
};

const getUserById = (id) => {
  const data = database.find((user) => user.id === id);
  return data;
};

const createNewUser = (data) => {
  const user = {
    id: UUID(),
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password,
    birthday: data.birthday,
  };

  database.push(user);

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
};
