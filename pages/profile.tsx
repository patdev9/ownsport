import React, { Component } from "react";
import Link from "next/link"




class Profil extends Component {
    
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
        nom:'hhhhh',
        prenom:'',
         email: "",
         password: "",
         confirm:''
    }
    handleRefresh = async(e:any) => {
      
       
    }
    getinfo = ()=>{
        
       let t = localStorage.getItem('token')
       console.log(t)
           fetch("/api/user/edit", {
            method: 'GET',
            headers: {
              'Content-Type': "application/json",
              'Authorization': 'Bearer ' + t
            },
           
          }).then(res =>{ 
              res.json().then(res=>{
                  this.setState({["nom"]: res.nom})
                  this.setState({["prenom"]: res.prenom})
                 
                  console.log(this.state.nom)
                 
              })
           
        } )
       
    }

    modifi=()=>{
        let t = localStorage.getItem('token')
        let obj = {
            nom:this.state.nom,
            prenom:this.state.prenom,
           
          }
        console.log(t)
            fetch("/api/user/update", {
             method: 'POST',
             headers: {
               'Content-Type': "application/json",
               'Authorization': 'Bearer ' + t
             },
             body: JSON.stringify(obj)
           }).then(res =>{ 
               console.log(res)
            
         } )
    }

    delete=()=>{
        let t = localStorage.getItem('token')
       
        console.log(t)
            fetch("/api/user/delete", {
             method: 'POST',
             headers: {
               'Content-Type': "application/json",
               'Authorization': 'Bearer ' + t
             },
             
           }).then(res =>{ 
              localStorage.removeItem('token')
            
         } )
    }

    deconnexion=()=>{
        localStorage.removeItem('token')
    }

    handleChange = (name:string) => (event:any) => {
        this.setState({error: ""});
        this.setState({[name]: event.target.value});
        console.log(this.state.email)
    }

    render() {
        return (
            <div className="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
              <div className="flex justify-center py-4">
                <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
              </div>
          
              <div className="flex justify-center">
                <div className="flex">
                  <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Profile Form</h1>
                </div>
              </div>
          
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nom</label>
                <input onChange={this.handleChange("nom")} value={this.state.nom} className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 1" />
              </div>
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Prenom</label>
                <input onChange={this.handleChange("prenom")} value={this.state.prenom} className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 1" />
              </div>
            
          
              <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                <button onClick={this.getinfo} className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Mes infos</button>
                <button onClick={this.modifi} className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Modifier</button>
                <button onClick={this.deconnexion} className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Deconnexion</button>
                <button onClick={this.delete} className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Supprimer</button>
              </div>
          
            </div>
          </div>
        )
    }
}
export default Profil
