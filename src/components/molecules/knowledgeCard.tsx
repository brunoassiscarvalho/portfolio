
import { Card, CardContent, Typography, CardActions } from "@mui/material"
import { Knowledege } from "../../interfaces/resume"

export default function KnowledgeCard({ technology, detail }: Knowledege): JSX.Element {
  return (
    <Card sx={{ minHeight: 220 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {technology}
        </Typography>
        <Typography variant="body2">
          {detail}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}