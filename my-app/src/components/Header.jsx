import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Home, WbIncandescent, Alarm } from '@material-ui/icons';
import './Header.css';
import axios from 'axios';

const http = 'http';
const hostname = 'localhost';
const port = 5000;



class Header extends Component {
    constructor(props){
        super(props);
        this.state={}
        this.kick = new Audio();
    }
    
    componentDidMount(){
        let id = '1';
        axios.get(`${http}://${hostname}:${port}/inputs/${id}`,{
        
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })  
    }

    playKick(){
        this.kick.src = "sounds/computerbeep_3.mp3"
        this.kick.play();
    }

  render() {
    return (
      <div className="header">
        <div className="header-button">
            <Button variant="fab" color="primary" onClick={(e) => this.playKick()}>
                <Home />
            </Button>
        </div>
        <div className="header-button">
            <Button variant="fab" color="primary">
                <WbIncandescent />
            </Button>
        </div>
        <div className="header-button">
            <Button variant="fab" color="primary">
                <Alarm />
            </Button>
        </div>
      </div>
    );
  }
}

export default Header;