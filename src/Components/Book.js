import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy'
class Book extends Component {
    constructor(props){
        super(props)
      
    }
    render() {
        return (
            <div className=" my-4 col-4">
              <Flippy
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r}
div
    style={{ width: '300px', height: '300px' }} 
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
      }}
    >
      
      <img src={this.props.src} style={{width:"100%",height:"100%"}}/>
    
     {/* <img src={this.props.src} style={{width:"100%",height:"auto",maxWidth:"100%"}}/> */}
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
     <h1 className="text-center">{this.props.title}</h1>
     <p>{this.props.desc}</p>
    </BackSide>
  </Flippy>   
            </div>
        );
    }
}

export default Book;