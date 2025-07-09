import { Card, CardContent, Typography, CardActions } from "@mui/material";
import { Knowledege } from "../../interfaces/resume";

export default function KnowledgeCard({
  technology,
  detail,
}: Readonly<Knowledege>): JSX.Element {
  return (
    <Card
      sx={{
        minHeight: 300,
        boxShadow: "0 0 5px 1px",
        boxShadowColor: "text.secondary",
      }}
      elevation={0}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary" }}
          variant="subtitle1"
        >
          {technology}
        </Typography>
        <Typography sx={{ fontSize: 20 }} variant="body1">
          {detail}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
