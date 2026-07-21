interface Props {
  text: string;
}

export default function TechBadge({ text }: Props) {
  return (
    <span
      className="
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-3.5
        py-1.5
        text-xs
        font-medium
        tracking-wide
        text-zinc-300
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:bg-blue-500/10
        hover:text-white
      "
    >
      {text}
    </span>
  );
}