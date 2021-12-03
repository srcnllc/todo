import React from 'react'
import "../index.css";
// import { FcCancel } from "react-icons/fc";
import { GoX } from "react-icons/go";


const Project = (props) =>{
    return (
            <div className='liste'>
                {props.itemkey+1}-{props.value}
                <div>
                    <GoX id='icon' onClick={()=>props.handleDeleteText(props.itemkey)}/>
                </div>
            </div>)

}
export default Project;


