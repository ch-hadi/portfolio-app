import { Calendar, GraduationCap, LayoutDashboard, MessageSquare, Search, Sparkles, Video } from "lucide-react";

/**
 * Recreated, design-consistent product UI scenes used inside <BrowserFrame>.
 *
 * These are tasteful REPRESENTATIONS of each product (not screenshots of the
 * live sites, which aren't publicly reachable). Swap any scene for a real
 * <Image src="/projects/<name>.png" fill /> once you have authentic captures.
 */
export type MockupVariant = "chat" | "telehealth" | "lms";

const bar = "rounded-full bg-muted";

export function ProductMockup({ variant }: { variant: MockupVariant }) {
  if (variant === "chat") return <ChatScene />;
  if (variant === "telehealth") return <TelehealthScene />;
  return <LmsScene />;
}

function ChatScene() {
  return (
    <div className="absolute inset-0 flex text-[0.6rem]">
      {/* sidebar */}
      <aside className="hidden w-1/4 flex-col gap-2 border-r border-border bg-muted/40 p-3 sm:flex">
        <div className="flex items-center gap-1.5 font-semibold text-foreground">
          <Sparkles className="size-3 text-brand-500" /> Shahada GPT
        </div>
        <div className="mt-1 rounded-md bg-gradient-to-r from-brand-600 to-cyan-accent px-2 py-1.5 text-center text-white">
          + New chat
        </div>
        {["Sources of Zakat", "Tafsir of Al-Fatiha", "Hadith authenticity", "Daily duas"].map((t, i) => (
          <div key={t} className={`truncate rounded-md px-2 py-1.5 ${i === 0 ? "bg-card text-foreground" : "text-muted-foreground"}`}>
            {t}
          </div>
        ))}
      </aside>

      {/* chat */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 border-b border-border pb-3 text-muted-foreground">
          <MessageSquare className="size-3 text-brand-500" />
          <span className={`h-2 w-24 ${bar}`} />
          <span className="ml-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[0.55rem] text-emerald-500">
            RAG · grounded
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {/* user */}
          <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-brand-600 px-3 py-2 text-white">
            What are the conditions for Zakat?
          </div>
          {/* assistant */}
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-border bg-card px-3 py-2.5">
            <div className="space-y-1.5">
              <span className={`block h-1.5 w-full ${bar}`} />
              <span className={`block h-1.5 w-11/12 ${bar}`} />
              <span className={`block h-1.5 w-3/4 ${bar}`} />
            </div>
            <div className="mt-2 flex gap-1.5">
              <span className="rounded border border-brand-500/30 bg-brand-500/10 px-1.5 py-0.5 text-[0.5rem] text-brand-500">
                Source · Quran 9:60
              </span>
              <span className="rounded border border-border bg-muted px-1.5 py-0.5 text-[0.5rem] text-muted-foreground">
                Sahih Bukhari
              </span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-muted-foreground">
          <span className={`h-2 flex-1 ${bar}`} />
          <span className="flex size-5 items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-cyan-accent text-white">
            <Sparkles className="size-2.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function TelehealthScene() {
  return (
    <div className="absolute inset-0 flex flex-col text-[0.6rem]">
      <header className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
        <Video className="size-3 text-brand-500" />
        <span className="font-semibold text-foreground">Blue Jay Telehealth</span>
        <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-accent text-white">D</span>
      </header>

      <div className="grid flex-1 grid-cols-3 gap-3 p-4">
        {/* video consult */}
        <div className="col-span-2 flex flex-col overflow-hidden rounded-lg border border-border bg-card">
          <div className="relative flex-1 bg-gradient-to-br from-brand-600/25 to-cyan-accent/25">
            <span className="absolute left-2 top-2 rounded-full bg-rose-500 px-1.5 py-0.5 text-[0.5rem] text-white">● LIVE</span>
            <div className="absolute bottom-2 right-2 h-10 w-14 rounded-md border border-white/30 bg-foreground/20 backdrop-blur" />
          </div>
          <div className="flex items-center justify-center gap-2 border-t border-border py-2">
            {["bg-muted", "bg-muted", "bg-rose-500"].map((c, i) => (
              <span key={i} className={`size-5 rounded-full ${c}`} />
            ))}
          </div>
        </div>

        {/* side: appointments + billing */}
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-border bg-card p-2.5">
            <div className="mb-1.5 flex items-center gap-1 text-muted-foreground">
              <Calendar className="size-2.5" /> Today
            </div>
            {["09:00 · A. Khan", "11:30 · M. Müller", "14:00 · S. Patel"].map((t) => (
              <div key={t} className="mb-1 rounded bg-muted/70 px-1.5 py-1 text-muted-foreground">{t}</div>
            ))}
          </div>
          <div className="rounded-lg border border-border bg-card p-2.5">
            <div className="mb-1 font-medium text-foreground">Billing</div>
            <div className="rounded bg-muted/70 px-1.5 py-1 text-muted-foreground">Visa •••• 4242</div>
            <div className="mt-1.5 rounded bg-gradient-to-r from-brand-600 to-cyan-accent px-1.5 py-1 text-center text-white">
              Pay €60.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LmsScene() {
  return (
    <div className="absolute inset-0 flex text-[0.6rem]">
      <aside className="hidden w-1/5 flex-col gap-2 border-r border-border bg-muted/40 p-3 sm:flex">
        <div className="flex items-center gap-1.5 font-semibold text-foreground">
          <GraduationCap className="size-3 text-brand-500" /> Awfera
        </div>
        {[LayoutDashboard, GraduationCap, Calendar, Search].map((Icon, i) => (
          <div key={i} className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 ${i === 0 ? "bg-card text-foreground" : "text-muted-foreground"}`}>
            <Icon className="size-2.5" /> <span className={`h-1.5 w-10 ${bar}`} />
          </div>
        ))}
      </aside>

      <div className="flex-1 p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="font-semibold text-foreground">Courses</span>
          <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-1.5 py-0.5 text-[0.5rem] text-brand-500">Multi-tenant</span>
          <span className="ml-auto h-5 w-16 rounded-md bg-muted" />
        </div>

        {/* stats */}
        <div className="mb-3 grid grid-cols-3 gap-2">
          {["1,240 learners", "38 courses", "92% completion"].map((s) => (
            <div key={s} className="rounded-lg border border-border bg-card px-2 py-2 text-center">
              <div className="font-semibold text-foreground">{s.split(" ")[0]}</div>
              <div className="text-[0.5rem] text-muted-foreground">{s.split(" ").slice(1).join(" ")}</div>
            </div>
          ))}
        </div>

        {/* course cards */}
        <div className="grid grid-cols-2 gap-2">
          {[68, 41, 90, 25].map((p, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-2.5">
              <div className="mb-1.5 h-8 rounded bg-gradient-to-br from-brand-600/25 to-cyan-accent/25" />
              <span className={`block h-1.5 w-3/4 ${bar}`} />
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-accent" style={{ width: `${p}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
