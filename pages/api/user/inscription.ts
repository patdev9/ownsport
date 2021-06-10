// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { Connection, createConnection, createConnections, getConnection, getRepository } from "typeorm";
import User from '../models/user';




export default  async (req: NextApiRequest, res: NextApiResponse) => {
  let data =req.body
  if (req.method === 'POST') {
    
  
      console.log(data)
      const pass = await PasswordException.hashPassword(data.password);
      const user = await User.create({
          id:null,
          nom: data.nom,
          prenom:data.prenom,
          email:data.email,
          password:pass,
          
      })
     
      console.log(user.id)
      
      return res.status(200).json({message:'utilisateur cree'})        
 

  }


}
