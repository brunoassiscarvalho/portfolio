



export default interface Resume{
  personal: Personal;
  aboutMe:string;
  knowledge: Array<Knowledege>;
  education: Array<Education>;
  experience: Array<Experience>;

}
export interface Personal {
  name: string;
  position: string;
 socialMedia: Array<SocialMedia>
  // Add other relevant fields as needed
}

export interface SocialMedia {
  name: string;
  url: string;
}

export interface Knowledege {
  id:number
  technology: string;
  detail: string;
}

export interface DateRange{
  start:string;
  end:string;
}

export interface Education {
  date:DateRange;
  course: string;
  institution: string;
}

export interface Experience {
  date:DateRange;
  company:string;
  posisiton: string;
  jobs: Array<string>;
}

