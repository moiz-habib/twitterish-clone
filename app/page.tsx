import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-y-6">
      <h1 className="text-5xl font-bold text-center">Welcome to the quiz</h1>
      <Button>
        <Link href={"/main"}>Next</Link>
      </Button>
    </main>
  );
};

export default Home;
