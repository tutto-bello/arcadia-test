import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLINET_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
});
