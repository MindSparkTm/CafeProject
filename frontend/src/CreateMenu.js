import React, {Component} from "react";
import axios from "axios";

export default class CreateMenu extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            type:'',
            price:'',
            image:''
        }
        this.createmenu = this.createmenu.bind(this)
        this.handlename = this.handlename.bind(this)
        this.handleselecttype = this.handleselecttype.bind(this)
        this.handleAmount=this.handleAmount.bind(this)
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
    }

    fileChangedHandler(event){
        const file = event.target.files[0]
        console.log('file',file.name)
        this.setState({image:file})

}

    handlename(event){
        event.preventDefault()
        this.setState({name: event.target.value});

    }

    handleselecttype(event){
        event.preventDefault()
        this.setState({type:event.target.value})
    }

    handleAmount(event){
        event.preventDefault()
        this.setState({price:event.target.value})
    }

     createmenu(event){
        event.preventDefault()
         if (this.state.name.length>0 && this.state.price.length>0) {
             let formData = new FormData();
             formData.append('name', this.state.name)
             formData.append('type', this.state.type)
             formData.append('price', this.state.price)
             formData.append('image', this.state.image)

             axios.post('http://localhost:8000/api/v1/menu/', formData)
                 .then(function (result) {
                     console.log('resut', result)
                     if (result.status=='201'){
                         alert('Menu successfully created')

                     }
                 })
                 .catch(function (err) {
                     console.log('erro', err)
                     alert(err)
                 })

         }

         else{
             if (this.state.name.length==0){
                 alert('Please enter a valid name')

             }
             if (this.state.price.length==0){
                 alert('Please enter a valid price')
             }
         }

    }

    render() {
        return (
            <div className="form-group">
                <form className="form-horizontal" encType="multipart/form-data">
                    <div className="form-group">
                        <label className="control-label col-sm-2">Type:</label>
                        <div className="col-sm-10">
                            <select className="form-control" onChange={this.handleselecttype} id="menutype">
                                <option value="1">Appetizer</option>
                                <option value="2">Side Course</option>
                                <option value="3">Main Course</option>
                                <option value="4">Dessert</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                        <div className="col-sm-10">
                            <input type="text" ref ="name" className="form-control"
                                   onChange={this.handlename} id="name" placeholder="Name"></input>
                              {/*<span className="help-block">{validation.email.message}</span>*/}

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="name">Price:</label>
                        <div className="col-sm-10">
                            <input type="number"  step=".01" onChange={this.handleAmount} data-number-to-fixed="2"
                                   data-number-stepfactor="100" className="currency" id="c1"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="name">Photo:</label>
                        <div className="col-sm-10">
                            <input type="file"  onChange={this.fileChangedHandler} placeholder="Add profile picture"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="row">
                                 <div className="col-md-6">
                                    <input type="submit" onClick={this.createmenu} className="btn btn-default"></input>
                                </div>
                                <div className="col-md-6">
                                    <button onClick={this.props.CompleteOrder} className="btn btn-default">Back</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-offset-2 col-sm-10">
                        </div>
                    </div>
                </form>
            </div>

        );
    }

}




