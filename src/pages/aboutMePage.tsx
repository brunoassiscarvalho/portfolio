import { Typography } from "@mui/material";
import ItemPanel from "../components/templates/itemPanel";

interface IAboutMePage {
  description: string;
}

export default function AboutMePage({ description }: Readonly<IAboutMePage>) {
  return (
    <ItemPanel title="About me">
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </ItemPanel>
  );
}
