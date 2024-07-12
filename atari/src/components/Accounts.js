import styles from './accounts.module.css'

export default function Account (){

    const data={
        userName:"bubsy",
        firstName:"Bubs",
        lastName:"Atari",
        email:"bubsy@atari.com",
        joinDate:"1 Jan 2024"
    }
    return(
        <>
        <div className={styles.Container}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",fontWeight:"bold"}}>
<img src=".\accountIcon.png" style={{height:"20px"}}></img>
<p>My Account</p>
</div>


<button className={styles.btn}>Edit Account</button>
</div>

<div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
<div  className={ styles.Pixel}>
    <div style={{display:"flex",justifyContent:"center",alignItems:'center',gap:"10px"}}>
        <div>
        <img src=".\dog.jpg" style={{height:"40px",width:"40px",borderRadius:"50%" }}></img>
        </div>
  
        <div>
            <p className={styles.para} style={{fontWeight:"bold",fontSize:"16px",letterSpacing:"1px"}}>Pixel Pioneer</p>
            <p className={styles.para}>Points to next tier :500</p>
        </div>

    </div>
    <div style={{color:"Red",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p><b>LEVEL 7</b></p>
    </div>

  
</div>
<div className={styles.notification} style={{display:"flex",gap:"5%",width:"47%"}}>
<div className={styles.box}>
    <p className={styles.para}style={{fontSize:'18px'}}>12</p>
    <p className={styles.para}>Notifications</p>
</div>
<div className={styles.box}>
<p className={styles.para} style={{fontSize:'18px'}}>16</p>
<p className={styles.para}>Achievements</p>
</div>
<div className={styles.box}>
<p className={styles.para} style={{fontSize:'18px'}}>02</p>
<p className={styles.para}>Discounts</p>
</div>
<div className={styles.box}>
<p className={styles.para} style={{fontSize:'18px'}}>04</p>
<p className={styles.para}>Connections</p>
</div>
</div>

</div>

<div className={styles.username}>
<div  className={styles.subusername} >
<div>
<p className={styles.para}>Username</p>
<p className={styles.data}>{data.userName}</p>
</div>

<div>
<p className={styles.para}>First Name</p>
<p className={styles.data}>{data.firstName}</p>
</div>


<div>
<p className={styles.para}>Last Name</p>
<p className={styles.data}>{data.lastName}</p>
</div>


<div>
<p className={styles.para}>Email</p>
<p className={styles.data}>{data.email}</p>
</div>


</div>


<div style={{display:"flex",justifyContent:"center",width:"25%"}}>
<div >
<p className={styles.para}>Join date</p>
<p className={styles.data}>{data.joinDate}</p>
</div>
</div>


</div>
        </div>
        </>
    )
}