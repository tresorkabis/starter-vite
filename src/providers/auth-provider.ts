import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => { throw new Error("Not implemented"); },
    logout: async () => { throw new Error("Not implemented"); },
    check: async () => { throw new Error("Not implemented"); },
    onError: async (error) => { throw new Error("Not implemented"); },
    // optional methods
    register: async (params) => { throw new Error("Not implemented"); },
    forgotPassword: async (params) => { throw new Error("Not implemented"); },
    updatePassword: async (params) => { throw new Error("Not implemented"); },
    getIdentity: async () => { throw new Error("Not implemented"); },
    getPermissions: async () => { throw new Error("Not implemented"); },
};