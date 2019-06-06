import React, {Component} from "react";
export default class MenuDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            type:'',
            price:'',
            image:'',
        }
      const buttoname ='Back'
    }

    render() {

        let {details} =this.props
        console.log('Details',{details}[0])

        return (

            <div className="form-group">

                <table className="table">
                    <thead>
                    </thead>
                    <tbody>
                            <tr>
                                <td>
                                    Name
                                </td>

                              <td>
                                  Type
                              </td>
                                <td>
                                    Currency
                                </td>
                                <td>
                                    Price
                                </td>
                        </tr>
                    <tr>
                        <td>
                            {this.props.name}
                        </td>
                        <td>
                            {this.props.type}
                        </td>
                        <td>
                            {this.props.currency}
                        </td>
                        <td>
                            {this.props.price}
                        </td>
                    </tr>
                    </tbody>
                </table>

                   <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={this.props.reload} className="btn btn-default">Back</button>
                        </div>
                    </div>

            </div>

        );
    }

}




