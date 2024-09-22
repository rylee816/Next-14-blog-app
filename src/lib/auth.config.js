
export const authConfig = {
    providers: [],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({auth, request}){
            console.log(auth, request, "OMFG")
            // return false;
            return true;
        }
    }
}