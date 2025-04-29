import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // replace this with real DB checking
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "admin123"
        ) {
          return {
            id: 1,
            name: "Admin",
            email: "admin@example.com",
            isAdmin: true,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.isAdmin = token.isAdmin;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
