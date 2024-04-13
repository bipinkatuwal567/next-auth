import { ExtendUser } from "@/auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface UserInfoProps {
  user?: ExtendUser;
  label: string;
}

export default function UserInfo({ user, label }: UserInfoProps) {
  return (
    <Card className="w-4/5 sm:w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center p-3 rounded-sm border shadow-sm">
          <p className=" text-sm font-medium">ID</p>
          <p className="max-w-[180px] truncate rounded-md text-xs bg-slate-100 p-1 font-mono">{user?.id}</p>
        </div>

        <div className="flex justify-between items-center p-3 rounded-sm border shadow-sm">
          <p className=" text-sm font-medium">Name</p>
          <p className="max-w-[180px] truncate rounded-md text-xs bg-slate-100 p-1 font-mono">{user?.name}</p>
        </div>

        <div className="flex justify-between items-center p-3 rounded-sm border shadow-sm">
          <p className=" text-sm font-medium">Email</p>
          <p className="max-w-[180px] truncate rounded-md text-xs bg-slate-100 p-1 font-mono">{user?.email}</p>
        </div>

        <div className="flex justify-between items-center p-3 rounded-sm border shadow-sm">
          <p className=" text-sm font-medium">Role</p>
          <p className="max-w-[180px] truncate rounded-md text-xs bg-slate-100 p-1 font-mono">{user?.role}</p>
        </div>

        <div className="flex justify-between items-center p-3 rounded-sm border shadow-sm">
          <p className=" text-sm font-medium">Two Factor Authenticated</p>
          {/* <p className="max-w-[180px] truncate rounded-md text-xs bg-slate-100 p-1 font-mono">{user?.isTwoFactorEnabled ? "ON" : "OFF"}</p> */}
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
          {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
