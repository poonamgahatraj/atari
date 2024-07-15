import Header from "./Header"
import DashboardHeader from "./dasboardHeader"
import Dashboard from "./dashboard"
import Account from "./Accounts"
import { useState } from "react"

export default function MobileComponent (){
    const [dasboardVisible,setDashboardVisible]=useState(false)

    function hamburgerClicked (){
        setDashboardVisible(!dasboardVisible)
    }
    return(
        <>
        <div>
<Header/>
<DashboardHeader/>
<div>
    <img src=".\Hamburger.png" style={{height:"20px"}}  onClick={hamburgerClicked}></img>
</div>
<div style={{display:"flex"}}>
    { dasboardVisible &&
        <Dashboard/>
    }

<Account/>
</div>

        </div>
        </>
    )
}