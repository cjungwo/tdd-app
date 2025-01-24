import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="mt-20 text-4xl font-bold text-center leading-snug">
        <div>Front-End</div>
        <div className="text-6xl text-green-400 mb-8">TDD Completed!!</div>
        <Link href='/contents'>&lt;&lt;GO&gt;&gt;</Link>
      </header>
    </div>
  );
}
