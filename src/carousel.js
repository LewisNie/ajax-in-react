import React, {Component} from 'react';
import {render} from 'react-dom';

class Carousel extends Component{
    componentDidMount(){
       /* console.log("i am mounted");
        setTimeout(()=>{
            $('#carousel').slick();
        },100)*/
    }
    componentDidUpdate() {
        console.log("i am updating");
        $('#carousel').slick();
    }

    render(){
        let img = this.props.data.map((data)=>{
            //$('#carousel').slick();
            console.log('I am rendering');
            return <div key={data.id}><img src={data.image} /></div>
        });
        return (
            <div id="carousel">{img}</div>
        )
    }
}
export default Carousel;