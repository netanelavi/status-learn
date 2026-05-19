"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BookOpenIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", icon: HomeIcon, label: "דשבורד" },
  { href: "/courses", icon: BookOpenIcon, label: "קורסים" },
  { href: "/profile", icon: UserIcon, label: "פרופיל" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 flex h-16 items-stretch border-t border-border bg-card/90 backdrop-blur-sm md:hidden"
      aria-label="ניווט ראשי"
    >
      {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
              active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-current={active ? "page" : undefined}
          >
            <Icon
              className={cn(
                "size-5 transition-transform",
                active && "scale-110"
              )}
            />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
