"use server";
import { db } from "@/lib/db";


export const deleteTweets = async (id:number) => {
    const tweet = await db.tweet.delete({
        where:{id : id}
    });
}