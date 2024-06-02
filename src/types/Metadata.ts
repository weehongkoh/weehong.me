export type Metadata = {
  title: string;
  summary: string;
  publishedAt: string;
  series: SeriesProp;
  category: string;
  tags?: string[];
  image?: string;
  coverImage?: string;
};

export type SeriesProp = {
  [key: string]: [string];
};
