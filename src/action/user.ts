"use server";

import { prisma } from "@/lib/prisma";
import {
  requireAuth,
  hashPassword,
  comparePasswords,
  createSession,
  logout,
} from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type UserFormData = {
  fullName: string;
  email: string;
  password: string;
};

export async function registerUser(formData: UserFormData) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: formData.email },
    });
  
    if (existingUser) {
      return { success: false, error: "Email already in use" };
    }

    // Hash the password
    const hashedPassword = await hashPassword(formData.password);

    // Create the user
    const user = await prisma.user.create({
      data: {
        fullName: formData.fullName,
        email: formData.email,
        password: hashedPassword,
      },
    });

    // Create a session for the new user
    await createSession(user.id);

    revalidatePath("/profile");
    return {
      success: true,
      data: { id: user.id, fullName: user.fullName, email: user.email },
    };
  } catch (error) {
    console.error("Failed to register user:", error);
    return { success: false, error: "Failed to register user" };
  }
}

export async function loginUser(email: string, password: string) {
  try {
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }

    // Verify password
    const passwordMatch = await comparePasswords(password, user.password);

    if (!passwordMatch) {
      return { success: false, error: "Invalid email or password" };
    }

    // Create a session
    await createSession(user.id);

    return {
      success: true,
      data: { id: user.id, role: user.role,  fullName: user.fullName, email: user.email },
    };
  } catch (error) {
    console.error("Failed to login:", error);
    return { success: false, error: "Failed to login" };
  }
}

export async function logoutUser() {
  await logout();
  redirect("/login");
}

export async function updateUser(formData: Partial<UserFormData>) {
  // Ensure user is authenticated
  const user = await requireAuth();

  try {
    const data: any = {
      fullName: formData.fullName,
    };

    // Only update password if provided
    if (formData.password) {
      data.password = await hashPassword(formData.password);
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data,
    });

    revalidatePath("/profile");
    return {
      success: true,
      data: {
        id: updatedUser.id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
      },
    };
  } catch (error) {
    console.error("Failed to update user:", error);
    return { success: false, error: "Failed to update user" };
  }
}

export async function deleteUser() {
  // Ensure user is authenticated
  const user = await requireAuth();

  try {
    await prisma.user.delete({
      where: { id: user.id },
    });

    // Logout after deletion
    await logout();

    redirect("/");
  } catch (error) {
    console.error("Failed to delete user:", error);
    return { success: false, error: "Failed to delete user" };
  }
}


export async function deleteUserByIdByAdmin(id:string){
  try {
    await prisma.user.delete({
      where: { id: id },
    });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete user:", error);
    return { success: false, error: "Failed to delete user" };
  }
}