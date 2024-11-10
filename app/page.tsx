import {
  ClassComponent,
  HeaderComponent,
  LiveSessionComponent,
  QuoteComponent,
  WhyGymBuddiesComponent,
} from "@/components";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-LibreBaskerville-Regular)]">
      <HeaderComponent />
      <QuoteComponent />
      <ClassComponent />
      <WhyGymBuddiesComponent />
      <LiveSessionComponent/>
    </main>
  );
}
