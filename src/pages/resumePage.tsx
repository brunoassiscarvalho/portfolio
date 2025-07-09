

import { Grid, Box } from '@mui/material';
import Resume from '../interfaces/resume';
import EducationPage from './educationPage';
import ExperiencePage from './experiencePage';
import KnowledgPage from './knowledegPage';
import resume from '../resume.json';
import AboutMePage from './aboutMePage';
import BigHeader from '../components/organisms/bigHeader';
import Footer from '../components/organisms/footer';
import image from "../assets/images/resume-bg.jpg"; // Importing the background image

export default function ResumePage(): JSX.Element {

  const { personal, knowledge, education, experience, aboutMe }: Resume = resume;

  return (
    <Box sx={{  backgroundImage: `linear-gradient(0.25turn, #000000aa 0%, #000000 70%), url(${image})`,
                backgroundSize: '90%',
                backgroundPositionX: 'left',
                backgroundPositionY: '25rem',
                backgroundRepeat: 'no-repeat',}}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <BigHeader {...personal} />
        </Grid>
        <Grid item xs={12}>
          <AboutMePage description={aboutMe} />
        </Grid>
        <Grid item xs={12}>
          <EducationPage education={education} />
        </Grid>
        <Grid item xs={12}>
          <ExperiencePage experience={experience} />
        </Grid>
        <Grid item xs={12}>
          <KnowledgPage knowledge={knowledge} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Box>
  );
}