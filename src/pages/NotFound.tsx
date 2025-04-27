import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark p-6 text-white">
      <div className="glass-card p-10 rounded-xl max-w-md w-full text-center">
        <div className="text-8xl font-bold mb-6 text-glow">404</div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="text-center mb-8">
          <span className="text-glow">अनन्तः</span>
          <span className="text-white/80">2025</span>
        </div>
        <CustomButton href="/" neonColor="blue" icon={<Home size={16} />}>
          Return to Home
        </CustomButton>
      </div>
    </div>
  );
};

export default NotFound;
