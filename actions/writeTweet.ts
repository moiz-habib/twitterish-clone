'use server';

import { InputSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db"

export const createTweets = async(values: z.infer<typeof InputSchema>) =>{
    
    const validatedValues = InputSchema.safeParse(values);

    if(!validatedValues.success){
        return({
            err:'Invalid Tweet'
        })
    }
    
    const tweet = await db.tweet.create({
        data:{
            tweet: validatedValues?.data.tweet,
        }
     })
}