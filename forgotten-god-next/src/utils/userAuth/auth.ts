import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma/prisma";



export const authOptions: NextAuthConfig = {
    providers: [
        GoogleProvider({
            id: 'google',
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
            profile(profile){
                /* console.log("PROFILE INFO:", profile) */
                return {
                    id: profile.sub,
                    email: profile.email,
                    role: "user"
                }
            }
          }),
          CredentialsProvider({
            id: 'credentials',
            type: "credentials",
            credentials: {

            },
            async authorize(credentials: {email: string, password: string}) {
              const userInfo = {email: credentials.email, password: credentials.password}
              const user = await prisma.user.findFirst({
                where: userInfo
              })
              return user
            },
          }),
          CredentialsProvider({
            id: 'signUp',
            type: "credentials",
            credentials: {

            },
            async authorize(credentials: { email: string, password: string, username: string }) {
              const userInfo = {
                email: credentials.email,
                password: credentials.password,
                username: credentials.username
              }
              const user = await prisma.user.create({
                data: userInfo
              })
              return user
            },
          }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async signIn({account, profile}){
          /*   console.log("USER EMAIL: ", account) */
            return true
        },
        async redirect({ url, baseUrl }) {
          if (url.startsWith("/")) return `${baseUrl}${url}`
          return baseUrl
        },
        async session({ session}) {
          const user = await prisma.user.findFirst({
            where: {email: session.user.email}
          })
          session.user = { email: session.user.email, id: user.id, role: user.role }
          return session;
      },
    },
    pages: {
      signIn: "/signIn",
    },
    secret: process.env.NEXTAUTH_SECRET
}

export const { handlers: { GET, POST }, auth } = NextAuth(authOptions)