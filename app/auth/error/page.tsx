import CardWrapper from "@/components/auth/CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function AuthErrorPage() {
  return (
    <CardWrapper
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      headerLabel="Opps something went wrong!"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive w-6 h-6" />
      </div>
    </CardWrapper>
  );
}
