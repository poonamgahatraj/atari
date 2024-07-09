import styles from './dashboard.module.css';
import { useState } from 'react';

export default function Dashboard (){
    const [selected, setSelected] = useState(null);

    const handleSelect = (item) => {
        setSelected(item);
    };

    const getItemStyle = (item) => {
       
        return item === selected ? { borderLeft: '4px solid orange', color: 'orange' } : {};
    };


    return(
        <>
        <div className={styles.Container}>
            <div style={{display:"flex",flexDirection:"column",gap:'40px'}}>
            <div>
            <div style={{padding:"5%"}}>
            <p><b>DASHBOARD</b></p>
            </div>

          
            <p className={styles.dashContent}  style={getItemStyle('account')} onClick={() => handleSelect('account')}>Account</p>
            <p className={styles.dashContent} style={getItemStyle('discount')} onClick={() => handleSelect('discount')}>Discount Portal</p>
            <p className={styles.dashContent} style={getItemStyle('notification')} onClick={() => handleSelect('notification')}>Notifications</p>
        </div>

        <div>
        <div style={{padding:"5%"}}>
            <p><b>ACCOUNT SETTINGS</b></p>
            </div>
            <p  className={styles.dashContent} style={getItemStyle('profile')} onClick={() => handleSelect('profile')}>Profile</p>
            <p  className={styles.dashContent} style={getItemStyle('club')} onClick={() => handleSelect('club')}>My Club Card</p>
            <p  className={styles.dashContent} style={getItemStyle('connection')} onClick={() => handleSelect('connection')}>Connections</p>
        </div>
            </div>

            <div style={{display:"flex",justifyContent:"center",marginTop:"50%"}}>
                <button style={{backgroundColor:"black",color:'white',borderRadius:'10px',width:"60%",padding:"10px"}}>Log out</button>
            </div>
       
        </div>
        </>
    )
}