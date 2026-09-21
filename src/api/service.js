export const STRAPI_URL =
  process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

const BLOG_POST_POPULATE = [
  'populate[0]=coverImage',
  'populate[1]=keyBenefit',
  'populate[2]=keyFeatures',
  'populate[3]=KeyReason',
  'populate[4]=challengeWeSolve',
  'populate[5]=challengeWeSolve.items',
].join('&');

// Cloudinary returns absolute URLs (https://res.cloudinary.com/...)
// Local uploads return relative URLs (/uploads/...)
// This helper handles both.
function resolveImageUrl(path) {
  if (!path) return '';
  return path.startsWith('http') ? path : `${STRAPI_URL}${path}`;
}

export async function fetchAllBlogPosts() {
  const url = `${STRAPI_URL}/api/blog-posts?${BLOG_POST_POPULATE}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();

  return json.data.map((post) => ({
    id: post.id,
    blogUrl: post.slug,
    title: post.title,
    category: post.category,
    image: resolveImageUrl(post.coverImage?.[0]?.url),
    content: post.overview,
    author: `By ${post.author}`,
    date: new Date(post.publishedDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }),
  }));
}

export async function fetchBlogPostBySlug(slug) {
  const url =
    `${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}&${BLOG_POST_POPULATE}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();

  const raw = json.data?.[0];
  if (!raw) return null;

  return {
    id: raw.id,
    blogUrl: raw.slug,
    title: raw.title,
    author: raw.author,
    position: raw.position,
    company: raw.company,
    category: raw.category,
    publishedDate: raw.publishedDate
      ? `Published ${new Date(raw.publishedDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        })}`
      : '',
    timeframe: raw.readTime,
    image: resolveImageUrl(raw.coverImage?.[0]?.url),
    overviewContent: raw.overview,
    keyBenefits: raw.keyBenefit ?? [],
    keyFeatures: raw.keyFeatures ?? [],
    keyReason: raw.KeyReason ?? [],
    challengeWeSolve: raw.challengeWeSolve
      ? {
          content: raw.challengeWeSolve.content,
          items: (raw.challengeWeSolve.items ?? []).map((it) =>
            typeof it === 'string' ? it : it.label
          ),
        }
      : { content: '', items: [] },
  };
}