
import { Card, CardContent, Typography, CardActions } from "@mui/material"
import { Knowledege } from "../../interfaces/knowledge"


export default function KnowledgeCard({ technology, detail }: Knowledege) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 345 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {technology}
        </Typography>
        <Typography variant="body2">
          {detail}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  )
}