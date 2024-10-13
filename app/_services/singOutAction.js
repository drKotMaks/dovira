// components/actions/signInAction.js
"use server";

import { signOut } from "next-auth/react";

export async function handleSignOut() {
  await signOut("google");
}
