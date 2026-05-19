import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {

  try {

    const formData =
      await request.formData();

    const file =
      formData.get(
        "file"
      ) as File;

    if (!file) {

      return NextResponse.json(
        {
          success: false,
          message:
            "No file uploaded",
        },
        {
          status: 400,
        }
      );
    }

    if (
      file.size >
      4 * 1024 * 1024
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Max file size is 4MB",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      success: true,
      fileName:
        file.name,
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}