import { Switch, FormControlLabel } from '@mui/material';
import './vote.css'

export default function VoteForm(){
    return(
        <>
        <div className='Content'>

       
{/* <p><b>Use this admin panel to create new content in Atari Club</b></p>
 <div style={{display:"flex"}}>
    <div style={{display:'flex',justifyContent:"space-between",width:"51%"}}>
      <button className="btn1" ><b>CREATE ACHIEVEMENT</b></button>
      <button className="btn1" >CREATE VOTE</button>
      <button className="btn1" >CREATE NEWS TITLE</button>
    </div>


      <button  style={{padding:"10px", borderRadius:"10px",marginLeft:"39%",color:'white',backgroundColor:'black'}}>VIEW ALL</button>
 </div> */}

 <div style={{backgroundColor:"#F2F3F5"}}>
        <p> <b>Select the vote type (select one)</b></p>

 
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",paddingLeft:"2%"}}>

            <FormControlLabel
            control={
            <Switch
            
            name="toggle"
            color="primary"
            />
            }
            label="Single select"
            />
            <FormControlLabel
            control={
            <Switch
            
            name="toggle"
            color="primary"
            />
            }
            label="Multiple select"
            />
             <FormControlLabel
            control={
            <Switch
            
            name="toggle"
            color="primary"
            />
            }
            label="Rating"
            />
            <FormControlLabel
            control={
            <Switch
            
            name="toggle"
            color="primary"
            />
            }
            label="This or that"
            />
        </div>
 </div>

      
 

 <hr className="hrstyle  " ></hr>

 <div style={{display:'flex',flexDirection:"column"}}>
    <input type="text" placeholder="Title" style={{border:"none",borderRadius:"5px",padding:'10px',paddingLeft:'1%'}}></input>
   
    <input type="text" placeholder="Description" style={{marginTop:"15px",height:"60px",border:"none", borderRadius:"5px",paddingLeft:'1%'}}></input>

    <input type="text" placeholder="success copy" style={{paddingLeft:"5px",height:"60px",marginTop:"15px",border:"none",borderRadius:"5px",paddingLeft:'1%'}}></input>
 </div>

 <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'5px',gap:"10px"}}>
    <p  className="reqiurement" >Select vote creator +</p>
    
 </div>

 <hr className="hrstyle"  ></hr>

 <div style={{backgroundColor:"#F2F3F5"}}>
        <p> <b>Enter vote details</b></p>

 
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",paddingLeft:"2%"}}>

            <FormControlLabel
            control={
            <Switch
            
            name="toggle"
            color="primary"
            />
            }
            label="Featured"
            />
            <FormControlLabel
            control={
            <Switch
            
            name="toggle"
            color="primary"
            />
            }
            label="Display result"
            />

            </div>
     </div>

          
     <div style={{display:"flex",borderRadius:'5px',gap:"10px"}}>
            <p  className="reqiurement" >Start date and time  +</p>
            <p className="reqiurement" style={{backgroundColor:'#F2F3F5'}}>End date and time +</p>
    </div>

    <hr className="hrstyle"  ></hr>
    

    <div>
    <p> <b>vote options</b></p>

    </div>
    <div style={{display:'flex',flexDirection:"column"}}>
    <input type="text" placeholder="Option" style={{border:"none",borderRadius:"5px",padding:'10px',paddingLeft:'1%'}}></input>
   
    <input type="text" placeholder="Option" style={{marginTop:"15px",border:"none", borderRadius:"5px",padding:"10px",paddingLeft:'1%'}}></input>

    <input type="text" placeholder="Option" style={{paddingLeft:"5px",marginTop:"15px",border:"none",borderRadius:"5px",paddingLeft:'1%',border:"none"}}></input>
    <input type="text" placeholder="Option" style={{paddingLeft:"5px",marginTop:"15px",border:"none",borderRadius:"5px",paddingLeft:'1%',border:"none"}}></input>
 </div>

 <div style={{display:"flex",backgroundColor:'#F2F3F5',borderRadius:'5px',gap:"10px"}}>
            <p  className="reqiurement" >More info url  +</p>
            
 </div>

 
 


 <hr className="hrstyle"  ></hr>

 
 <div>
        <p><b>Upload banner image (1000 x 250px)</b></p>
        
      <div style={{backgroundColor:"white",borderRadius:"5px",padding:"1px",paddingLeft:"10px"}}>
           <p style={{width:"20%",borderRadius:'5px',padding:"1%",border:'1px solid #8E929F'}}>Select image to upload  +</p>
      </div>
    </div>

    <hr className="hrstyle"  ></hr>

    <div style={{backgroundColor:"#F2F3F5"}}>
                <p> <b>Rewards</b></p>

         
                <div style={{display:"flex",flexDirection:"column",backgroundColor:"white",paddingLeft:"2%"}}>

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
         </div> 

<div style={{display:"flex",gap:'10px'}}>
<button className='btn' > Save</button>
<button  className='btn' >Cancel</button>
</div>

 </div>
        </>
    )
}