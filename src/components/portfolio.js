import react from 'react';
import Projectcard from './projectcard'

function Portfolio(){
    const projects=[
        {
            id:1,
            title:"tic tac toe",
            description:"Explore my sleek tic-tac-toe app, demonstrating my skill in intuitive design and seamless gameplay.",
githublink:"https://github.com/sukhjit2003/tic-tac-toe.git",
image:"tic tac toe"

        },
        {
            id:2,
            title:"scheduling",
            description:"I designed a personal scheduling reminder app to exhibit my abilities.",
githublink:"https://github.com/sukhjit2003/scheduling-.git",
image:"scheduling"

        },
        {
            id:3,
            title:"pizza order",
            description:"I developed a pizza ordering app to allow users to place orders, enhancing my coding skills and expanding my knowledge.",
githublink:"https://github.com/sukhjit2003/pizza-order.git",
image:"pizza order"

        },
    ]
    return(
        <div>{projects.map(({id,title,description,githublink,image})=>(
<Projectcard title={title}description={description} key={id} link={githublink} image={image}/>
        ))}</div>
    )
}
export default Portfolio