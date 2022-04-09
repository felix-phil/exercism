export interface Track {
  slug: string;
  title: string;
  course: boolean;
  num_concepts: number;
  num_exercises: number;
  web_url: string;
  icon_url: string;
  tags: string[];
  last_touched_at: null;
  is_new: true;
  links: object;
}
export interface TracksResponse {
  tracks: Track[];
}
