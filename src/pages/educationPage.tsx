
import TimeLinePanel from "../components/organisms/timeLinePanel";
import ItemPanel from "../components/templates/itemPanel";

import Resume from "../interfaces/resume";
import { educationTimelineAdapter } from "../utils/utils";

interface IEducationPanel {
  education: Resume['education'];
}

export default function EducationPage({ education }: IEducationPanel) {

  return (
    <ItemPanel title="Education">      
      <TimeLinePanel data={educationTimelineAdapter(education)}/>
    </ItemPanel>)

}