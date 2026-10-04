interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10">
      <h3 className="text-5xl font-black tracking-tight text-foreground">
        {value}
      </h3>

      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
        {label}
      </p>
    </div>
  );
}