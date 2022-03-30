import { Grid } from "@mui/material";
import KnowledgeCard from "../components/molecules/knowledgeCard";
import ItemPanel from "../components/templates/itemPanel";
import { Knowledege } from "../interfaces/knowledge";
import Resume from "../interfaces/resume";

interface IKnowledgePanel {
  knowledges: Resume['knowledges'];
}

export default function KnowledgPanel({ knowledges }: IKnowledgePanel) {

  return (
    <ItemPanel title="knowledege">
      <Grid container spacing={3}>

        {knowledges.map((knowledege: Knowledege) =>
          <Grid item>
            <KnowledgeCard {...knowledege} />
          </Grid>
        )}
      </Grid>

    </ItemPanel>)

}