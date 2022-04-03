import { Box, Typography } from "@mui/material";
import ItemPanel from "../components/templates/itemPanel";

interface IAboutMePage {
  description: string;
}

export default function AboutMePage({ description }: IAboutMePage) {

  return (
    <ItemPanel title="About me">

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{
          maxWidth: 600,
        }}>
          <Box sx={{border: 1, borderColor: 'primary.main', padding:5}}>

            <Typography variant='h6' sx={{
              textAlign: 'center'
            }}>
              {description}
            </Typography>
          </Box>

        </Box>
      </Box>
    </ItemPanel>

  )

}