type Props = {
  width: number;
  height: number;
  path: string;
  title: string;
  text: string;
};

export default function ServiceCard({ width, height, path, title, text }: Props) {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <article className="flex flex-col gap-3 rounded-lg border p-4 shadow-sm bg-white dark:bg-zinc-900">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-md bg-rose-50">
          <svg width={40} height={40} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className="text-rose-600">
            <path d={path} fill="currentColor" />
          </svg>
        </div>
        <h3 className="text-md font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{text}</p>
    </article>
  );
}
