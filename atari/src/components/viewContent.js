import styles from './viewContent.module.css';

export default function ViewContent (){

    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push({color:"#00C32E",vote:"Vote",Title:"Title of vote will go here",Time:'ends in Xhours/Xminutes',btn:'EDIT'});
    }


    return(
        <>
        <div className={styles.Container}>
        <div>
            <p style={{color:"black"}}><b>View Content</b></p>
            <p>Title of vote will go here</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <button className={styles.btn1}>Search</button>

                <div style={{display:"flex",gap:"10px",width:"20%",justifyContent:"flex-end"}}>
                    <button className={styles.btn2}><b>TYPE </b> </button>
                    <button className={styles.btn2}><b>STATUS</b> </button>
                </div>
            </div>

            <div style={{display:'flex',justifyContent:"end",gap:'15px',marginTop:"1%",marginBottom:"2%"}}>
            <button className={styles.btn3}><b>VOTES X</b> </button>
            <button className={styles.btn3}><b>ACTIVE X</b> </button>
            </div>
        </div>

        <div >
            {data.map((item)=>(
                <div className={styles.Info} >
                    
                    <div style={{display:"flex",alignItems:"center",gap:'15x'}}>
                    <div style={{height:"12px",width:'12px',borderRadius:'50%',backgroundColor:item.color,border:'none'}}></div>
                    <p>{item.vote}</p>
                    </div>
                   
                    <p style={{marginLeft:"-15%"}}>{item.Title}</p>
                    <p style={{marginLeft:"-15%"}}>{item.Time}</p>
                    <p><b> {item.btn}</b></p>
                </div>

            ))
                
            }  
        </div>

        <div style={{display:"flex",gap:'10px',marginTop:"3%",marginBottom:"5%"}}>
                <button className={styles.btn4}  style={{backgroundColor:"#F2F3F5",color:"black"}} >PREV</button>
                <button  className={styles.btn4} style={{backgroundColor:'#27282A',color:"white"}} >NEXT</button>
            </div>

        </div>
        </>

    )
}