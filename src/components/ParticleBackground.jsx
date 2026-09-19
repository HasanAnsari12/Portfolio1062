export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F5F7FB]">
      {/* Soft Ambient Background Glow Orbs - Static & Professional */}
      <div className="absolute w-[500px] h-[500px] bg-[#5B8CFF]/10 blur-[120px] rounded-full -top-32 -left-32"></div>
      <div className="absolute w-[600px] h-[600px] bg-[#7AA2FF]/10 blur-[140px] rounded-full top-1/3 -right-40"></div>
      <div className="absolute w-[450px] h-[450px] bg-[#3B82F6]/08 blur-[110px] rounded-full bottom-10 left-1/4"></div>
    </div>
  );
}
