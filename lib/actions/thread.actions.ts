"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

type createThreadParams = {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
};

export async function createThread({
  text,
  author,
  communityId,
  path,
}: createThreadParams) {
  connectToDB();
}
