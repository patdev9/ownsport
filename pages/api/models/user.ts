import { sequelize } from '../db/database';
import EmailException from '../exception/EmailException';
import PasswordException from '../exception/PasswordException';



import {Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,} from 'sequelize'

    

export interface UserInterface{
    id:number | null
    nom:string
    prenom:string
    email:string
    password:string
   
    
}



export default class User extends Model{

    
    public id!:number;
    public nom!: string;
    public prenom!: string;
    public email!: string;
    public password!: string;
   

    get iid(): number {
        return <number > this.id;
    }

    get fullname(): string {
        return this.nom + ' ' + this.prenom;
    }

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static async isExiste(email: string) {
        
        let user:any = await User.findAll({where:{email:email}})
           if(user.length > 0){
               return true
           }
           else{
               return false
           }
       
    }
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      prenom: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      password:{
          type:new DataTypes.STRING(128),
          allowNull: false,
      },
      
    },
    {
      tableName: "User",
      timestamps: false,
      sequelize, // passing the `sequelize` instance is required
    }
  );

  