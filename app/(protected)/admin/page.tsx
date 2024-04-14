"use client";

import { admin } from "@/actions/admin";
import FormSuccess from "@/components/form-success";
import RoleGate from "@/components/role-gate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useCurrentRole from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

export default function AdminPage() {
  const user = useCurrentRole();

  const onServerActionClick = () => {
    admin()
    .then(response => {
        if(response.error){
            toast.error(response.error);
        }else{
            toast.success(response.success);
        }
    })
  }

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route")
      } else {
        toast.error("Forbidded API Route")
      }
    });
  };

  return (
    <Card className="w-4/5 sm:w-[600px]">
      <CardHeader>
        <p className="text-2xl text-center font-semibold">🔑Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see the content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
