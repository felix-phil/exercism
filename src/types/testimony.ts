export interface Testimony {
  id: number;
  track: {
    slug: string;
    title: string;
    icon_url: string;
  };
  exercise: {
    slug: string;
    title: string;
    icon_url: string;
  };
  mentor: {
    handle: string;
    avatar_url: string;
  };
  content: string;
  created_at: string;
}
export interface Pagination {
  current_page: number;
  total_count: number;
  total_pages: number;
}
export interface Testimonials {
  results: Testimony[];
  pagination: Pagination;
  tracks: string[];
  track_counts: object;
}
export interface TestimonialsResponse {
  testimonials: Testimonials;
}
