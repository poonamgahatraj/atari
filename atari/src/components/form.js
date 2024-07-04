import { Switch, FormControlLabel } from '@mui/material';
import Profile_Header from './profileHeader';


export default function Form (){
    return(
        <>
       <div style={{width:"100%",height:"100%",backgroundColor:"#F2F3F5"}}>
       <Profile_Header/>
        <div style={{border:"2px solid black",paddingLeft:"2%" ,paddingRight:"30%",paddingBottom:'2%' }}>
         <p><b>Use this admin panel to create new content in Atari Club</b></p>
         <div style={{display:"flex"}}>
            <div style={{display:'flex',justifyContent:"space-between",width:"51%"}}>
            <button style={{padding:"10px", borderRadius:"10px"}}><b>CREATE ACHIEVEMENT</b></button>
<button style={{padding:"10px", borderRadius:"10px"}}>CREATE VOTE</button>
<button  style={{padding:"10px", borderRadius:"10px"}} >CREATE NEWS TITLE</button>
            </div>


<button  style={{padding:"10px", borderRadius:"10px",marginLeft:"39%",color:'white',backgroundColor:'black'}}>VIEW ALL</button>
         </div>
         <hr style={{marginTop:'25px',marginLeft:"0",width:"85%"}}></hr>
         <p>Select the achievement category</p>

         <div style={{backgroundColor:'white',padding:"10px",gap: '10px',display:"flex",gap:"75px"}}>
            <div style={{display:"flex",gap:'10px'}}>
            <input type="checkbox"></input>
            <label>Games</label>
            </div>
          <div style={{display:"flex",gap:'10px'}}>
          <input type="checkbox"></input>
          <label>Community</label>
          </div>
          <div style={{display:"flex",gap:'10px'}}>
          <input type="checkbox"></input>
          <label>Connections</label>
          </div>
           <div style={{display:"flex",gap:'10px'}}>
           <input type="checkbox"></input>
           <label>Hardware</label>
           </div>
          <div style={{display:"flex",gap:'10px'}}>
          <input type="checkbox"></input>
          <label>Milestone</label>
          </div>
          
         </div>

         <hr style={{marginTop:'25px',marginLeft:"0",width:"85%"}}></hr>
         <p><b>Enter achievement information</b></p>

         <div style={{display:'flex',flexDirection:"column"}}>
         <input type="text" placeholder="Title" style={{height:"25px",border:"none",borderRadius:"5px"}}></input>
         <input type="text" placeholder="Description" style={{height:"60px",marginTop:"15px",border:"none", borderRadius:"5px"}}></input>
         <input type="text" placeholder="Success copy" style={{height:"60px",marginTop:"15px",border:"none",borderRadius:"5px"}}></input>
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
              
              name="toggle"
              color="primary"
            />
          }
          label="Steam"
        />
        <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="Shopify"
        />
        <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="Discord"
        />
        <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="X (Twitter)"
        />
        <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="Web 3 Wallet"
        />
            </div>

            </div>
            <hr style={{marginTop:'25px',marginLeft:"0",width:"85%"}}></hr>
            <div>
                <p><b>Requirement</b></p>
                
         <div style={{display:"flex",backgroundColor:'white',borderRadius:'5px',gap:"10px"}}>
            <p style={{width:"21%",borderRadius:'5px',border:'1px solid #8E929F',padding:"1%"}}>Select data requirement  +</p>
            <p style={{width:"22%",borderRadius:'5px',border:'1px solid #8E929F',backgroundColor:'#F2F3F5',padding:"1%"}}>Own : asteroids recharged  -</p>
         </div>
            </div>

            <div>
                <p><b>Upload achievement image (512 x 512px)</b></p>
                
         <div style={{backgroundColor:"white",borderRadius:"5px",padding:"1px"}}>
            <p style={{width:"20%",borderRadius:'5px',padding:"1%",border:'1px solid #8E929F'}}>Select image to upload  +</p>
            
         </div>
            </div>
            <hr style={{marginTop:'25px',marginLeft:"0",width:"85%"}}></hr>

            <p><b>Rewards</b></p>
            <div style={{display:"flex",flexDirection:"column"}}>
            <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="Title"
        />
        <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="Avatar"
        />
        <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="Banner"
        />
        <FormControlLabel
          control={
            <Switch
              
              name="toggle"
              color="primary"
            />
          }
          label="Points"
        />

            </div>

            <hr style={{marginTop:'25px',marginLeft:"0",width:"85%",marginBottom:"25px"}}></hr>

            <div style={{display:"flex",gap:'10px'}}>
                <button style={{width:"10%",borderRadius:"10px",padding:"10px"}}> Save</button>
                <button style={{width:"10%",borderRadius:"10px",padding:"10px"}}>Cancel</button>
            </div>
            
        </div>
       </div>
        </>
    )
}