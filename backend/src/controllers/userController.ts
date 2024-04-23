import { Request, Response } from 'express';
import UserModel from '../models/userModel';  

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserModel.findById(parseInt(req.params.id));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
