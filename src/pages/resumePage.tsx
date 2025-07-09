import { Grid, Box } from "@mui/material";
import Resume from "../interfaces/resume";
import EducationPage from "./educationPage";
import ExperiencePage from "./experiencePage";
import KnowledgPage from "./knowledegPage";
import resume from "../resume.json";
import AboutMePage from "./aboutMePage";
import BigHeader from "../components/organisms/bigHeader";
import Footer from "../components/organisms/footer";
import image from "../assets/images/resume-bg.jpg"; // Importing the background image

export default function ResumePage(): JSX.Element {
  const { personal, knowledge, education, experience, aboutMe }: Resume =
    resume;

  return (
    <Box
      sx={{
        backgroundImage: `radial-gradient(#00000077,#000000),url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}

    >
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <BigHeader {...personal} />
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
           
              <Box
                sx={{
                  width: "80%",
                  maxWidth: 900,
                  border: 1,
                  borderColor: "primary.main",
                  padding: 5,
                  boxShadow: "0 0 5px 1px",
                  boxShadowColor: "text.secondary",
                  borderRadius: 2,
                  backgroundColor: "#55555544",
                  backdropFilter: "blur(5px)",
                  gap: 5,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <AboutMePage description={aboutMe} />
                <EducationPage education={education} />
                <ExperiencePage experience={experience} />
              </Box>
          </div>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
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
