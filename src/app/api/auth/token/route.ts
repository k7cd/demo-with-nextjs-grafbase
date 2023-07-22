import { getToken } from "next-auth/jwt";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(request: NextApiRequest) {
  const token = await getToken({ req: request, secret, raw: true });
  return NextResponse.json({ token });
}
