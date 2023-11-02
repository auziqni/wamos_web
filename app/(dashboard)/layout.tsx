import NavbarDashboard from "@/components/navbardashboard";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <NavbarDashboard />
      <div className="">{children}</div>
    </main>
  );
};

export default LandingLayout;
