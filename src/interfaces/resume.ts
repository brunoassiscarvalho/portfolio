

export default interface Resume{
  aboutMe:string;
  knowledge: Array<Knowledege>;
  education: Array<Education>;
  experience: Array<Experience>;

}

export interface Knowledege {
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

