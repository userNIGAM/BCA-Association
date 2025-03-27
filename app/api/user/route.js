import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const passwordList = ["praz", "sank", "kaka"];

export async function POST(request) {
  const res = await request.json();
  const { hash } = res;

  // check if password is in list
  let user = "";

  const cookieSet = await cookies().get("token");
  if (cookieSet) {
    return Response.json({
      status: "error",
      message: "Already logged in",
    });
  }

  for (let i = 0; i < passwordList.length; i++) {
    const password = passwordList[i];
    const decrypted = await bcrypt.compare(password, hash);
    if (decrypted) {
      const token = await bcrypt.hash(user, 10);

      await cookies().set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });

      return Response.json({
        status: "success",
        message: "Password matched",
      });
    }
  }

  return Response.json({
    status: "error",
    message: "Password not matched",
  });
}
