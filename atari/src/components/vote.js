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
        <div className={styles.Content}>

       
<p style={{paddingTop:"10px"}}><b>Use this admin panel to create new content in Atari Club</b></p>
 <div style={{display:"flex",justifyContent:"space-between"}}>
    <div style={{display:'flex',justifyContent:"space-between",width:"51%"}}>
      <button className={styles.btn1} ><b>CREATE ACHIEVEMENT</b></button>
      <button className={styles.btn1}  style={{backgroundColor:"#E9D200"}} >CREATE VOTE</button>
      <button className={styles.btn1}  >CREATE NEWS TITLE</button>
    </div>


      <button  style={{padding:"10px", borderRadius:"10px",color:'white',backgroundColor:'black'}}>VIEW ALL</button>
 </div> 

 <hr className={styles.hrstyle}  ></hr>

 <div style={{backgroundColor:"#F2F3F5"}}>
        <p> <b>Select the vote type (select one)</b></p>

 
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",paddingLeft:"2%"}}>

           
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

 <div style={{display:'flex',flexDirection:"column"}}>
    <input type="text" placeholder="Title" style={{border:"none",borderRadius:"5px",padding:'10px',paddingLeft:'1%'}}></input>
   
    <input type="text" placeholder="Description" style={{marginTop:"15px",height:"60px",border:"none", borderRadius:"5px",paddingLeft:'1%'}}></input>

    <input type="text" placeholder="success copy" style={{paddingLeft:"5px",height:"60px",marginTop:"15px",border:"none",borderRadius:"5px",paddingLeft:'1%'}}></input>
 </div>

 <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'5px',gap:"10px"}}>
    <p  className={styles.reqiurement} >Select vote creator +</p>
    
 </div>

 <hr className={styles.hrstyle}  ></hr>

 <div style={{backgroundColor:"#F2F3F5"}}>
        <p> <b>Enter vote details</b></p>

 
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
    <p> <b>vote options</b></p>

    </div>
    <div style={{display:'flex',flexDirection:"column"}}>
    <input type="text" placeholder="Option" style={{border:"none",borderRadius:"5px",padding:'10px',paddingLeft:'1%'}}></input>
   
    <input type="text" placeholder="Option" style={{marginTop:"15px",border:"none", borderRadius:"5px",padding:"10px",paddingLeft:'1%'}}></input>

    <input type="text" placeholder="Option" style={{marginTop:"15px",border:"none", borderRadius:"5px",padding:"10px",paddingLeft:'1%'}}></input>
    <input type="text" placeholder="Option" style={{marginTop:"15px",border:"none", borderRadius:"5px",padding:"10px",paddingLeft:'1%'}}></input>
 </div>

 <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'5px',gap:"10px"}}>
            <p  className={styles.reqiurement} >More info url  +</p>
            
 </div>

 
 


 <hr className={styles.hrstyle}  ></hr>

 
 <div>
        <p><b>Upload banner image (1000 x 250px)</b></p>
        
      <div style={{backgroundColor:"white",borderRadius:"5px",padding:"1px",paddingLeft:"10px"}}>
           <p style={{width:"20%",borderRadius:'5px',padding:"1%",border:'1px solid #8E929F'}}>Select image to upload  +</p>
      </div>
    </div>

    <hr className={styles.hrstyle}  ></hr>

    <div style={{backgroundColor:"#F2F3F5"}}>
                <p> <b>Rewards</b></p>

         
                <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",paddingLeft:"2%"}}>

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
        </>
    )
}