import { CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

export default function ChatPage() {
  return (
    <>
      <CardHeader className=" text-2xl font-semibold text-secondary">
        Chat page
      </CardHeader>
      <Divider />
      <CardBody>Chat goes here</CardBody>
    </>
  );
}
