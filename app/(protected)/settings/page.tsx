"use client";
import { logout } from "@/actions/logout";
// import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function SettingPage() {
  const session = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <Button onClick={onClick} type="submit">
      Log Out
    </Button>
  );
}
