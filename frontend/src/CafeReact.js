import React, {Component} from "react";
import CafeMenu from './CafeMenu'
import axios from "axios";
import MenuDetail from "./MenuDetail";
import CreateMenu from "./CreateMenu";
import AddOrderPanel from "./AddOrderPanel"
export default class CafeReact extends Component {
    constructor(props) {
        super(props)
         this.state = {
             single_menu: [],
             haserror:false,
             rendermenu:true,
             addorder:false,
             viewdetail:false
        };

        this.getItemId = this.getItemId.bind(this)
        this.addorder = this.addorder.bind(this)
        this.completeorder = this.completeorder(this)

    }

    addorder(){
       this.setState({
                         rendermenu:false,
                         addorder:true,
                         viewdetail:false
                     })
    }
     completeorder(){
       this.setState({
                         rendermenu:true,
                         addorder:false,
                         viewdetail:false
                     })
    }


    reloadpage(){
        this.setState({
                         rendermenu:true,
                         viewdetail:false

                     })
    }

    getItemId(event) {
          let currentComponent = this;

       axios.get('http://localhost:8000/api/v1/menu/'+event.target.alt)
                 .then(function (result) {
                     currentComponent.setState({
                         single_menu:result.data,
                         viewdetail:true,
                         rendermenu:false
                     })

                 })
                 .catch(function (err) {
                     currentComponent.setState({
                         haserror:true
                     })
                 })
    }

    render() {
        if (this.state.rendermenu==true){

             return (

                 <div>
                     <AddOrderPanel AddOrder ={this.addorder}/>
                     <CafeMenu ItemIdfunc={this.getItemId}/>

                 </div>

        )
        }

       if (this.state.viewdetail==true){
           return(
               <MenuDetail
                   name={this.state.single_menu.name}
                   type = {this.state.single_menu.type}
                   currency = {this.state.single_menu.currency}
                   price = {this.state.single_menu.price}
                   reload={this.reloadpage.bind(this)}
               />

           )
        }

        if(this.state.addorder==true){
            return(
                <CreateMenu CompleteOrder={this.completeorder}  />

                )
        }

    }
}