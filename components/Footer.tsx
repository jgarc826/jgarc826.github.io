import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-surface px-5 pb-10">
      <div className="mx-auto max-w-[980px] border-t border-hairline pt-6">
        <p className="text-xs text-ink-secondary">
          © {new Date().getFullYear()} {site.name}. Designed and built with
          Next.js.
        </p>
      </div>
    </footer>
  );
}
