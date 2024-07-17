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

    function hideDashboard() {
        setDashboardVisible(false);
    }
    return(
        <>
        <div style={{ width: "100vw",padding:"10px",overflow: "auto"}}>
<Header/>
<DashboardHeader/>
<div>
    <img src=".\Hamburger.png" style={{height:"20px"}}  onClick={hamburgerClicked}></img>
</div>
<div style={{ position: "relative" }}>
                    {dasboardVisible && (
                        <div style={{ position: "absolute", zIndex: 1, width: "100vw" }}>
                            <Dashboard onOptionClick={hideDashboard} />
                        </div>
                    )}
                    <div style={{ zIndex: 0,width:"100vw" }}>
                        <Account />
                    </div>
                </div>

        </div>
        </>
    )
}