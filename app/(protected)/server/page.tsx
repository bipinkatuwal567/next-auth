// 'user client'

import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { currentUser } from "@/lib/auth";

export default async function Serverpage(){
    const user = await currentUser();
    // const user = useCurrentUser();
    return(
        <UserInfo user={user} label="💻 Server Component" />
    )
}