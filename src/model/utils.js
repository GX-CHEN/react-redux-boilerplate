export function generateTitleFromGiphySlug(slug) {
  return slug
    .split('-')
    .slice(0, -1)
    .join(' ');
}
