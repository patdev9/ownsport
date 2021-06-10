// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { Connection, createConnection, createConnections, getConnection, getRepository } from "typeorm";
import User from '../models/user';
import { verify } from 'jsonwebtoken';



export default  async (req: NextApiRequest, res: NextApiResponse) => {
  let data =req.body
  const split = (token: any) => { return token.split('Bearer ').join('') }
  let authorization = req.headers.authorization, decoded: any;
  decoded = verify(split(req.headers.authorization), <string>process.env.JWT_KEY);
  const user = await User.findOne({ where: { id: decoded.id } })
  User.update({
    nom:data.nom || user?.nom,
    prenom:data.prenom|| user?.prenom,
  
  },{where:{id:decoded.id}})
     
       
    return res.status(200).json({message:'utilisateur cree'})        
 

}