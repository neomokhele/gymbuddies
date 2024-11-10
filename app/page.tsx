import {
  ClassComponent,
  CTAComponent,
  DownloadAppComponent,
  HeaderComponent,
  JoinGymBuddiesComponent,
  LiveSessionComponent,
  QuoteComponent,
  TeamMemberComponent,
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
      <CTAComponent/>
      <TeamMemberComponent/>
      <DownloadAppComponent/>
      <JoinGymBuddiesComponent/>
    </main>
  );
}
