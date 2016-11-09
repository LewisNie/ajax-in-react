/**
 * Created by luyuann on 11/8/2016.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';

class BankApp extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            data :{}
        }
    }

    fetchData(){
        fetch('data.json').then((response)=>response.json())
            .then((responseData)=>{
                this.setState({data:responseData});
            })
    }

    componentDidMount(){
        this.fetchData();
        console.log("dfd");
    }
    render(){
        let data = this.data;
        console.log(data);
        return (
            <div>hello world dsffd {data}</div>
        );
    }
}

render(
    <BankApp />, document.getElementById('root')
)