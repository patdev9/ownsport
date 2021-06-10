// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { Connection, createConnection, createConnections, getConnection, getRepository } from "typeorm";
import User from '../models/user';
import { verify } from 'jsonwebtoken';

const split = (token: any) => { return token.split('Bearer ').join('') }

export default  async (req: NextApiRequest, res: NextApiResponse) => {
  let authorization = req.headers.authorization, decoded: any;
  decoded = verify(split(req.headers.authorization), <string>process.env.JWT_KEY);
  
  User.destroy({where:{id:decoded.id}})
  
  
  return res.status(200).json({message: 'votre compte a été supprimer'})  


}