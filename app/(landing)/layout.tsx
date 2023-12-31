import NavbarLanding from "@/components/navbarLanding";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative scroll-smooth">
      <NavbarLanding />
      {children}
    </main>
  );
};

export default LandingLayout;
