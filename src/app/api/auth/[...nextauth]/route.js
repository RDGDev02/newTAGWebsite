import nextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";

export const authOption ={
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID ?? "",
            clientSecret: process.env.CLIENT_SECRET ?? "",
            authorization: "https://discord.com/api/oauth2/authorize?scope=identify+guilds+guilds.members.read",
        }),
    ],
    pages: {
      signIn: "/"
    },
    callbacks: {
      //@ts-ignore
      jwt: async ({ token, account, profile }) => {
        if (account) {
          token.accessToken = account.access_token;
          token.tokenType = account.token_type;
        }
        if (profile) {
          token.profile = profile;
        }
        return token;
      },
      // @ts-ignore
      session: async ({ session, token }) => {
        // @ts-ignore
        session.accessToken = token.accessToken;
        // @ts-ignore
        session.refreshToken = token.refreshToken;
        // @ts-ignore
        session.tokenType = token.tokenType;
        // @ts-ignore
        session.discordUser = token.profile;
        // @ts-ignore
        
        return session;
      },
    },
    secret: process.env.NEXT_AUTH_SECRET,
};

export const handler = nextAuth(authOption);

export { handler as GET, handler as POST };