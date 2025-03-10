import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");
  const pathname = request.nextUrl.pathname;
  let tenantId = null;

  // try {
  //   const url = `${process.env.NODE_ENV === "production" ? "https://" : "http://"}${hostname}/api/v1/domain`;
  //   const req = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "X-Host-Name": `${hostname}`,
  //     },
  //   });
  //   const data = await req.json();

  //   if ("sessionId" in data) {
  //     tenantId = data?.sessionId as string;
  //   } else throw new Error(data.message);
  // } catch (error) {
  //   if (error instanceof Error) console.log(error.message);
  // }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|404).*)"],
};
