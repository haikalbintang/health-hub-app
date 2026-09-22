import { NextResponse, type NextRequest } from "next/server";
import { API_BASE_URL } from "@/utils/constant";

type RouteContext = { params: { path: string[] } };

const REQUEST_HEADERS_TO_STRIP = [
  "host",
  "content-length",
  "connection",
  "keep-alive",
  "transfer-encoding",
];
const RESPONSE_HEADERS_TO_STRIP = ["content-encoding", "content-length"];

// Proxies /api/* to the backend, attaching the httpOnly access token as a
// Bearer header. The token never reaches browser JavaScript.
async function proxy(request: NextRequest, { params }: RouteContext) {
  const upstreamPath = params.path.join("/");
  const target = new URL(`/${upstreamPath}${request.nextUrl.search}`, API_BASE_URL);

  const headers = new Headers(request.headers);
  REQUEST_HEADERS_TO_STRIP.forEach((header) => headers.delete(header));

  const accessToken = request.cookies.get("access_token")?.value;
  if (accessToken && !headers.has("authorization")) {
    headers.set("authorization", `Bearer ${accessToken}`);
  }

  const init: RequestInit & { duplex?: "half" } = {
    method: request.method,
    headers,
  };

  if (request.method !== "GET" && request.method !== "HEAD" && request.body) {
    init.body = request.body;
    init.duplex = "half";
  }

  try {
    const upstream = await fetch(target, init);

    const responseHeaders = new Headers(upstream.headers);
    RESPONSE_HEADERS_TO_STRIP.forEach((header) => responseHeaders.delete(header));

    return new NextResponse(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Proxy request failed:", error);
    return NextResponse.json(
      { message: "Unable to reach the server. Please try again." },
      { status: 502 },
    );
  }
}

export {
  proxy as GET,
  proxy as POST,
  proxy as PUT,
  proxy as PATCH,
  proxy as DELETE,
};