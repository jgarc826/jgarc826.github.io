import { site } from "@/lib/content";

const links = [
  { label: "Projects", href: "#projects", mobileHidden: false },
  { label: "Experience", href: "#experience", mobileHidden: true },
  { label: "Contact", href: "#contact", mobileHidden: false },
];

export default function Nav() {
  return (
    <header className="nav-blur fixed inset-x-0 top-0 z-50 border-b border-black/10">
      <nav className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-5">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          {site.name}
        </a>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm text-ink/80 transition-colors hover:text-ink ${
                link.mobileHidden ? "hidden sm:block" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
