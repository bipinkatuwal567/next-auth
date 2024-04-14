import { useSession } from "next-auth/react";

export default function useCurrentRole(){
    const user = useSession();

    return user?.data?.user?.role;
}