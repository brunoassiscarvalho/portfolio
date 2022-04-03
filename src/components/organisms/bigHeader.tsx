import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BigHeader() {

  function handleChangeTheme(themeName: string) {
    localStorage.setItem("themeName", themeName);
    window.location.reload()
  }



  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{
          paddingTop: 10,
          paddingBottom: 10,
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignContent: 'space-around',
          backgroundColor: "primary.main"
        }}>
          <Box >
            <Typography variant='h1'>
              Bruno Assis Carvalho
            </Typography>
            <Typography variant='h3' color="text.secondary">
              Fullstack developer
            </Typography>
          </Box>

        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ backgroundColor: "primary.light", display:"flex", justifyContent: 'space-between'}} >
          <Box>
            <Button startIcon={<LinkedIn />} color="inherit" onClick={() => window.open("https://www.linkedin.com/in/bruno-assis-carvalho-044095a2", "_blank")}>
              /in/bruno-assis-carvalho-044095a2
            </Button>
            <Button startIcon={<GitHub />} color="inherit" onClick={() => window.open("https://github.com/brunoassiscarvalho", "_blank")}>
              /brunoassiscarvalho
            </Button>
          </Box>
          <Box display={"flex"} alignItems="center">
            <Typography>
              Themes:
            </Typography>
            <Button color="inherit"  onClick={() => handleChangeTheme("matrixTheme")}>Matrix</Button>
            <Button color="inherit"   onClick={() => handleChangeTheme("defaultTheme")}>Default</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}