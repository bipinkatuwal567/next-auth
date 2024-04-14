import { db } from "@/lib/db"
import { useId } from "react"

export const getAccountByUserId = async(userId: string) => {
    try {
        const account = await db.account.findFirst({
            where: {userId}
        })
        return account;
    } catch (error) {
        return null;        
    }
}