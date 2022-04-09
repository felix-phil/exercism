const host = 'https://exercism.org/api/v2';
export const tracksURL = host + '/tracks';
export const testimonialsURL = ({
  page,
  track,
  exercise,
  order,
}: {
  page?: number;
  track?: string;
  exercise?: string;
  order?: 'newest_first' | 'oldest_first';
}) =>
  host +
  '/hiring/testimonials/' +
  `?${page ? 'page=' + page : ''}${track ? '&track=' + track : ''}${
    exercise ? '&exercise=' + exercise : ''
  }${order ? '&order=' + order : ''}`;
