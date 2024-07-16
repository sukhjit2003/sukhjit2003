import react from 'react';
function Home() {
    return (
        <div style={{ width: "1000px", margin: "10px auto",position: "relative", height: "fit-content",marginTop:"200px",marginBottom:"300px"}}>
            <h3 style={{fontSize:"50px",fontFamily:"monospace"}}>I am Sukhjit Singh</h3>
            <h3 style={{fontSize:"50px",fontFamily:"monospace"}}>Full Stack Web Developer</h3>
            <img style={{ position: "absolute", top: "0px", right: "0",height:"100%",margin:"8px 8px 8px 8px"}} src={require("../images/photo.png")} />
        </div>
    )
}
export default Home