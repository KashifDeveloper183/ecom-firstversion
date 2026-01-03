type Props = {
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  description?: string;
  image?: string;
};

export default function ProductCard({ title, price, originalPrice, discount, description, image = "/file.svg" }: Props) {
  return (
    <article className="relative w-full flex flex-col gap-3 overflow-hidden rounded bg-white p-4 shadow-sm dark:bg-zinc-900">
      {discount && (
        <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-2 py-1 text-xs font-semibold text-zinc-900">{discount} OFF</span>
      )}
      <div className="w-full overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
        <img src={image} alt={title} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
        <p className="text-sm sm:text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        <div className="mt-2">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-rose-600">{price}</div>
            {originalPrice && <div className="text-sm text-zinc-500 line-through">{originalPrice}</div>}
          </div>
        </div>
      </div>
    </article>
  );
}
