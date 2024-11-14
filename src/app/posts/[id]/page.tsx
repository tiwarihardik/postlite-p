// app/posts/[id]/page.js

import { notFound } from 'next/navigation';
import Link from 'next/link';

// Example post data
const posts = [
  {
    id: '1',
    title: 'First Blog Post',
    content: 'This is the detailed content of the first blog post.',
  },
  {
    id: '2',
    title: 'Second Blog Post',
    content: 'This is the detailed content of the second blog post.',
  },
  {
    id: '3',
    title: 'Third Blog Post',
    content: 'This is the detailed content of the third blog post.',
  },
];

export default function PostPage({ params}) {
  const { id } = params; // Extract the id from route params

  // Find the post matching the id
  const post = posts.find((post) => post.id === id);

  // Handle 404 - not found
  if (!post) {
    notFound(); // This will handle showing a 404 page
    return null; // Render nothing after triggering notFound
  }

  return (
    <div className="p-8 bg">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
