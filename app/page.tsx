import { ClassComponent, HeaderComponent, QuoteComponent } from "@/components";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-LibreBaskerville-Regular)]">
      <HeaderComponent />
      <QuoteComponent />
      <ClassComponent />
    </main>
  );
}
