import Navbar from "./_component/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <span className="flex flex-col gap-y-8 justify-center items-center w-full h-full bg-sky-500">
      <Navbar />
      {children}
    </span>
  );
}
