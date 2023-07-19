import react from 'react';
import Projectcard from './projectcard'

function Portfolio(){
    const projects=[
        {
            id:1,
            title:"coming",
            description:"coming",
githublink:"",

        },
        {
        id:2,
            title:"",
            description:"",
githublink:"",
image:""
        },
        {
            id:3,
            title:"",
            description:"",
            githublink:"",
            image:""
        },
        {
            id:4,
            title:"coming soon",
            description:"",
            githublink:"",
            image:""
        },
    ]
    return(
        <div>{projects.map(({id,title,description,githublink,image})=>(
<Projectcard title={title}description={description} key={id} link={githublink} image={image}/>
        ))}</div>
    )
}
export default Portfolio