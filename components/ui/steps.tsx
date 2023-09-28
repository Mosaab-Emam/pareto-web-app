export default function Steps() {
  return (
    <div className="mb-32 grid text-center md:grid-cols-2 lg:mb-8 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">1. Define Your Schema</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Use our UI editor or upload a schema file from Prisma, Zenstack, or
          Blueprint.
        </p>
      </div>

      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>2. Define Your Stack</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Choose a popular preset or fine-tune your stack to your specific
          needs.
        </p>
      </div>

      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          3. Generate Your Project
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Get production ready, SaaS ready, clean, semantic, and customizable
          code.
        </p>
      </div>
    </div>
  );
}
