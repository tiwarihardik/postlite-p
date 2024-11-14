import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    excerpt: "This is a brief excerpt of the first blog post. Explore more about this exciting topic!",
    image: "/path/to/image1.jpg", // Replace with your image path
  },
  {
    id: 2,
    title: "Second Blog Post",
    excerpt: "This is a brief excerpt of the second blog post. Learn the insights and details here.",
    image: "/path/to/image2.jpg", // Replace with your image path
  },
  {
    id: 3,
    title: "Third Blog Post",
    excerpt: "This is a brief excerpt of the third blog post. Discover the full story in this article.",
    image: "/path/to/image3.jpg", // Replace with your image path
  },
];


const HeroSection = () => (
  <div className=" text-white p-8 text-center ">
    <h2 className="text-3xl font-bold mb-2 transform hover:rotate-1 transition-transform duration-500">
      Welcome to Postlite-P!
    </h2>
    <p className="mb-4 max-w-2xl mx-auto">
      A modern blogging platform built with Next.js, designed for easy and powerful content creation.
    </p>
    <Link
      href="/get-started"
      className="inline-block bg-white text-blue-600 py-2 px-4 rounded shadow-lg hover:shadow-2xl transition duration-200 transform hover:scale-110"
    >
      Get Started
    </Link>
  </div>
);

const Footer = () => (
  <footer className="bg-blue-700 text-white text-center p-4 mt-8 shadow-inner">
    <p>&copy; {new Date().getFullYear()} Postlite-P. All rights reserved.</p>
    <p className="mt-2">
      <Link href="/terms" className="hover:underline text-sm">Terms</Link> |
      <Link href="/privacy" className="hover:underline text-sm"> Privacy Policy</Link>
    </p>
  </footer>
);

const Card = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map(post => (
      <div
        key={post.id}
        className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
      >
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
          <Link
            href={`/posts/${post.id}`}
            className="text-blue-500 hover:underline focus:outline focus:ring focus:ring-blue-300"
          >
            Read more
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Latest Posts</h1>
          <Card />
        </div>
      </main>
    </div>
  );
}
