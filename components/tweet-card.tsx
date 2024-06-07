import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import React, { useCallback, useState } from "react";
import moment from "moment";
import { deleteTweets } from "@/actions/deleteTweet";

type TweetCardProps = {
  tweet: any;
};

export const TweetCard = ({ tweet }: TweetCardProps) => {
  const [liked, setLiked] = useState<boolean>();

  const HandleClick = useCallback(() => {
    setLiked((prevLiked) => !prevLiked);
  }, []);

  const deleted = useCallback(() => {
    deleteTweets(tweet.id)
  }, [tweet.id]);


  const getTime = (tweet: any) => {
    var timeDiff = new Date().getTime() - tweet.createdAt.getTime();
    var timeInSeconds = timeDiff / 1000;
    if (timeInSeconds <= 59) {
      return "Just Now";
    } else {
      var timeInMinutes = Math.round(timeInSeconds / 60);
      if (timeInMinutes <= 59) {
        return `${timeInMinutes} Minutes Ago`;
      } else {
        var timeInHours = Math.round(timeInMinutes / 60);
        if (timeInHours <= 23) {
          return `${timeInHours} Hours Ago`;
        } else {
          var timeInDays = Math.round(timeInHours / 24);
          return `${timeInDays} Days Ago`;
        }
      }
    }
  };

  return (
    <Card className="flex flex-col w-[610px] gap-y-2">
      <CardHeader className="flex flex-row align-center items-center justify-between">
        <div>{tweet.tweet}</div>
        <div className="flex gap-x-2">
          {liked ? (
            <IoIosHeart size={20} color="#ef233c" onClick={HandleClick} />
          ) : (
            <IoIosHeartEmpty color="#ef233c" size={20} onClick={HandleClick} />
          )}
          {<IoTrashOutline size={20} onClick={deleted} />}
        </div>
      </CardHeader>
      <CardFooter className="font-light text-[12px]">
        {getTime(tweet)}
      </CardFooter>
    </Card>
  );
};
