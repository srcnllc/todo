import React from "react";
import { Input, Button } from "reactstrap";
import "../index.css";

 const Todolist =(props) =>{
   console.log(props);

    return (
      <div className="yap">
        <Input value={props.textValue} onChange={props.handleChangeText} className="yazı" placeholder="Yapılacak olanı giriniz."/> <br />
        <Button onClick={props.handleSaveText} className="ekle" color="success">
          EKLE
        </Button>
      </div>
    )
  };

export default Todolist;