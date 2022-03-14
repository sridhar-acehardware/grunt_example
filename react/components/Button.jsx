import React from "react";
import { useState } from "react";

export default function Button({name}){
    let {color,setColor}=useState("blue");

    const clickHandler=()=>{throw "error"};

    return (<input type="button" value={name} onClick={clickHandler}/>)
}