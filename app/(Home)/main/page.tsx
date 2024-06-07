'use client'

import { getTweets } from "@/actions/getTweets";
import { InputWithButton } from "@/components/search-form";
import { TweetCard } from "@/components/tweet-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { any } from "zod";

const Home = () => {
  
  const [allTweets, setAllTweets] = useState<any>(); 

  useEffect(() => {
    getTweets().then((tweets)=>{
      setAllTweets(tweets)
    }).catch((error : any)=>{
      console.log(error)
    })    
  },[allTweets])

  return (
    <div className="flex flex-col items-center h-screen gap-y-2 p-6">
      <UserButton/>
      <InputWithButton />
      <div className="flex flex-col gap-y-1">
        {
          allTweets?.map((tweet : any,index : number)=>{
           return(<TweetCard tweet={tweet} key={index}/>)
          })
        }
      </div>
    </div>
  );
};

export default Home;
