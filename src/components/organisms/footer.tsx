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
      <Button startIcon={<LinkedIn />} color="inherit">
        /in/bruno-assis-carvalho-044095a2
      </Button>
      <Button startIcon={<GitHub />} color="inherit">
        /brunoassiscarvalho
      </Button>
    </Box>
  )
}