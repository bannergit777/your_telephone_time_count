import React, { Component, useState } from 'react'
import {Row,Col,Button,Card} from 'react-bootstrap'
import './Timer.css';

class Timer extends Component {
    constructor(props){
    super(props)
    this.state = {
        count: 0 ,
        start:true
    }
    this.delta = this.delta.bind(this);
    this.delta_ = this.delta_.bind(this);
    this.delta_0 = this.delta_0.bind(this);
    //this.delta2 = this.delta.bind(this);
  }
// sound effect && css trigger 

render () {
    const {count} = this.state
    return (
        <>
                <h1 class="hvr-grow" style={{color:"#ffffff",fontSize:"3em"}}>您的通話時間</h1>
                <h1  id="count_number" style={{color:"#ffffff",fontSize:"12em",marginTop:"70px",marginBottom:"70px"}}>{count}</h1>
                {/* <input type="button2" onClick={this.delta2} value="Start"/> */}
                {/* <input type="button1" onClick={this.delta} value="+15"/> */}
                
                <Button id="plus_button" variant="outline-success" onClick={this.delta}>+15</Button>
                
                <Button id="minus_button" variant="outline-danger" onClick={this.delta_}>-15</Button>

                <Button id="0_button"  style={{display:"none"}} onClick={this.delta_0}>0</Button>

                <audio id="audio_tik" src="http://localhost:3000/tik_1s.mp3"></audio>
                <audio id="timeout" src="http://localhost:3000/timeout_1.mp3"></audio>
                <audio id="minus" src="http://localhost:3000/minus.mp3"></audio>
                <audio id="plus" src="http://localhost:3000/plus.mp3"></audio>
                <audio id="no_time" src="http://localhost:3000/no_time.mp3"></audio>
             
                {/* <input type="button2" onClick={this.delta2} value="請點-15秒"/> */}
        </>
    )
}
// setInterval
// clearInterval
    componentDidMount(){
        const {startCount} = this.props
        this.setState({
            count: startCount
        })
        this.doIntervalCHange() // every seond past cost count
        this.key_listener()
    
    }

    key_listener = ()=>{
        window.addEventListener('keydown', function(e){
            console.log(e.code)
            if(e.code=="ArrowRight"){
                document.getElementById("plus").play()
                document.getElementById("plus_button").click()
               
            }else if(e.code=="ArrowLeft"){
                document.getElementById("minus").play()
                document.getElementById("minus_button").click()
            }else if(e.code=="Space"){
                document.getElementById("0_button").click()
            }
          }, false);
    }

    doIntervalCHange = () =>{
        console.log(this.state.start)
        console.log(this.state.count)
        this.myInterval = setInterval(()=>{
            if(this.state.start==true || this.state.count==0){
                var s = 0
            }else {
                var s = 1
            }
            this.setState({
                count: this.state.count - s
            })
            // console.log(this.state.count)
            // class="buzz-out-on-hover"
            if(this.state.count>10){
                document.getElementById("count_number").className = "";
                document.getElementById("count_number").style.color = 'white';
            }
            if(this.state.count<=10 && this.state.count>5){
                if(this.state.start!=true){
                    document.getElementById("no_time").play()
                }
                document.getElementById("count_number").className = "buzz-out-on-hover_1";
                document.getElementById("count_number").style.color = '#ffa600';
            }
            if(this.state.count<=5 && this.state.count>0){
                if(this.state.start!=true){
                    document.getElementById("audio_tik").play()
                }
                document.getElementById("count_number").style.color = '#d7ff3a';
                document.getElementById("count_number").className = "buzz-out-on-hover";
            }
            if(this.state.count==0){
                if(this.state.start!=true){
                    document.getElementById("timeout").play()
                }
                document.getElementById("count_number").style.color = '#d7ff3a';
                document.getElementById("count_number").className = "buzz-out-on-hover";
            }

        }, 1000)
        // console.log(this.state)
    }

    delta(){
        this.setState({count:this.state.count +15})
    }

    delta_(){
        this.setState({count:this.state.count -15})
    }

    delta_0(){
        this.setState({start:!(this.state.start)})
    }

    


    // componentWillUnmount(){
    //     clearInterval(this.myInterval)
    // }
}

export default Timer