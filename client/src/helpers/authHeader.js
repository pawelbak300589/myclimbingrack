export const authHeader = (state) => {
    // return authorization header with auth token
    const currentUser = state.auth.currentUser;
    if (currentUser && currentUser.jwtToken) {
        return { Authorization: `Bearer ${currentUser.jwtToken}` };
    } else {
        return {};
    }
};
