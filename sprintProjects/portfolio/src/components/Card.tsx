import React from 'react'
import Typography from "@mui/material/Typography"
import Grid2 from '@mui/material/Grid2'

const CardContainer = ({projectList}) => {
    return (
        <Grid2 container spacing={4}>
             {projectList.map((project, index) => (
               <Grid2 key={index} size={{ xs: 12, md: 4, lg: 4 }}>
                 <h3>{project.title}</h3>
                 <p>{project.subtitle}</p>
                 <img src={project.image} alt={project.title} />
                 <p>{project.bodytext}</p>
                 <p>{project.footertext}</p>
               </Grid2>
             ))}
        </Grid2>
    )
}

// const Card = ({content}) => {
//     return (
//         <Grid2 spacing={1}>
//             <CardHeader content={content}/>
//             <CardBody content={content}/>
//             <CardFooter content={content}/>
//         </Grid2> 
//     )
// }

// const CardHeader = ({content}) => {
//     return (
//         <Grid2 padding={2}>
//             <Typography variant="h2">
//                 {content.title}
//             </Typography>
//         </Grid2>
//     )
// }

// const CardBody = ({content}) => {
//     return (
//         <Grid2 padding={2}>
//             <Typography variant="h2">
//                 {content.bodytext}
//             </Typography>`
//         </Grid2>
//     )
// }

// const CardFooter = ({content}) => {
//     return (
//         <Grid2 padding={2}>
//             <Typography variant="h5">
//                 {content.footertext}
//             </Typography>`
//          </Grid2>
//     )
// }

export default CardContainer