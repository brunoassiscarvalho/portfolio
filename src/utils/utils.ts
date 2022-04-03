import { ITimelineItem } from "../components/organisms/timeLinePanel";
import { Education, Experience } from "../interfaces/resume";

export function educationTimelineAdapter(education: Array<Education>): Array<ITimelineItem> {

  return education.map(({ date, course, institution }: Education) => {
    const educationTimeLine: ITimelineItem = {
      date: date,
      title: course,
      subtitle: institution
    }
    return educationTimeLine;
  })
}  


export function experienceTimelineAdapter(education: Array<Experience>): Array<ITimelineItem> {

  return education.map(({date, company, posisiton, jobs }: Experience) => {
    const educationTimeLine: ITimelineItem = {
      date: date,
      title: posisiton,
      subtitle: company
    }
    return educationTimeLine;
  })
} 
