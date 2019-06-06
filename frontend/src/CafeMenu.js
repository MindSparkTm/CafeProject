import React, {Component} from "react";
import './App.css';

export default class CafeMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            condition: true,
            count:'',
            paginate_limit:10,
        };
        this.fetchimagedetails = this.fetchimagedetails.bind(this)
        this.displaymenu = this.displaymenu.bind(this)
        this.handleOrderClick = this.handleOrderClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fetchresults = this.fetchresults.bind(this)


    }
   handleClick(event) {
        console.log('event',event.target.id)
      this.fetchresults(event.target.id)
  }
    handleOrderClick() {
    this.setState(
        {condition: false});
  }
    async fetchimagedetails(event) {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/v1/menu/' + event.target.alt);
            const details = await res.json();
            console.log(details)
        } catch (e) {
            console.log(e);
        }
    }

    async fetchresults(page_id){
        let url ='http://127.0.0.1:8000/api/v1/menu/'
         try {
           if (page_id!='1'){
                 console.log('enetered here ')
                 let offset = page_id*10-this.state.paginate_limit
                 url ='http://127.0.0.1:8000/api/v1/menu/?limit=10&offset='+offset

             }
            const res = await fetch(url);
            let items = await res.json()
             let results = items.results
            this.setState({
                items:results,
                count:items.count,

            });
        } catch (e) {
            console.log(e);
        }
    }
    async componentDidMount() {
       this.fetchresults(1)
    }


    displaymenu() {
 const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.count/ 10); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

        return (
            <div className="container">
            <div className="row">
                {this.state.items.map((items, index) => {
                    return (

                        <div className="col-sm-6 col-md-4">
                            <div style={{padding: "0.938em"}} className="span12 thumbnail">

                                {<img src={items.image} alt={items.id}
                                      style={{margin: "5%", width: "50%",height:"50%"}} onClick={this.props.ItemIdfunc}
                                />

                                }

                                <div style={{backgroundColor: "white"}} className="row">
                                    <div className="col-md-8">
                                        <span style={{
                                            fontFamily: "Sans-Seriff",
                                            fontSize: "0.875em",
                                            marginRight: "5%",
                                            marginLeft: "5%"
                                        }}>{items.name}</span><br></br>
                                        <span style={{marginRight: "5%", marginLeft: "5%"}}>{items.type}</span><br></br>
                                    </div>

                                    <div className="col-md-4">
                                          <span style={{fontSize: "0.875em"}} className="pull-right">
                                              {items.currency}{Math.floor(items.price)}
                                          </span>
                                    </div>
                                </div>


                            </div>
                            <div style={{marginTop:"1.250em"}}>
                            </div>
                        </div>

                    )
                })}


            </div>

         <div className="row">
                    <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
               </div>
            </div>
        )
    }

    render() {
       return (
            this.displaymenu()
        )

    }
}