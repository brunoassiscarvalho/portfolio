
import { GitHub, LinkedIn } from '@mui/icons-material';
import { TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, Timeline } from '@mui/lab';
import { Button, Grid, Typography, Box } from '@mui/material';
import Resume from './interfaces/resume';
import KnowledgPanel from './pages/knowledegPanel';
import resume from './resume.json';
function App() {

const {knowledges}:Resume = resume;

  return (
    <Box margin={3}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Box sx={{ height: '60vh', display: 'flex', alignItems: 'center' }} >
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignContent: 'space-around',
            }}>
              <Box >
                <Typography variant='h1'>
                  Bruno Assis Carvalho
                </Typography>
                <Typography variant='h3' color="text.secondary">
                  Fullstack developer
                </Typography>
              </Box>
              <Button startIcon={<LinkedIn />}>
                /in/bruno-assis-carvalho-044095a2
              </Button>
              <Button startIcon={<GitHub />}>
                /brunoassiscarvalho
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{
            maxWidth: 600,
          }}>
            <Typography variant='body2' color="text.secondary">
              Um apaixonado por programação e desenvolvedor Java que aprendeu e se transformou em um programador Javascript, e conhecedor de Typescript, curioso e criativo. Para mim, em primeiro lugar, aprender e entender o negócio, depois criar soluções que encantem o cliente.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <KnowledgPanel knowledges={knowledges}/>
        </Grid>
        <Grid item xs={12}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                09:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Bachelor of Business Administration with Specialization
                in Management Information Systems
                IESRIVER Instituo de Ensino Superior de Rio Verde</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Postgraduate in Mobile Device Development
                Universitary Center IESB</TimelineContent>
            </TimelineItem>

          </Timeline>
        </Grid>
        <Grid item xs={12}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                09:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Bachelor of Business Administration with Specialization
                in Management Information Systems
                IESRIVER Instituo de Ensino Superior de Rio Verde</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Postgraduate in Mobile Device Development
                Universitary Center IESB</TimelineContent>
            </TimelineItem>

          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
