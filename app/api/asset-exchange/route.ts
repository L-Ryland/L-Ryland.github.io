import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");
  const filename = searchParams.get("filename") || "downloaded-file";

  if (!targetUrl) {
    return NextResponse.json({ error: "Missing file URL" }, { status: 400 });
  }

  try {
    const upstreamResponse = await fetch(targetUrl);
    console.debug("upstreamResponse", upstreamResponse);
    if (!upstreamResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch upstream file" },
        { status: 502 },
      );
    }

    const headers = new Headers();
    headers.set(
      "Content-Type",
      upstreamResponse.headers.get("Content-Type") ||
        "application/octet-stream",
    );
    headers.set(
      "Content-Disposition",
      `attachment; filename="${encodeURIComponent(filename)}"`,
    );

    return new NextResponse(upstreamResponse.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
