"use server";

import {
  memberEditSchema,
  MemberEditSchema,
} from "@/lib/schemas/memberEditSchema";
import { ActionResult } from "@/types";
import { getAuthUserId } from "./authActions";
import { prisma } from "@/lib/prisma";
import { Member } from "@prisma/client";

export async function updateMemberProfile(
  data: MemberEditSchema
): Promise<ActionResult<Member>> {
  try {
    const userId = await getAuthUserId();

    const validated = memberEditSchema.safeParse(data);

    if (!validated.success)
      return { status: "error", error: validated.error.errors };

    const { name, description, city, country } = validated.data;

    const member = await prisma.member.update({
      where: { userId },
      data: {
        name,
        description,
        city,
        country,
      },
    });
    return { status: "success", data: member };
  } catch (error) {
    console.log(error);

    return { status: "error", error: "Something went wrong" };
  }
}
