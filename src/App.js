import React, { Component } from 'react'
import Navi from '../src/component/Navi';
import Project from '../src/component/Project';
import Todolist from '../src/component/Todolist';
import {Col, Container , Row} from 'reactstrap';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      text :'',
      items:[]
    };
  }

  handleChangeText =(event) => {
    this.setState({text:event.target.value});
  };

  handleSaveText = () =>{
    const { text,items } = this.state;
    if (text !==''){
      items.push(text);
      this.setState({items,text:''});
   };

   
  };
  handleDeleteText = (key) => {
    const data =this.state.items;
    data.splice(key,1);
    this.setState({items:data});
  };

  

  render() {
    const { items ,text }=this.state;
    return (
      <div className='Arkaplan'>
        <Container className='cerceve'>
        
          <Row>
            <Navi/>
          </Row>
          <Row>
            <Col xs="5">
              <Todolist textValue={text}  handleSaveText={this.handleSaveText} handleChangeText={this.handleChangeText}/>
            </Col>
            <Col xs="7">
              <div className='projects'>
                {items.map((item,key)=>{
                  return <Project itemkey={key} handleDeleteText={this.handleDeleteText} handleOkeyText={this.handleOkeyText} value={item}/>
                })}                  
              </div>
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
