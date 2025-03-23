"use server";

import { prisma } from "@/lib/prisma";



export async function CreateDoctor(data: TypeDoctor) {
  try {
    const res = await prisma.doctor.create({
      data,
    });
    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
