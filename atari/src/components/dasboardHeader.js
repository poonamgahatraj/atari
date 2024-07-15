import styles from './dashboardHeader.module.css'

export default function DashboardHeader(){
    return(
        <>
        <div className={styles.Container}>

        <div className={styles.Content}>
        <div style={{height:"90px",width:'90px',borderRadius:"50%",background: 'linear-gradient(to right, #FD5B2C, #F2911C)',position:"absolute",top:"5%",left:"5%"}}>
<div style={{height:"75px",width:'75px',borderRadius:"50%",border:'2px solid white',backgroundColor:"white",position:"absolute",top:"6%",left:"6%"}}>
    <img src=".\dog.jpg" style={{height:"69px",width:"69px",borderRadius:"50%" ,position:"absolute",top:"5%",left:"5%"}}></img>

</div>
        </div>
    </div>


        </div>
        </>
    )
}