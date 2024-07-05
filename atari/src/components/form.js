import { Switch, FormControlLabel } from '@mui/material';
import Profile_Header from './profileHeader';
import styles from './form.module.css';
import { useState } from 'react';


export default function Form (){
  const [toggles, setToggles] = useState({
    steam: false,
    shopify: false,
    discord:false,
    web3Wallet:false,
    xTwitter:false,
    title:false,
    avatar:false,
    banner:false,
    points:false

     
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
       <div className={styles.Container} >
       <Profile_Header/>
        <div className={styles.Content}>
         <p><b>Use this admin panel to create new content in Atari Club</b></p>
         <div style={{display:"flex",justifyContent:'space-between'}}>
            <div style={{display:'flex',gap:'10px'}}>
              <button className={styles.btn1} style={{backgroundColor:"#E9D200"}} ><b>CREATE ACHIEVEMENT</b></button>
              <button className={styles.btn1} >CREATE VOTE</button>
              <button className={styles.btn1} >CREATE NEWS TITLE</button>
            </div>


              <button  style={{padding:"10px", borderRadius:"10px",marginLeft:"39%",color:'white',backgroundColor:'black'}}>VIEW ALL</button>
         </div>


         <hr className={styles.hrstyle }></hr>


         <p>Select the achievement category</p>

         <div style={{backgroundColor:'white',padding:"10px",gap: '10px',display:"flex",gap:"75px"}}>
            <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Games</label>
            </div>
          <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Community</label>
          </div>
          <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Connections</label>
          </div>
           <div className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Hardware</label>
           </div>
          <div  className={styles.checkbox} >
              <input type="checkbox"></input>
              <label>Milestone</label>
          </div>
          
         </div>

         <hr className={styles.hrstyle }></hr>

         <p><b>Enter achievement information</b></p>

         <div style={{display:'flex',flexDirection:"column"}}>
            <input type="text" placeholder="Title" style={{height:"25px",border:"none",borderRadius:"5px",paddingLeft:"10px",fontSize:"14px"}}></input>
            <input type="text" placeholder="Description" style={{height:"60px",marginTop:"15px",border:"none", borderRadius:"5px",paddingLeft:"10px",fontSize:"14px"}}></input>
            <input type="text" placeholder="Success copy" style={{height:"60px",marginTop:"15px",border:"none",borderRadius:"5px",paddingLeft:"10px",fontSize:"14px"}}></input>
         </div>


         <div>
            <p style={{width:"25%",borderRadius:'5px',padding:"1%",border:'1px solid #8E929F',backgroundColor:'#F2F3F5'}}>Select required achievements +</p>
         </div>
            <div>
            <p> <b>Data source (Select one)</b></p>

            <div style={{display:"flex",flexDirection:"column"}}>

            <FormControlLabel
      control={
        <Switch
        checked={toggles.steam}
          onChange={handleChange}
           name="steam"
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
      label="Steam"
    />
       <FormControlLabel
      control={
        <Switch
        checked={toggles.shopify}
          onChange={handleChange}
           name="shopify"
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
      label="Shopify"
    />
        <FormControlLabel
      control={
        <Switch
        checked={toggles.discord}
          onChange={handleChange}
           name="discord"
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
      label="Discord"
    />
        <FormControlLabel
      control={
        <Switch
        checked={toggles.xTwitter}
          onChange={handleChange}
           name="xTwitter"
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
      label="X (Twitter)"
    />
        <FormControlLabel
      control={
        <Switch
        checked={toggles.web3Wallet}
          onChange={handleChange}
           name="web3Wallet"
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
      label="Web 3 Wallet"
    />
            </div>

            </div>

            <hr className={styles.hrstyle}></hr>

            <div>
                <p><b>Requirement</b></p>
                
         <div style={{display:"flex",backgroundColor:'white',borderRadius:'5px',gap:"10px"}}>
            <p  className={styles.reqiurement} >Select data requirement  +</p>
            <p className={styles.reqiurement} style={{backgroundColor:'#F2F3F5'}}>Own : asteroids recharged  -</p>
         </div>
            </div>

            <div>
                <p><b>Upload achievement image (512 x 512px)</b></p>
                
              <div style={{backgroundColor:"white",borderRadius:"5px",padding:"1px"}}>
                   <p style={{width:"20%",borderRadius:'5px',padding:"1%",border:'1px solid #8E929F'}}>Select image to upload  +</p>
              </div>
            </div>
            
            <hr className={styles.hrstyle }></hr>

            <p><b>Rewards</b></p>
            <div style={{display:"flex",flexDirection:"column"}}>
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

            <hr className={styles.hrstyle }  style={{marginBottom:"20px"}}></hr>

            <div style={{display:"flex",gap:'10px'}}>
                <button className={styles.btn} > Save</button>
                <button  className={styles.btn} >Cancel</button>
            </div>
            
        </div>
       </div>
        </>
    )
}