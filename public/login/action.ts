// app/(public)/login/actions.ts
"use server";

import { signIn } from "@/lib/api";
import { cookies } from "next/headers";

export async function login(prev: any, formData: FormData) {
  const res = await signIn({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });
  cookies().set("token", res.data.access_token, { httpOnly: true });
}
