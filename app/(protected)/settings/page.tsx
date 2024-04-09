import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button";

export default async function SettingPage(){
    const session = await auth();
    return(
        <div>
            <p>{JSON.stringify(session)}</p>
            <form action={async() => {
                'use server';
                await signOut();
            }}>
                <Button type="submit">Log Out</Button>
            </form>
        </div>
    )
}