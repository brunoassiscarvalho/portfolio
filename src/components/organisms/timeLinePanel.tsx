
import { TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, Timeline } from "@mui/lab";
import { Typography } from "@mui/material";
import { DateRange } from "../../interfaces/resume";


interface ITimeLinePanel {
  data: ITimelineItem[]
}

export interface ITimelineItem {
  date: DateRange;
  title: string;
  subtitle: string;
  detail?: string;
}

export default function TimeLinePanel({ data }: ITimeLinePanel) {
  
  return (
    <Timeline>
      {data.map(({ date, title, subtitle, detail }: ITimelineItem) =>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            {`${date.start} - ${date.end} `}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6'>
              {title}
            </Typography>
            <Typography>
              {subtitle}
            </Typography>

           {detail && <Typography>
              {detail}
            </Typography>}
          </TimelineContent>
        </TimelineItem>
      )}
    </Timeline>
  )
}