import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, params: Promise<{ tid: string }>) {
  try {
    // const { tid } = await params;
    return NextResponse.json({ test: "true" });
  } catch (error) {
    return NextResponse.json({ status: "error" });
  }
}
