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
        <div className={styles.Content}>

       
        <p><b>Use this admin panel to create new content in Atari Club</b></p>
         <div style={{display:"flex",justifyContent:'space-between'}}>
            <div style={{display:'flex',gap:"10px"}}>
              <button className={styles.btn1} ><b>CREATE ACHIEVEMENT</b></button>
              <button className={styles.btn1} >CREATE VOTE</button>
              <button className={styles.btn1} style={{backgroundColor:"#E9D200"}} >CREATE NEWS TITLE</button>
            </div>


              <button  style={{padding:"10px", borderRadius:"10px",color:'white',backgroundColor:'black'}}>VIEW ALL</button>
         </div>

         <div style={{backgroundColor:"#F2F3F5"}}>
                <p> <b>Status</b></p>

         
                <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",paddingLeft:"2%"}}>

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
            <p  className="reqiurement" >Start date and time  +</p>
            <p className="reqiurement" style={{backgroundColor:'#F2F3F5'}}>End date and time +</p>
         </div>

         <hr className={styles.hrstyle} ></hr>

         <div style={{display:'flex',flexDirection:"column"}}>
            <input type="text" placeholder="Title" style={{border:"none",borderRadius:"5px",padding:'10px',paddingLeft:'1%'}}></input>
            <div style={{display:"flex",gap:'10px'}}>
            <input type="text" placeholder="call to action copy" style={{width:"50%",marginTop:"15px",border:"none", borderRadius:"5px",padding:"10px",paddingLeft:'1%'}}></input>
            <input type="text" placeholder="call to url" style={{width:"50%",marginTop:"15px",border:"none",borderRadius:"5px",padding:"10px",paddingLeft:'1%'}}></input>
            </div>
            
            <input type="text" placeholder="body" style={{paddingLeft:"5px",height:"60px",marginTop:"15px",border:"none",borderRadius:"5px",paddingLeft:'1%'}}></input>
         </div>

         <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'5px',gap:"10px"}}>
            <p  className={styles.reqiurement} >Select author  +</p>
            
         </div>

         <hr className={styles.hrstyle}  ></hr>


         
         <p><b>Select the news category</b></p>

         <div style={{backgroundColor:'white',padding:"10px",gap: '10px',display:"flex",gap:"75px"}}>
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
                   <p style={{width:"20%",borderRadius:'5px',padding:"1%",border:'1px solid #8E929F'}}>Select image to upload  +</p>
              </div>
            </div>

            <hr className={styles.hrstyle} ></hr>

<div style={{display:"flex",gap:'10px'}}>
    <button className={styles.btn} > Save</button>
    <button  className={styles.btn} >Cancel</button>
</div>

         </div>
        </>
    )
}