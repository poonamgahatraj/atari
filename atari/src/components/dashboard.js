import styles from './dashboard.module.css';
import { useState } from 'react';

export default function Dashboard ({ onOptionClick }){
    const [selected, setSelected] = useState(null);

    const handleSelect = (item) => {
        setSelected(item);
         onOptionClick ();
    };

    const getItemStyle = (item) => {
       
        return item === selected ? { borderLeft: '4px solid orange', color: 'orange' } : {};
    };


    return(
        <>
        <div className={styles.Container}>
            <div  className={styles.Content}>
            <div>
            <div className={styles.heading} >
            <p><b>DASHBOARD</b></p>
            </div>
          <div className={styles.Dashboard}>

        
          <div className={styles.dashContent} style={{...getItemStyle('account'),display:"flex",alignItems:"center",gap:"10px"}}>
            <img src='.\accountIcon.png' style={{height:"15px"}}></img>
          <p    onClick={() => handleSelect('account')}>Account</p>
          </div>
            <div className={styles.dashContent} style={{...getItemStyle('discount'),display:"flex",alignItems:"center",gap:"10px"}}>
                <img src='.\portal.webp' style={{height:"15px"}}></img>
            <p  onClick={() => handleSelect('discount')}>Discount Portal</p>
            </div>

            <div className={styles.dashContent} style={{...getItemStyle('notification'),display:"flex",alignItems:"center",gap:"10px"}}>
                <img src='.\notification.webp' style={{height:"15px"}}></img>
                <p  onClick={() => handleSelect('notification')}>Notifications</p>
            </div>

            </div>
           
            
        </div>

        <div>
        <div className={styles.heading}>
            <p><b>ACCOUNT SETTINGS</b></p>
            </div>
<div className={styles.Dashboard2}>


            <div className={styles.dashContent} style={{...getItemStyle('profile') ,display:"flex",alignItems:"center",gap:"10px"}}>
                <img src='.\profile.jpg' style={{height:"15px"}}></img>
                <p   onClick={() => handleSelect('profile')}>Profile</p>
            </div>

            <div className={styles.dashContent} style={{...getItemStyle('club'),display:"flex",alignItems:"center",gap:"10px"}}>
                <img src='.\card.jpg' style={{height:"15px"}}></img>
                <p  onClick={() => handleSelect('club')}>My Club Card</p>
           
          </div>

          <div className={styles.dashContent} style={{...getItemStyle('connection'),display:"flex",alignItems:"center",gap:"10px"  }}>
                <img src='.\location.jpg' style={{height:"15px"}}></img>
                <p  onClick={() => handleSelect('connection')}>Connections</p>
                </div>

                <div className={styles.logout} >
                <button className={styles.btn}>Log out</button>
            </div>

                </div>
          </div>

         
         

           
            </div>

           
       
        </div>
        </>
    )
}