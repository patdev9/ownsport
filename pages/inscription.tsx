
import Link from "next/link"
import { cpuUsage, ppid } from "process"
import { Component, useState } from "react"
import { MetadataAlreadyExistsError } from "typeorm";



// export default function Inscription(this: any) {

//     const p = 'fdsfsdfsd'
//     const a='sd'
//     let nom = useState('')
//     function pp(){
//         console.log(nom)
//     }
    

//     return (
     
//         <div className="font-sans">
//         <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
//             <div className="relative sm:max-w-sm w-full">
//                 <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
//                 <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
//                 <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
//                     <label  className="block mt-3 text-sm text-gray-700 text-center font-semibold">
//                         Registrate {p}
//                     </label>
//                     <form method="POST" action="api/user/inscription" className="mt-10">
                                        
//                         <div>
//                             <input name="nom" type="text" placeholder="Nombres" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
//                         </div>
            
//                         <div className="mt-7">                
//                             <input name="prenom" type="text" placeholder="Prenom" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
//                         </div>
//                         <div className="mt-7">                
//                             <input name="email" type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
//                         </div>
    
//                         <div className="mt-7">                
//                             <input  name='password' type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
//                         </div>
    
//                         <div className="mt-7">                
//                             <input   type="password" placeholder="Confirmar contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
//                         </div>
    
                        
            
//                         <div className="mt-7">
                            
//                             <button onClick={pp}  type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
//                                 Registrar 
//                             </button>
//                         </div>
            
                      
            
//                         <div className="mt-7">
//                             <div className="flex justify-center items-center">
//                                 <label className="mr-2" >¿Ya tienes una cuenta?</label>
//                                 <Link href="/" >
//                                     <button className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
//                                     Iniciar sesion
//                                     </button>
                                    
//                                 </Link>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
//   }
  class Inscription extends Component {
    
    constructor(props:any) {
        super(props);
        this.state = {
           nom:'',
           prenom:'',
            email: "",
            password: "",
            confirm:''
          
            
        }
        
    }
    state = {
        nom:'',
        prenom:'',
         email: "",
         password: "",
         confirm:''
    }
    handleRefresh = async(e:any) => {
      
       
    }
    handleChange = (name:string) => (event:any) => {
        this.setState({error: ""});
        this.setState({[name]: event.target.value});
        
    }
    register =()=>{
        
        let obj = {
            nom:this.state.nom,
            prenom:this.state.prenom,
            email: this.state.email,
            password: this.state.password
          }
          return fetch("api/user/inscription", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
              'Content-Type': "application/json",
              Authorization: `Bearer ` 
              
            },
            body: JSON.stringify(obj)
          }).then(res=>{ console.log(res)})
       
    }
    render() {
        return (
            <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label  className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Registrate 
                        </label>
                        <div className="mt-10">
                                            
                            <div>
                                <input onChange={this.handleChange("nom")} value={this.state.nom} name="nom" type="text" placeholder="Nombres" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                            </div>
                
                            <div className="mt-7">                
                                <input onChange={this.handleChange("prenom")} value={this.state.prenom} name="prenom" type="text" placeholder="Prenom" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>
                            <div className="mt-7">                
                                <input onChange={this.handleChange("email")} value={this.state.email} type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>
        
                            <div className="mt-7">                
                                <input onChange={this.handleChange("password")} value={this.state.password} name='password' type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>
        
                            <div className="mt-7">                
                                <input onChange={this.handleChange("confirm")} value={this.state.confirm}  type="password" placeholder="Confirmar contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>
        
                            
                
                            <div className="mt-7">
                                
                                <button onClick={this.register}  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Registrar 
                                </button>
                            </div>
                
                          
                
                            <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2" >¿Ya tienes una cuenta?</label>
                                    <Link href="/" >
                                        <button className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Iniciar sesion
                                        </button>
                                        
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Inscription
