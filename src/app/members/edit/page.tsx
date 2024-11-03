import { CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Member } from "@prisma/client";
import React from "react";
import MemberEditForm from "./EditForm";
import { getAuthUserId } from "@/app/actions/authActions";
import { getMemeberByUserId } from "@/app/actions/memberActions";
import { notFound } from "next/navigation";

export default async function MemperEditPage() {
  const userId = await getAuthUserId();

  const member = await getMemeberByUserId(userId);

  if (!member) return notFound();

  return (
    <>
      <CardHeader className=" text-2xl font-semibold text-secondary">
        Edit Profile
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberEditForm member={member} />
      </CardBody>
    </>
  );
}
