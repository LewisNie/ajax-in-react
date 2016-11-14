/**
 * Created by luyuann on 11/8/2016.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import Carousel from './carousel';
import 'whatwg-fetch';

class BankApp extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            data: []
        }
    }

    fetchData(){
        fetch('data.json').then((response)=>response.json())
            .then((responseData)=>{
                this.setState({data:responseData});
                console.log(this.state.data);
                //alert('hello');
             //   $('#carousel').slick();


            })
    }


    componentDidMount(){
        this.fetchData();
        console.log('amounted');
    }
    render(){
        // let data = this.state.data;
        // console.log(data);
        let data = this.state.data.map((data)=> {
            console.log('hello');
            return (
                <div key={data.id}><img src={data.image}/></div>
            )
        });
        return (
            <div>
                <h1>hello world dsffd</h1>
                {/*<div id="carousel">{data}</div>*/}
                <Carousel data={this.state.data}/>
            </div>
        );
    }
}

render(
    <BankApp />, document.getElementById('root')
)