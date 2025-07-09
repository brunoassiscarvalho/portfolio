import TimeLinePanel from "../components/organisms/timeLinePanel";
import ItemPanel from "../components/templates/itemPanel";

import Resume from "../interfaces/resume";
import { experienceTimelineAdapter } from "../utils/utils";

interface IExperiencePanel {
  experience: Resume["experience"];
}

export default function ExperiencePage({
  experience,
}: Readonly<IExperiencePanel>): JSX.Element {
  return (
    <ItemPanel title="Experience">
      <TimeLinePanel data={experienceTimelineAdapter(experience)} />
    </ItemPanel>
  );
}
