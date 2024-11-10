"use client";
import { usePathname } from "next/navigation";
import {
  ClassComponent,
  CTAComponent,
  DownloadAppComponent,
  FooterComponent,
  HeaderComponent,
  JoinGymBuddiesComponent,
  LiveSessionComponent,
  QuoteComponent,
  TeamMemberComponent,
  TopHeaderComponent,
  WhyGymBuddiesComponent,
} from "@/components";

export default function Home() {
  const pathname = usePathname();
  const isNotFoundPage = pathname === "/not-found"; 

  return (
    <main className="font-[family-name:var(--font-LibreBaskerville-Regular)]">
      {!isNotFoundPage && <TopHeaderComponent />}
      <HeaderComponent />
      <QuoteComponent />
      <ClassComponent />
      <WhyGymBuddiesComponent />
      <LiveSessionComponent/>
      <CTAComponent/>
      <TeamMemberComponent/>
      <DownloadAppComponent/>
      <JoinGymBuddiesComponent/>
      {!isNotFoundPage && <FooterComponent />}
    </main>
  );
}
