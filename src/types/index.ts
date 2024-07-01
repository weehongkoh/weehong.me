export type ResumeDataProp = {
  data: ResumeProp;
};

export type ResumeProp = {
  id: number;
  name: string;
  role: string;
  summary: string;
  social_media: SocialMediaProp[];
  about: string;
  experiences: ExperienceProp[];
  projects: ProjectProp[];
  awards: AwardProp[];
  skills: SkillProp[];
  educations: EducationProp[];
  nationality: string;
  email: string;
  phone: string;
};

export type AwardProp = {
  at: string;
  name: string;
  url: string;
};

export type ExperienceProp = {
  from: string;
  to: string | null;
  role: string;
  company: string;
  descriptions: Descriptions;
  tags: string[];
  country: string;
};

export type ProjectProp = {
  name: string;
  description: string;
  tags: string[];
};

export type SkillProp = {
  name: string;
  skill: string[];
};

export type EducationProp = {
  from: string;
  to: string;
  country: string;
  school_name: string;
  certificate: string;
};

export type SocialMediaProp = {
  field: string;
  icon: string;
  url: string;
};

export type Descriptions = {
  time: number;
  blocks: Block[];
  version: string;
};

export type Block = {
  id: string;
  type: string;
  data: Data;
};

export type Data = {
  text: string;
};
