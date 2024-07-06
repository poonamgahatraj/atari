
import Profile_Header from './profileHeader';
import styles from './form.module.css';
import { useState } from 'react';
import AchievementForm from './AchievementForm';
import NewsTile from './newsTile';
import VoteForm from './vote';


export default function Form (){
  const [selectedComponent, setSelectedComponent] = useState('achievement');

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };


    return(
        <>
       <div className={styles.Container} >
       <Profile_Header/>
        <div className={styles.Content}>
         <p><b>Use this admin panel to create new content in Atari Club</b></p>
         <div style={{display:"flex",justifyContent:'space-between'}}>
            <div style={{display:'flex',gap:'10px'}}>
              <button className={styles.btn1} style={{ backgroundColor: selectedComponent === 'achievement' ? "#E9D200" : "white", color: "black" }}
                onClick={() => handleComponentChange('achievement')} ><b>CREATE ACHIEVEMENT</b></button>
              <button className={styles.btn1} style={{ backgroundColor: selectedComponent === 'vote' ? "#E9D200" : "white", color: "black" }}
                onClick={() => handleComponentChange('vote')}><b>CREATE VOTE</b></button>
              <button className={styles.btn1} style={{ backgroundColor: selectedComponent === 'newTile' ? "#E9D200" : "white", color: "black" }}
                onClick={() => handleComponentChange('newTile')}><b>CREATE NEWS TILE</b></button>
            </div>


              <button  style={{padding:"10px", borderRadius:"10px",color:'white',backgroundColor:'black',width:"15%"}}><b>VIEW ALL</b></button>
         </div>


         <hr className={styles.hrstyle }></hr>

         {selectedComponent === 'achievement' && <AchievementForm />}
          {selectedComponent === 'vote' && <VoteForm />}
          {selectedComponent === 'newTile' && <NewsTile />}
         
        </div>
       </div>
        </>
    )
}