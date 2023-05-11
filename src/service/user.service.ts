import { getAllUsersDB, getUserByIdDB, createUserDB, deleteUserDB, updateUserDB } from '../repository/user.repository';

const getAllUsers = async () => {
  return await getAllUsersDB();
};

const getUserById = async (_id) => {
  return await getUserByIdDB(_id);
};

const createUser = async obj => {
  return await createUserDB(obj);
};

const deleteUser = async (_id) => {
    return await deleteUserDB(_id);
  };

const updateUser = async (_id, obj) => {
    return await updateUserDB(_id, obj);
  };

export { getAllUsers, getUserById, createUser, deleteUser, updateUser };
