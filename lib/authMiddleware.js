/* This is a middleware function to check if the user is authenticated
 and redirect them to the login page if they are not. */
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; // we will create this too

export async function checkAuth(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { isAuthenticated: false };
  }

  return { isAuthenticated: true, user: session.user };
}
