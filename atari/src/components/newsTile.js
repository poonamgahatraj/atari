import { Switch, FormControlLabel } from '@mui/material';
import styles from './newsTile.module.css';
import { useState } from 'react';

export default function NewsTile(){

    const [toggles, setToggles] = useState({
       featured: false,
       published: false,
        
      });

      const handleChange = (event) => {
        const { name, checked } = event.target;
        setToggles((prevToggles) => ({
          ...prevToggles,
          [name]: checked,
        }));
      };

    return(
        <>
        <div className={styles.Container}>
       
        <div className={styles.Content}>

       
        

         <div style={{backgroundColor:"#F2F3F5"}}>
                <p> <b>Status</b></p>

         
                <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",padding:"2%",borderRadius:"5px"}}>

                <FormControlLabel
      control={
        <Switch
        checked={toggles.featured}
          onChange={handleChange}
           name="featured"
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#6717C2',
              '&:hover': {
                backgroundColor: 'rgba(128, 0, 128, 0.08)',
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#6717C2',
            },
          }}
        />
      }
      label="Featured"
    />
                   <FormControlLabel
      control={
        <Switch
        checked={toggles.published}
          onChange={handleChange}
           name="published"
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#6717C2',
              '&:hover': {
                backgroundColor: 'rgba(128, 0, 128, 0.08)',
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#6717C2',
            },
          }}
        />
      }
      label="Published"
    />
                </div>
         </div>

              
         <div style={{display:"flex",borderRadius:'5px',gap:"10px"}}>
            <p  className={styles.reqiurement}>Start date and time  +</p>
            <p className={styles.reqiurement} style={{backgroundColor:'#F2F3F5'}} >End date and time +</p>
         </div>

         <hr className={styles.hrstyle} ></hr>

         <div style={{display:'flex',flexDirection:"column"}}>
            <input className={styles.input} type="text" placeholder="Title"></input>
            <div style={{display:"flex",gap:'10px'}}>
            <input className={styles.input} type="text" placeholder="call to action copy" style={{width:"50%",marginTop:"15px"}}></input>
            <input className={styles.input} type="text" placeholder="call to url" style={{width:"50%",marginTop:"15px"}}></input>
            </div>
            
            <input className={styles.input} type="text" placeholder="body" style={{paddingLeft:"1%",height:"60px",marginTop:"15px"}}></input>
         </div>

         <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'10px',gap:"10px"}}>
            <p  className={styles.reqiurement} >Select author  +</p>
            
         </div>

         <hr className={styles.hrstyle}  ></hr>


         
         <p><b>Select the news category</b></p>

         <div className={styles.category} >
            <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Community</label>
            </div>
          <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Club</label>
          </div>
          <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Games</label>
          </div>
           <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Hardware</label>
           </div>
          <div  className={styles.checkbox}>
              <input type="checkbox"></input>
              <label>Shopping</label>
          </div>
          
         </div>
         <hr className={styles.hrstyle}  ></hr>

         
         <div>
                <p><b>Upload cover image (1800 x 1000px)</b></p>
                
              <div style={{backgroundColor:"white",borderRadius:"5px",padding:"1px",paddingLeft:"10px"}}>
                   <p  className={styles.imageUpload}>Select image to upload  +</p>
              </div>
            </div>

            <hr className={styles.hrstyle} ></hr>

<div style={{display:"flex",gap:'10px'}}>
    <button className={styles.btn} > Save</button>
    <button  className={styles.btn} >Cancel</button>
</div>

         </div>
         </div>
         
        </>
    )
}