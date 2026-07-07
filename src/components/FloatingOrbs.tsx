"use client";

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #00f5d4, transparent)",
          top: "15%",
          left: "-10%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent)",
          top: "60%",
          right: "-8%",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent)",
          top: "35%",
          right: "30%",
          animation: "float 12s ease-in-out infinite",
          animationDelay: "5s",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, #00f5d4, transparent)",
          bottom: "10%",
          left: "20%",
          animation: "float 9s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
    </div>
  );
}
