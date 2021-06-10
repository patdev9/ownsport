import React, { Component } from "react";
import Link from "next/link"



// export default function Home() {
//   return (
   
//  <div className="font-sans">
//             <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
//                 <div className="relative sm:max-w-sm w-full">
//                     <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
//                     <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
//                     <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
//                         <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
//                             Login
//                         </label>
//                         <form method="POST" action="/api/user/connexion" className="mt-10">
                                           
//                             <div>
//                                 <input value="aa@aa" name='email' type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
//                             </div>
                
//                             <div className="mt-7">                
//                                 <input value="aaa" name='password' type="password"  placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
//                             </div>

//                             <div className="mt-7 flex">
//                                 <label  className="inline-flex items-center w-full cursor-pointer">
//                                     <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember"/>
//                                     <span className="ml-2 text-sm text-gray-600">
//                                         Recuerdame
//                                     </span>
//                                 </label>
                
//                                <div className="w-full text-right">     
//                                     <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
//                                         ¿Olvidó su contraseña?
//                                     </a>                                  
//                                </div>
//                             </div>
                
//                             <div className="mt-7">
//                                 <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
//                                     Login
//                                 </button>
//                             </div>
                
                           
                
//                              <div className="mt-7">
//                                 <div className="flex justify-center items-center">
//                                     <label className="mr-2" >¿Eres nuevo?</label>
//                                     <Link href="/inscription" >
//                                       <button className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
//                                       Crea una cuenta
//                                       </button>
                                        
//                                     </Link>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//   )
// }
class Page extends Component {
    
    constructor(props:any) {
        super(props);
        this.state = {
           
            email: "",
            password: "",
          
            
        }
        
    }
    state = {
        email:'',
        password:''
    }
    handleRefresh = async(e:any) => {
      
       
    }
    handleChange = (name:string) => (event:any) => {
        this.setState({error: ""});
        this.setState({[name]: event.target.value});
        console.log(this.state.email)
    }
    connexion = ()=>{
        
        let obj = {
            email: this.state.email,
            password: this.state.password
          }
           fetch("/api/user/connexion", {
            method: 'POST',
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify(obj)
          }).then(res =>{ 
              res.json().then(res =>  localStorage.setItem('token', res.token.token))
           
        } )
       
    }
    render() {
        return (
            <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Login
                        </label>
                        <div  className="mt-10">
                                           
                            <div>
                                <input onChange={this.handleChange("email")} value={this.state.email} name='email' type="email" placeholder="Correo electronico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                            </div>
                
                            <div className="mt-7">                
                                <input onChange={this.handleChange("password")} value={this.state.password} name='password' type="password"  placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>

                            <div className="mt-7 flex">
                                <label  className="inline-flex items-center w-full cursor-pointer">
                                    <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember"/>
                                    <span className="ml-2 text-sm text-gray-600">
                                        Recuerdame
                                    </span>
                                </label>
                
                               <div className="w-full text-right">     
                                    <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                                        ¿Olvidó su contraseña?
                                    </a>                                  
                               </div>
                            </div>
                
                            <div className="mt-7">
                                <button onClick={this.connexion} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>
                
                           
                
                             <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2" >¿Eres nuevo?</label>
                                    <Link href="/inscription" >
                                      <button className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                      Crea una cuenta
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
export default Page
