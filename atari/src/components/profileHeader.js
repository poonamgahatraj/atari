export default function Profile_Header(){
    return(
        <>
        <div style={{width:"100%",height:"200px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<div style={{width:"100%",height:"100px", background:"linear-gradient(to right, #FD5B2C, #F2911C)"}}></div>
<div style={{backgroundColor:'#F2F3F5',width:"100%",height:"100px",position:"relative"}}>
    <div style={{height:"80px",width:'80px',border:"3px solid white",borderRadius:"50%",position:"absolute",left:"45%",top:"-45%",backgroundColor:"white"}}>
        <div style={{height:"75px",width:'75px',borderRadius:"50%",background: 'linear-gradient(to right, #FD5B2C, #F2911C)',position:"absolute",left:"4%",top:"4%"}}>
<div style={{height:"65px",width:'65px',borderRadius:"50%",border:'2px solid white',backgroundColor:"white",position:"absolute",top:"3px",left:"3px"}}>
    <img src=".\pic.jpg" style={{height:"62px",width:"62px",borderRadius:"50%",position:"absolute",top:"2%",left:"3%"}}></img>

</div>
        </div>
    </div>
    <h1 style={{marginTop:"0",textAlign:"center",position:"absolute",left:"42%",top:"40%"}}>Scott Asbury</h1>
   
</div>
</div>
      
        </>
    )
}