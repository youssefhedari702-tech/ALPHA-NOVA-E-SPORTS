import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-black text-white">

      <Sidebar />

      <div className="flex-1">
        {children}
      </div>

    </div>
  );
}