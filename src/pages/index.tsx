import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import { SignIn, SignInButton, SignOutButton } from "@clerk/clerk-react";

export default function Home() {
  const user = useUser();
  const posts = api.post.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!user.isSignedIn && <SignInButton />}
        {user.isSignedIn && <div>{posts?.map(post) =>{
          <div key={posts.id}>{posts.content}</div>
        }}</div>}
      </main>
    </>
  );
}
