import { Grid, Typography } from "@mui/material";
import { ReactChild } from "react";

interface IKnowledgePanel {
  title: string,
  children: ReactChild
}

export default function ItemPanel({ title, children }: IKnowledgePanel): JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography style={{ textAlign: 'center' }} variant="h4" >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}