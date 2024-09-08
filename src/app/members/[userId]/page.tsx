import { getMemeberByUserId } from "@/app/actions/memberActions";
import { notFound } from "next/navigation";
import React from "react";

export default async function MemberDetailedPage({
  params,
}: {
  params: { userId: string };
}) {
  const member = await getMemeberByUserId(params.userId);

  if (!member) return notFound();
  
  return <div>{member?.name}</div>;
}
