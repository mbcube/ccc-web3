import Unauthorized from "@/components/401";
import { auth } from "@/lib/auth/auth";

export default async function Home() {
  const session = await auth();

  if (!session?.user) return <Unauthorized />;

  return (
    <section>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-100">
            Home
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"></div>
      </main>
    </section>
  );
}
