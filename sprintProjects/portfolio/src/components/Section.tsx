
import * as React from 'react';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

const Section = ({children, headerText}) => {
  return(
    <Grid2 container direction={'column'}  spacing={3} padding={2}>
     <SectionHeading title={headerText.title} subtitle={headerText.subtitle}/>
     {children}
    </Grid2>
  ) 
}

const SectionHeading = ({title, subtitle}) => {
  return (
    <Grid2 spacing={2} padding={2}>
      <Typography variant={title.variant} component="h2">
        {title.text}
      </Typography>

      <Typography variant={subtitle.variant} component="h3">
        {subtitle.text}
      </Typography>
    </Grid2>
  )
}

export default Section;