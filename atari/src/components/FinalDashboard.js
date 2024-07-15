import styles from './finalDashboard.module.css'
import DashboardHeader from "./dasboardHeader";
import Account from "./Accounts";
import Dashboard from "./dashboard";
import Header from './Header';
export default function FinalDashboard (){
    return(
        <>
        <div  className={styles.Container}>

           <Header/>
<div>
<DashboardHeader/>
<div className={styles.Content} >
    <Dashboard className ={styles.sidebar}/>
    <Account/>
</div>

</div>
        </div>
        </>
    )
}