import React, {Component} from "react";
export default class AddOrderPanel extends Component {
    render() {
        return (
              <div className="row">
                <div style={{paddingBottom: "30px", paddingLeft: "90px"}} className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h3>Menu</h3>
                        </div>
                        <div className="col-md-2">
                  <span className="pull-right">
                      <button type="button" className="btn btn-primary" onClick={this.props.AddOrder}>Add Menu</button>
                  </span>
                        </div>
                    </div>
                </div>
              </div>
        );
    }
}