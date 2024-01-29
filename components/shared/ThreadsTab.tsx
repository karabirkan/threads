import { fetchUserPosts } from "@/lib/actions/user.actions";
import React from "react";
interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}
const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  const threads = await fetchUserPosts(currentUserId);
  console.log(threads);
  return <section>{threads._id}</section>;
};

export default ThreadsTab;
