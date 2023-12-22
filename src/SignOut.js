import React from 'react'
import { auth } from './firebase'

const SignOut = () => {
return(
    <>
        <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:"10px"}}>
            <button style={{
                color: "#000",
                background:"#fff",
                padding: "0.4rem",
                border: "none",
                cursor:"pointer",
                width:"120px",

            }} onClick={()=>auth.signOut()}>Logout</button>
        </div>
    </>
)
}

export default SignOut
