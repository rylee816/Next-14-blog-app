

export const authConfig = {
    providers: [],
    pages: {
        signIn: '/login'
    },
    callbacks: {
    //   async jwt({ token, user }) {
    //     if (user) {
    //         // Fetch user data from DB only on first login
    //         connectToDB();
    //         const dbUser = await User.findOne({ email: user.email });
            
    //         if (dbUser) {
    //             token.id = dbUser.id;
    //             token.isAdmin = dbUser.isAdmin;
    //             token.username = dbUser.username;  // Store username in token
    //         }
    //     }
    //     return token;
    // },
    async jwt({ token, user }) {
      if (user) {
          if (user) {
              token.id = user.id;
              token.isAdmin = user.isAdmin;
          }
      }
      return token;
  },
        async session({session, token}){
            if(token){
                session.user.id = token.id
                session.user.isAdmin = token.isAdmin
            }
            
            return session
        },
       authorized({auth, request, }){
        const user = auth?.user;
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
  
        // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
  
        if (isOnBlogPage && !user) {
          return false;
        }
  
        // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
  
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/", request.nextUrl));
        }
  
        return true
        }
    }
}