"use client"
import { logoutUser } from "@/action/user";
import { Button } from "./ui/button";

export default function LogoutButton() {

  return (
    <Button
    variant={"outline"}
    size={"sm"}
      onClick={async () => {
        await logoutUser();
      }}
    >
      Logout
    </Button>
  );
}