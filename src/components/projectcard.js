import react from 'react'
function Projectcard(props){
    console.log(props)
    return(
        <div class="postcard"  >{props.title}
        <p>{props.description}</p>
        <a href={props.link}><p>view code</p></a>
        <img style={{width:"1000px",height:"480px"}} alt={props.title} src={require(`../images/${props.image}.png`)}/>
        </div>
    )
}
export default Projectcard