import { Switch, FormControlLabel } from '@mui/material';
import styles from './vote.module.css';
import { useState } from 'react';

export default function VoteForm(){

    const [toggles, setToggles] = useState({
        singleSelect: false,
        multipleSelect: false,
        rating: false,
        thisOrThat: false,
        featured: false,
        displayResult: false,
        title: false,
        avatar: false,
        banner: false,
        points: false,
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
        <p> <b>Select the vote type (select one)</b></p>

 
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",padding:"2%",borderRadius:"5px"}}>

           
        <FormControlLabel
      control={
        <Switch
        checked={toggles.singleSelect}
          onChange={handleChange}
           name="singleSelect"
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
      label="Single select"
    />
           
           <FormControlLabel
      control={
        <Switch
        checked={toggles.multipleSelect}
          onChange={handleChange}
           name="multipleSelect"
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
      label="Multiple Select"
    />
    <FormControlLabel
control={
<Switch
 checked={toggles.rating}
onChange={handleChange}
name="rating"
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
label="Rating"
/>
            
<FormControlLabel
      control={
        <Switch
        checked={toggles.thisOrThat}
          onChange={handleChange}
          name="thisOrThat"
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
      label="This or that"
    />
        </div>
 </div>

      
 

 <hr className={styles.hrstyle} ></hr>

 <div>
  <p><b>Enter vote information</b></p>
 </div>

 <div style={{display:'flex',flexDirection:"column"}}>
    <input className={styles.input} type="text" placeholder="Title" ></input>
   
    <input className={styles.input} type="text" placeholder="Description" style={{marginTop:"15px",height:"60px"}}></input>

    <input className={styles.input} type="text" placeholder="success copy" style={{paddingLeft:"5px",height:"60px",marginTop:"15px"}}></input>
 </div>

 <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'5px',gap:"10px"}}>
    <p  className={styles.reqiurement} >Select vote creator +</p>
    
 </div>

 <hr className={styles.hrstyle}  ></hr>

 <div style={{backgroundColor:"#F2F3F5"}}>
        <p> <b>Enter vote details</b></p>

 
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
        checked={toggles.displayResult}
          onChange={handleChange}
          name="displayResult"
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
      label="Display result"
    />

            </div>
     </div>

          
     <div style={{display:"flex",borderRadius:'5px',gap:"10px"}}>
            <p  className={styles.reqiurement} >Start date and time  +</p>
            <p className={styles.reqiurement} style={{backgroundColor:'#F2F3F5'}}>End date and time +</p>
    </div>

    <hr className={styles.hrstyle}  ></hr>
    

    <div>
    <p> <b>Vote options</b></p>

    </div>
    <div style={{display:'flex',flexDirection:"column"}}>
    <input className={styles.input} type="text" placeholder="Option" ></input>
   
    <input className={styles.input} type="text" placeholder="Option" style={{marginTop:"15px"}}></input>

    <input className={styles.input} type="text" placeholder="Option" style={{marginTop:"15px"}}></input>
    <input className={styles.input} type="text" placeholder="Option" style={{marginTop:"15px"}}></input>
 </div>

 <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'5px',gap:"10px"}}>
            <p  className={styles.reqiurement} style={{ color:"#596270"}}>More info url  +</p>
            
 </div>

 
 


 <hr className={styles.hrstyle}  ></hr>

 
 <div>
        <p><b>Upload banner image (1000 x 250px)</b></p>
        
      <div style={{backgroundColor:"white",borderRadius:"5px",padding:"2%"}}>
           <p className={styles.bannerImage} >Select image to upload  +</p>
      </div>
    </div>

    <hr className={styles.hrstyle}  ></hr>

    <div style={{backgroundColor:"#F2F3F5"}}>
                <p> <b>Rewards</b></p>

         
                <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",padding:"2%"}}>

                <FormControlLabel
      control={
        <Switch
        checked={toggles.title}
          onChange={handleChange}
          name="title"
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
      label="Title"
    />
                    
                <FormControlLabel
      control={
        <Switch
        checked={toggles.avatar}
          onChange={handleChange}
          name="avatar"
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
      label="Avatar"
    />
                     
                <FormControlLabel
      control={
        <Switch
        checked={toggles.banner}
          onChange={handleChange}
          name="banner"
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
      label="Banner"
    />
                    
                <FormControlLabel
      control={
        <Switch
        checked={toggles.points}
          onChange={handleChange}
          name="points"
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
      label="Points"
    />
                </div>
         </div> 
         <hr className={styles.hrstyle}  ></hr>

<div style={{display:"flex",gap:'10px'}}>
<button className={styles.btn} > Save</button>
<button  className={styles.btn} >Cancel</button>
</div>

 </div>
 </div>
        </>
    )
}