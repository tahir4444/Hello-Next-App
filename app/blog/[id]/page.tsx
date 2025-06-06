export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params to get the <id></id>
  const { id } = await params;
  // You can use the id to fetch data or perform other operations
  console.log(`Blog post ID: ${id}`);
  // For demonstration, we will just return a simple page
  // with the blog post ID displayed
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Blog Post Page</h1>
      <p className="text-lg text-gray-700">
        This is a blog post page of the Next.js application.
        {/* Display the blog post ID */}
        <br />
        Blog Post ID: <span className="font-mono">{id}</span>
      </p>
    </div>
  );
}
// Compare this snippet from app/blog/page.tsx:
// export default function BlogPage() {
