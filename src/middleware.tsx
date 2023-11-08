import { authenticate } from "@/utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/admin", "/admin/featuresRequested", "/dashboard"];
export default function middleware(req: NextRequest) {
  let cookie = req.cookies.get("accessToken");

  if (
    !authenticate(cookie?.value) &&
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
