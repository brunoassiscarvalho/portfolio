import { Box, Grid } from "@mui/material";
import KnowledgeCard from "../components/molecules/knowledgeCard";
import ItemPanel from "../components/templates/itemPanel";
import Resume, { Knowledege } from "../interfaces/resume";

interface IKnowledgePanel {
  knowledge: Resume["knowledge"];
}

export default function KnowledgePage({
  knowledge,
}: Readonly<IKnowledgePanel>): JSX.Element {
  return (
    <ItemPanel title="Knowledege">
      <Box padding="2em">
        <Grid container spacing={3}>
          {knowledge.map((knowledegeItem: Knowledege, idx: number) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              xl={3}
              key={knowledegeItem.id ?? idx}
            >
              <KnowledgeCard {...knowledegeItem} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ItemPanel>
  );
}
