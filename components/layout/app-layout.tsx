import Link from "next/link";
import { HomeIcon, BookOpenIcon, UserIcon } from "lucide-react";
import { TopBar } from "@/components/layout/top-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  { href: "/dashboard", icon: HomeIcon, label: "דשבורד" },
  { href: "/courses", icon: BookOpenIcon, label: "קורסים" },
  { href: "/profile", icon: UserIcon, label: "פרופיל" },
] as const;

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex w-56 shrink-0 flex-col border-l border-border bg-card pt-6 pb-4">
          <nav className="flex flex-col gap-1 px-3" aria-label="ניווט ראשי">
            {SIDEBAR_ITEMS.map(({ href, icon: Icon, label }) => (
              <SidebarLink key={href} href={href} icon={Icon} label={label} />
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main
          className={cn(
            "flex-1 overflow-y-auto px-4 pt-6 pb-24 md:pb-8 md:px-8",
            className
          )}
        >
          {children}
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <BottomNav />
    </div>
  );
}

function SidebarLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground aria-[current=page]:bg-primary/10 aria-[current=page]:text-primary"
    >
      <Icon className="size-4 shrink-0" />
      {label}
    </Link>
  );
}
