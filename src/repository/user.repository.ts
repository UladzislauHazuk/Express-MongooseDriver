import { Collections, ObjectId } from '../db';

const getAllUsersDB = async () => {
  return await Collections.User.find();
};

const getUserByIdDB = async (_id) => {
  return await Collections.User.find({"_id": new ObjectId(_id)});
};

const createUserDB = async obj => {
  await Collections.User.collection.insertOne(obj);
  return 'Success';
};

const deleteUserDB = async (_id) => {
    await Collections.User.deleteOne({"_id": new ObjectId(_id)});
    return 'Success';
  };

const updateUserDB = async (_id, obj) => {
    await Collections.User.updateOne({"_id": new ObjectId(_id)}, obj);
    return 'Success';
  };

export { getAllUsersDB, getUserByIdDB, createUserDB, deleteUserDB, updateUserDB };
