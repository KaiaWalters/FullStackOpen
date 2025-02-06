
import * as React from 'react';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

const Section = ({children, direction, headerText}) => {
  <Grid2 container direction={direction} spacing={3} padding={2}>
    <SectionHeading title={headerText.title} subtitle={headerText.subtitle}/>
    {children}
  </Grid2>
      //seion should provide the option to either have a column or row 
      //standard padding and border 
      // different colors for different sections 
      // minor or major section heading 
      //take in children
      // font color should be inherited
    
}


const SectionHeading = ({title, subtitle}) => {
  return (
    <Grid2 spacing={2} padding={2} sx={{backgroundColor: 'primary.main'}}>
      <Typography variant="h1" component="h2">
        {title}
      </Typography>

      <Typography variant="h2" component="h3">
        {subtitle}
      </Typography>
    </Grid2>
  )
}

export default Section;