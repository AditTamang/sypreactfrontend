"use server"

import {prisma} from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export type AppointmentFormData = {
  doctorId: string
  date: Date | string
  status?: "pending" | "confirmed" | "cancelled"
}

export async function createAppointment(formData: AppointmentFormData) {
  // Ensure user is authenticated
  const user = await requireAuth()

  try {
    // Convert string date to Date object if needed
    const date = typeof formData.date === "string" ? new Date(formData.date) : formData.date

    const appointment = await prisma.appointment.create({
      data: {
        doctorId: formData.doctorId,
        userId: user.id,
        date,
        status: formData.status || "pending",
      },
      include: {
        doctor: true,
      },
    })

    revalidatePath("/appointments")
    return { success: true, data: appointment }
  } catch (error) {
    console.error("Failed to create appointment:", error)
    return { success: false, error: "Failed to create appointment" }
  }
}

export async function updateAppointment(id: string, formData: Partial<AppointmentFormData>) {
  // Ensure user is authenticated
  await requireAuth()

  try {
    // Convert string date to Date object if needed
    const data: any = { ...formData }
    if (typeof formData.date === "string") {
      data.date = new Date(formData.date)
    }

    const appointment = await prisma.appointment.update({
      where: { id },
      data,
      include: {
        doctor: true,
      },
    })

    revalidatePath("/appointments")
    revalidatePath(`/appointments/${id}`)
    return { success: true, data: appointment }
  } catch (error) {
    console.error("Failed to update appointment:", error)
    return { success: false, error: "Failed to update appointment" }
  }
}

export async function deleteAppointment(id: string) {
  // Ensure user is authenticated
  await requireAuth()

  try {
    await prisma.appointment.delete({
      where: { id },
    })

    revalidatePath("/appointments")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete appointment:", error)
    return { success: false, error: "Failed to delete appointment" }
  }
}

export async function getUserAppointments() {
  // Ensure user is authenticated
  const user = await requireAuth()

  try {
    const appointments = await prisma.appointment.findMany({
      where: { userId: user.id },
      include: {
        doctor: true,
      },
      orderBy: { date: "desc" },
    })

    return { success: true, data: appointments }
  } catch (error) {
    console.error("Failed to fetch appointments:", error)
    return { success: false, error: "Failed to fetch appointments" }
  }
}

export async function getAppointmentById(id: string) {
  // Ensure user is authenticated
  await requireAuth()

  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id },
      include: {
        doctor: true,
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
    })

    if (!appointment) {
      return { success: false, error: "Appointment not found" }
    }

    return { success: true, data: appointment }
  } catch (error) {
    console.error("Failed to fetch appointment:", error)
    return { success: false, error: "Failed to fetch appointment" }
  }
}

