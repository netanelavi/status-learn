import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const validUser = process.env.ADMIN_USERNAME ?? "admin";
  const validPass = process.env.ADMIN_PASSWORD ?? "auth";
  const secret = process.env.AUTH_SECRET ?? "secret";

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ error: "פרטים שגויים" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("auth_token", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return response;
}
