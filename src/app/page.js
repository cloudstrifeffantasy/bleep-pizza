
export default function Home() {
  return (
      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="uppercase tracking-[0.2em] text-sm text-red-500">
            Detroit-style perfection
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            Every Slice Wears a Crown.
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            Crispy, caramelized cheese edges. Square-cut perfection. Premium ingredients. Experience the Bleep difference.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
            Get your Bleep on
          </button>
        </div>

        <div className="flex-1">
          <div className="w-full aspect-square bg-gray-200 rounded-3xl" />
        </div>
      </main>
  );
}