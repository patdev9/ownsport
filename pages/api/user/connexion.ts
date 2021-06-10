// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PasswordException from '../exception/PasswordException';
import { decode, sign } from 'jsonwebtoken';
import User from '../models/user';


export default async (req: NextApiRequest, res:NextApiResponse) => {
  let data: any = req.body;

  
      let client:any = await User.findAll({where:{email:data.email}});
      
      if (client.length < 0)
          throw new Error(`Email don't exist!`)
      client = client[0]
      console.log(client.dataValues.password)
      console.log(data.password)
      const isOk = await PasswordException.comparePassword(data.password, client.dataValues.password);
     
      if (!isOk)
          throw new Error(`User is undefined!`)
      console.log(client)
     
      const theToken: any = await sign({ id: client.dataValues.id, email: client.dataValues.email }, < string > process.env.JWT_KEY, { expiresIn: '1h' })

      const token = {
          token: theToken,
          expired: await ( < any > decode(theToken)).exp
      }
      const {id,email}=client
      console.log(token)
     
      return res.status(200).json({token,client:{id,email}});
  
}
