import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Typography, Grid, IconButton, Switch } from "@mui/material";
import { Personal } from "../../interfaces/resume";

import React, { useMemo } from "react";

export default function BigHeader({name, position, socialMedia}: Readonly<Personal>): JSX.Element {

  // Determine checked state from localStorage
  const checked = useMemo(() => {
    return localStorage.getItem("themeName") === "defaultTheme";
  }, []);

  function handleChangeTheme(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    localStorage.setItem("themeName", checked ? "defaultTheme" : "matrixTheme");
    window.location.reload();
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
              {name}
            </Typography>
            <Typography variant='h3' color="text.secondary">
              {position}
            </Typography>
          </Box>

        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ backgroundColor: "primary.light", display:"flex", justifyContent: 'space-between'}} >
          <Box sx={{height:80}}>
            <IconButton size="large" color="inherit" aria-label="linkedin" onClick={() => window.open("https://www.linkedin.com/in/bruno-assis-carvalho-044095a2", "_blank")}>
              <LinkedIn sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton size="large" color="inherit" onClick={() => window.open("https://github.com/brunoassiscarvalho", "_blank")}>
              <GitHub sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
          <Box display={"flex"} alignItems="center">
            <Switch onChange={handleChangeTheme} checked={checked} />            
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}