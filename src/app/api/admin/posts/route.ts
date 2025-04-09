import { NextResponse } from "next/server";
import { postgres } from "../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const { title, paragraph1 } = await request.json();

    // Basic validation for required fields
    /*
    if (!title || !cover || !category || !paragraph1) {
      return NextResponse.json(
        {
          error: "Required fields missing",
          required: ["title", "cover", "category", "paragraph1"],
        },
        { status: 400 }
      );
    }*/

    // Validate category is a valid enum value
    /*if (!Object.values(Category).includes(category)) {
      return NextResponse.json(
        {
          error: "Invalid category",
          validCategories: Object.values(Category),
        },
        { status: 400 }
      );
    }*/

    // Create the post
    const post = await postgres.post.create({
      data: {
        title,
        cover: "",
        category: "VILLA_DE_LOS_NINOS",
        paragraph1,
        image1: "",
        image2: "",
        paragraph2: "",
        image3: "",
        image4: "",
        buttonLink: "",
        published: false,
      },
    });

    return NextResponse.json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("Failed to create post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
