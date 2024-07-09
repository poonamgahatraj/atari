export default function DashboardHeader(){
    return(
        <>
        <div style={{width:"100%",height:"200px", background:"linear-gradient(to right, #FD5B2C, #F2911C)",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"15px"}}>

        <div style={{height:"100px",width:'100px',border:"3px solid white",borderRadius:"50%",backgroundColor:"white",position:"relative"}}>
        <div style={{height:"90px",width:'90px',borderRadius:"50%",background: 'linear-gradient(to right, #FD5B2C, #F2911C)',position:"absolute",top:"5%",left:"5%"}}>
<div style={{height:"75px",width:'75px',borderRadius:"50%",border:'2px solid white',backgroundColor:"white",position:"absolute",top:"6%",left:"6%"}}>
    <img src=".\dog.jpg" style={{height:"69px",width:"69px",borderRadius:"50%" ,position:"absolute",top:"5%",left:"5%"}}></img>

</div>
        </div>
    </div>


        </div>
        </>
    )
}