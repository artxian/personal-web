import { cn } from "../../lib/utils";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const radialMask = showRadialGradient
    ? "radial-gradient(ellipse at 75% 25%, black 25%, transparent 88%)"
    : undefined;

  return (
    <div
      className={cn("aurora-bg-wrapper relative flex flex-col min-h-screen w-full transition-colors duration-300", className)}
      {...props}
    >
      {/* Light mode aurora — distinct, luminous silver ribbons */}
      <div
        className="aurora-overlay-light pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            inset: "-20px",
            opacity: 0.88,
            filter: "blur(10px)",
            backgroundImage:
              "repeating-linear-gradient(100deg, rgba(255,255,255,0.95) 0%, rgba(215,220,230,0.85) 8%, rgba(165,178,198,0.7) 16%, rgba(245,247,250,0.95) 24%, rgba(180,192,210,0.75) 32%, rgba(255,255,255,0.95) 40%), " +
              "repeating-linear-gradient(120deg, transparent 0%, rgba(150,165,185,0.45) 14%, transparent 26%, rgba(205,215,228,0.5) 38%, transparent 50%)",
            backgroundSize: "300%, 200%",
            animation: "aurora 45s linear infinite",
            maskImage: radialMask,
            WebkitMaskImage: radialMask,
          }}
        />
      </div>

      {/* Dark mode aurora — luminous silver-charcoal ribbons against dark sky */}
      <div
        className="aurora-overlay-dark pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            inset: "-20px",
            opacity: 0.85,
            filter: "blur(10px)",
            backgroundImage:
              "repeating-linear-gradient(100deg, rgba(10,10,12,0.95) 0%, rgba(50,55,70,0.85) 10%, rgba(95,108,130,0.75) 18%, rgba(18,20,25,0.95) 26%, rgba(70,78,98,0.8) 34%, rgba(10,10,12,0.95) 42%), " +
              "repeating-linear-gradient(120deg, transparent 0%, rgba(130,145,175,0.4) 14%, transparent 28%, rgba(105,118,142,0.35) 40%, transparent 52%)",
            backgroundSize: "300%, 200%",
            animation: "aurora 45s linear infinite",
            maskImage: radialMask,
            WebkitMaskImage: radialMask,
          }}
        />
      </div>

      {children}
    </div>
  );
};
