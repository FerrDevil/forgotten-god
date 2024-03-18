import { DefaultUser } from 'next-auth';
declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & { id: string; role: "user" | "admin" };
    }
    interface User extends DefaultUser {
        role: string;
    }
}
