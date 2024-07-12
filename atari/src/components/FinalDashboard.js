import styles from './finalDashboard.module.css'
import DashboardHeader from "./dasboardHeader";
import Account from "./Accounts";
import Dashboard from "./dashboard";
export default function FinalDashboard (){
    return(
        <>
        <div  className={styles.Container}>

            <div className={styles.MainContent}>
            
            <div className={styles.Home} >
            <img src='.\atariLogo.jpg' style={{height:'20px'}}></img>
            <p className={styles.header}>HOME</p>
            <p className={styles.header}>PROTOTYPE  LAB</p>
           
            </div>
           <div className={styles.Shop} >
           <p className={styles.header}>SHOP</p>
            <img src='.\notification.webp' style={{height:'20px'}}></img>

            <div style={{height:"30px",width:'30px',border:"3px solid white",borderRadius:"50%",backgroundColor:"white",position:'relative'}}>
        <div style={{height:"25px",width:'25px',borderRadius:"50%",background: 'linear-gradient(to right, #FD5B2C, #F2911C)',position:"absolute",top:"3px",left:"3px"}}>
<div style={{height:"15px",width:'15px',borderRadius:"50%",border:'2px solid white',backgroundColor:"white",position:"absolute",top:"3px",left:"3px"}}>
    <img src=".\pic.jpg" style={{height:"12px",width:"12px",borderRadius:"50%",position:"absolute",top:"1px",left:"1px"}}></img>

</div>
        </div>
    </div>

    </div>
            </div>
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