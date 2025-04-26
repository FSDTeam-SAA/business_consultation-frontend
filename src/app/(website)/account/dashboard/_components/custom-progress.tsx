interface CustomProgressProps {
  value: number;
  color: string;
  label: string;
}

export function CustomProgress({ value, color, label }: CustomProgressProps) {
  return (
    <div className="mb-5 flex w-full items-center gap-2">
      <div className="relative h-6 w-full">
        <div
          className="h-10 transition-all"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <span className="whitespace-nowrap font-medium text-emerald-500">
        {label}
      </span>
    </div>
  );
}
