import React, { Component , useState } from 'react'
// import copy from "copy-to-clipboard"
 
export default function Textform(props){
    const handleupClick = ()=>{
        console.log("uppercase was clicked");
        setText(text.toUpperCase());
        props.showalert("converted to uppercase", "success")
    }
    const handleloClick = ()=>{
        console.log("uppercase was clicked");
        setText(text.toLowerCase());
        props.showalert("converted to lowercase", "success")
    }
    const handleonclear =()=>{
        console.log("clear is clicked");
        setText("");
        props.showalert("cleared the texts", "success")
    }

    // const typingspeed = ()=>{
    //     console.log("typing speed")
    //     // figure it out by today
    // }

    // const copy=()=>{
    //     copy(copytext);
    // }

    const underline=()=>{
        console.log("underline");
        setText("");
        props.showalert("this function is curretly under devlopment", "danger")
    }


    const handleoonChange = (event)=>{
        console.log("changed");
        
        // setText(" ")
        // setTimeout(() => {
        //     setText(event.target.value);
        //     console.log("hi");
        // }, 3000);
        // have to use set time out here to do the desired fuction

        setText(event.target.value);
        
        
    }

    // important syntax
    const [text, setText] = useState("Enter text here"); 
    
    return(
    <>
    
    <div className="form-floating" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 style={{marginTop: "30px"}}>{props.heading}</h1>

        <textarea className="form-control" value={text} onChange={handleoonChange} placeholder="Leave a comment here" id="floatingTextarea" style={{backgroundColor: props.mode==='dark'?'#09347d':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        {/* <label for="floatingTextarea">Enter your desired text</label> */}
    
    <br />
    <div>
    <button className="btn-primary mx-1" onClick={handleupClick}>Convert to upercase</button>
    <button className='btn-primary mx-1' onClick={handleloClick}>Convert into lowercase</button>
    <button className='btn-primary mx-1' onClick={handleonclear}>Clear</button>
    <button className='btn-primary mx-1' onClick={underline}>Underline</button>
    
    <hr />
    <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length-(text.split(" ").length-1)} characters</p>
        <p>You can read this para with in {0.008 * text.split(" ").length} minutes</p>

        <hr />

        <h2>Previwe</h2>
        <p>{text}</p>
    </div>
    </div>
    </div>
    

{/* till here day 8 */}


    
    </>
    )
}