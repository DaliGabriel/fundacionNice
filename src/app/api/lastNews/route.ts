import { NextResponse } from "next/server";
import { getAllPosts } from "../../../lib/services/server/post";

export async function GET() {
  try {
    const posts = await getAllPosts();
    // Filter published posts and get last three
    const publishedPosts = posts.filter((post) => post.published);
    const lastThreePosts = publishedPosts.slice(-3);

    return NextResponse.json(lastThreePosts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
