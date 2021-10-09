import React, { Component } from 'react'
import Img from '../images/user_pic.jpg'
import Closeimg from '../images/close.svg'
import '../App.css'
import Jsondata from '../Jsondata/person.json'
class retailer_card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: true,
            items:[]
        }
        this.CheckConnectstate = this.CheckConnectstate.bind(this)
    }

    CheckConnectstate(item){
        const users = Object.assign([],this.state.items);
        const index = users.findIndex(function (o) {
            return o.id === item.id;
        })

        if (item.connected) {
            users[index].connected = false;
            this.setState({
                items : users
            })
        }else{
            users[index].connected = true;
            console.log(users)
            this.setState({
                items : users
            })
        }
    }
    componentDidMount(){
        this.getItems();
    }
    getItems(){
        this.setState({
            'items': Jsondata
        })
    }
    DeleteCard(item){
        const users = Object.assign([],this.state.items);
        const index = users.findIndex(function (o) {
            return o.id === item.id;
        })
        if(index !== -1){
            users.splice(index,1);
        }
        this.setState({
            'items': users
        })
        
    }
    render() {
        return (
            <div className = "Cards-view">
                {this.state.items.slice(0,8).map(item=>{
                    return (
                    <div className="card" key={item.id}>
                    <img onClick = {()=>this.DeleteCard(item)} className="close" src={Closeimg} alt="close"/>
                    <span>
                        <img  src={Img} className="profileImg"  alt="hi" />
                    </span>
                    
                    <h4>{item.name}</h4>
                    <p>{item.company}</p>
                    <div className="InnerBox">
                        <span>{item.connections}</span>
                        <span>Connections</span>
                    </div>
                    {item.connected?(<button className="Connect" onClick={() => this.CheckConnectstate(item)}>Request sent!</button>):(<button className="Connect" onClick={() => this.CheckConnectstate(item)}>Connect</button>)}
                    
                </div>
                    )
                })}
            </div>
        )
    }
}

export default retailer_card
