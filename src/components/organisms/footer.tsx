import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

export default function Footer() {

  return (

    <Box sx={{
      paddingTop: 10,
      paddingBottom: 10,
      display: "flex",
      flexDirection: 'column',
      backgroundColor: "primary.light"
    }}>
      <Button startIcon={<LinkedIn />} color="inherit" onClick={() => window.open("https://www.linkedin.com/in/bruno-assis-carvalho-044095a2", "_blank")}>
        /in/bruno-assis-carvalho-044095a2
      </Button>
      <Button startIcon={<GitHub />} color="inherit" onClick={() => window.open("https://github.com/brunoassiscarvalho", "_blank")}>
        /brunoassiscarvalho
      </Button>
    </Box>
  )
}