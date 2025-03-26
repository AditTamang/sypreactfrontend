"use server";

import { prisma } from "@/lib/prisma";
import { checkAdminStatus, requireAuth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function createDoctor(formData: TypeDoctor) {
  // Ensure user is authenticated
  await requireAuth();

  try {
    const doctor = await prisma.doctor.create({
      data: formData,
    });

    return { success: true, data: doctor };
  } catch (error) {
    console.error("Failed to create doctor:", error);
    return { success: false, error: "Failed to create doctor" };
  }
}

export async function createDoctorByAdmin(formData: TypeDoctor) {
  // Ensure user is authenticated
  const isAdmin = await checkAdminStatus();
  if (!isAdmin)
    return NextResponse.json(
      { error: "only admin can create doctor" },
      { status: 401 }
    );

  try {
    const doctor = await prisma.doctor.create({
      data: formData,
    });

    revalidatePath("/admin/doctors");
    return { success: true, data: doctor };
  } catch (error) {
    console.error("Failed to create doctor:", error);
    return { success: false, error: "Failed to create doctor" };
  }
}

export async function updateDoctor(id: string, formData: Partial<TypeDoctor>) {
  // Ensure user is authenticated
  await requireAuth();

  try {
    const doctor = await prisma.doctor.update({
      where: { id },
      data: formData,
    });

    revalidatePath("/doctors");
    revalidatePath(`/doctors/${id}`);
    return { success: true, data: doctor };
  } catch (error) {
    console.error("Failed to update doctor:", error);
    return { success: false, error: "Failed to update doctor" };
  }
}

export async function deleteDoctor(id: string) {
  // Ensure user is authenticated
  await requireAuth();

  try {
    await prisma.doctor.delete({
      where: { id },
    });

    revalidatePath("/doctors");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete doctor:", error);
    return { success: false, error: "Failed to delete doctor" };
  }
}

export async function getDoctors() {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: doctors };
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return { success: false, error: "Failed to fetch doctors" };
  }
}

export async function getDoctorById(id: string) {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id },
    });

    if (!doctor) {
      return { success: false, error: "Doctor not found" };
    }

    return { success: true, data: doctor };
  } catch (error) {
    console.error("Failed to fetch doctor:", error);
    return { success: false, error: "Failed to fetch doctor" };
  }
}
