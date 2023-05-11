import express, { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from '../service/user.service';
const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).send(await getAllUsers());
  } catch (error) {
    res.status(404).send(error);
  }
});

route.get('/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    res.status(200).send(await getUserById(_id));
  } catch (error) {
    res.status(404).send(error);
  }
});

route.post('/', async (req: Request, res: Response) => {
  try {
    const obj = req.body;
    res.status(200).send(await createUser(obj));
  } catch (error) {
    res.status(404).send(error);
  }
});

route.delete('/:_id', async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    res.status(200).send(await deleteUser(_id));
  } catch (error) {
    res.status(404).send(error);
  }
});

route.put('/:_id', async (req: Request, res: Response) => {
  try {
    const obj = req.body;
    const { _id } = req.params;
    res.status(200).send(await updateUser(_id, obj));
  } catch (error) {
    res.status(404).send(error);
  }
});

export default route;
