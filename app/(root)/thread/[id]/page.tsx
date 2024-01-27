import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts, fetchThreadById } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const user = currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (userInfo?.onboarded) redirect("/onboarding");

  const thread = await fetchThreadById(params.id);
  return (
    <section className="relative">
      <div>
        <ThreadCard
          id={thread._id}
          currentUserId={thread?.id || ""}
          parentId={thread.parentId}
          key={thread._id}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.created}
          comments={thread.children}
        />
      </div>
    </section>
  );
};

export default page;
