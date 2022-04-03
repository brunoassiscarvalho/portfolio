

import { Grid, Box } from '@mui/material';
import Resume from '../interfaces/resume';
import EducationPage from './educationPage';
import ExperiencePage from './experiencePage';
import KnowledgPage from './knowledegPage';
import resume from '../resume.json';
import AboutMePage from './aboutMePage';
import BigHeader from '../components/organisms/bigHeader';
import Footer from '../components/organisms/footer';

export default function ResumePage() {

  const { knowledge, education, experience, aboutMe }: Resume = resume;

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <BigHeader />
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