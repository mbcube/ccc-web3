/*import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter"
import Discord from "next-auth/providers/discord"
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Twitter, Discord],
    pages: {
        signIn: "/login",
    },
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
            clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
        }),
    }),
    
});
*/
// in order for my localhost machine to work 

import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";
import Discord from "next-auth/providers/discord";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Twitter({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
        }),
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
            clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    }),
    trustHost: process.env.NODE_ENV === 'development', // Trust localhost in development
});
