import { NextResponse } from "next/server";
import { getLastThreePublishedPosts } from "../../../lib/services/server/post";

export async function GET() {
  try {
    const lastThreePosts = await getLastThreePublishedPosts();
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
