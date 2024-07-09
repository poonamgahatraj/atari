import DashboardHeader from "./dasboardHeader";
import Account from "./Accounts";
import Dashboard from "./dashboard";
export default function FinalDashboard (){
    return(
        <>
        <div style={{width:"100%",height:"100%",paddingLeft:"5%",paddingRight:"5%",paddingTop:"3%",paddingBottom:"3%",backgroundColor:"#F9FAFC",boxSizing:"border-box"}}>
<div>
<DashboardHeader/>
<div style={{display:"flex",marginTop:"15px"}}>
    <Dashboard/>
    <Account/>
</div>

</div>
        </div>
        </>
    )
}