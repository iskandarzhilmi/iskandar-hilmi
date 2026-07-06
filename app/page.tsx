import { ReadingProgress } from "./components/ReadingProgress";
import { Reveal } from "./components/Reveal";

export default function Home() {
  return (
    <div className="relative">
      <ReadingProgress />

      {/* ───── Masthead ─────────────────────────────────────── */}
      <header className="border-b border-ink/80">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-3 flex items-center justify-between gap-6">
          <span className="mono text-[10px] tracking-[0.22em] uppercase text-ink-soft">
            Vol. III · Iss. I
          </span>
          <span className="serif italic text-ink text-sm" aria-label="title">
            The Iskandar Field Journal
          </span>
          <span className="mono text-[10px] tracking-[0.22em] uppercase text-ink-soft">
            Puchong · 2026
          </span>
        </div>
        <div className="rule-rust" />
      </header>

      {/* ───── Cover ────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-12 pt-14 pb-24 lg:pb-40 relative">
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10">
          <p
            className="rise-in eyebrow col-span-12 mb-8"
            style={{ animationDelay: "120ms" }}
          >
            ※ A profile in code, in three acts and a coda
          </p>

          <h1
            className="rise-in display-xl hero-title col-span-12 text-[clamp(72px,14vw,232px)]"
            style={{ animationDelay: "240ms" }}
          >
            Iskandar
            <span className="block italic font-normal text-rust" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              Zulqarnain
            </span>
            <span className="block">bin Hilmi.</span>
          </h1>

          <div
            className="rise-in col-span-12 lg:col-span-7 lg:col-start-1 mt-10 body-serif text-ink-soft text-[19px]"
            style={{ animationDelay: "440ms" }}
          >
            <p className="max-w-[58ch]">
              Software engineer in <span className="italic text-ink">Puchong</span>,
              on the soft edge of Kuala Lumpur. I have spent the last three years
              building things people actually use: a halal scanner that grew to
              twenty‑five thousand installs, an AI image studio that crossed
              seven thousand dollars in monthly revenue, a B2B app for the
              largest cement company in Malaysia. This is the long version.
            </p>
          </div>

          <aside
            className="rise-in col-span-12 lg:col-span-4 lg:col-start-9 mt-10 lg:mt-0 lg:pt-2"
            style={{ animationDelay: "560ms" }}
          >
            <div className="rule-double" />
            <dl className="grid grid-cols-3 gap-x-6 mt-5">
              <div>
                <dt className="eyebrow">Years</dt>
                <dd className="figure-num text-[44px] mt-1">3</dd>
                <p className="mono text-[10px] text-ink-faint mt-1">in&nbsp;production</p>
              </div>
              <div>
                <dt className="eyebrow">Installs</dt>
                <dd className="figure-num text-[44px] mt-1">25K</dd>
                <p className="mono text-[10px] text-ink-faint mt-1">solo&nbsp;app</p>
              </div>
              <div>
                <dt className="eyebrow">MRR</dt>
                <dd className="figure-num text-[44px] mt-1">
                  <span className="text-[26px] align-top">$</span>700+
                </dd>
                <p className="mono text-[10px] text-ink-faint mt-1">bootstrapped</p>
              </div>
            </dl>
            <div className="rule-thin mt-6" />
          </aside>
        </div>

        {/* ornamental scroll cue */}
        <div className="mt-24 flex items-center gap-4">
          <span className="ornament text-2xl">§</span>
          <span className="mono text-[11px] tracking-[0.22em] uppercase text-ink-soft">
            Scroll · Begin Foreword
          </span>
          <div className="flex-1 rule-thin" />
          <span className="mono text-[11px] tracking-[0.22em] uppercase text-ink-faint">
            page 01
          </span>
        </div>
      </section>

      {/* ───── Foreword ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-12 py-24">
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10">
          <Reveal as="div" className="col-span-12 lg:col-span-3">
            <p className="eyebrow">Foreword</p>
            <p className="serif italic text-ink-soft mt-2 text-sm">
              In which the writer introduces himself, briefly, and then gets
              out of the way.
            </p>
            <p className="marginalia mt-6">
              Born in Selangor, 1999.<br />
              Writes mostly Flutter and TypeScript.<br />
              Drinks too much teh ais.
            </p>
          </Reveal>

          <Reveal as="article" className="col-span-12 lg:col-span-7 lg:col-start-5 body-serif text-[19px]" delay={120}>
            <p className="dropcap max-w-[58ch]">
              I write software for a living, and I have done so professionally
              since I was twenty‑two. The work is mostly invisible. It runs in
              your pocket while you wait for the LRT. It scans a barcode at the
              counter of a Berlin grocer and tells a Muslim mother whether the
              gummy bears in her hand are gelatine‑free. It schedules a campaign
              from a marketing team in Singapore. It is small, useful, daily
              software, and I take it seriously.
            </p>
            <p className="max-w-[58ch] mt-5">
              What follows is a record of what I have made. I have tried to be
              specific, not flattering. Some of these projects shipped. One
              never did. One earns me money each month and woke me up, on a
              Tuesday in November, with a notification that read{" "}
              <span className="italic">first thousand‑dollar week</span>. None
              of them were built alone in spirit, even the one I built alone in
              fact.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── Chapter I ────────────────────────────────────── */}
      <Chapter
        roman="I"
        title="The Apprenticeship"
        dek="Cyberjaya, March 2022. A super‑app, a commute, and the first ten thousand downloads."
      >
        <Reveal as="div" className="col-span-12 lg:col-span-7 lg:col-start-3 body-serif text-[19px]">
          <p className="max-w-[58ch]">
            <span className="eyebrow">RF Infinite Sdn Bhd · Software Engineer Intern</span>
          </p>
          <p className="max-w-[58ch] mt-3">
            My first office was in Cyberjaya. I commuted in from Puchong on the
            LRT and pretended I knew what I was doing, which is the universal
            condition of an intern. The product was{" "}
            <span className="italic">Pcari.my</span>, a Flutter super‑app
            spliced from an e‑commerce store and a peer‑to‑peer marketplace,
            and somewhere on the user table is the row I shipped: roughly the
            ten‑thousandth person to download it. I learned what a code review
            felt like when the reviewer was kind. That mattered.
          </p>
        </Reveal>
        <Reveal as="aside" className="col-span-12 lg:col-span-2 lg:col-start-11 mt-8 lg:mt-0" delay={200}>
          <p className="marginalia">
            Mar – Aug 2022<br />
            Cyberjaya, MY<br />
            On‑site<br />
            <span className="text-rust">10K+ downloads</span>
          </p>
        </Reveal>
      </Chapter>

      {/* ───── Chapter II ───────────────────────────────────── */}
      <Chapter
        roman="II"
        title="The Studio"
        dek="Auronex, August 2022 — present. A remote team, a rotating dossier of clients, and the slow apprenticeship of becoming senior."
      >
        <Reveal as="div" className="col-span-12 lg:col-span-7 lg:col-start-3 body-serif text-[19px]">
          <p className="max-w-[58ch]">
            I joined Auronex two weeks after my final paper. Three years on, I
            am still here. The engagements have changed, the colleagues have
            changed, the stack has been Flutter and React Native and React and
            Next.js in turn. The work has not. You ship, you listen to what
            broke, you ship again, you write the small note in Linear that
            says <span className="italic">this is fine for now</span> and mean
            it. The case files below are the ones I am proudest of, in roughly
            reverse order.
          </p>
        </Reveal>

        <Reveal as="div" className="col-span-12 mt-16">
          <div className="rule-thin" />
        </Reveal>

        <CaseFile
          number="01"
          year="Jun 2026 — present"
          client="ParcelDaily"
          role="Fullstack Engineer"
          stack="Next.js · React · Node.js"
          body={
            <>
              One of the largest courier aggregation platforms in Malaysia: a
              middleman that lets a seller compare and book every major
              courier from a single screen instead of wrestling with each one
              in turn. Over a million parcels shipped, more than twenty
              million ringgit in cash on delivery remitted. I work the vendor
              side of the stack, maintaining what exists and shipping what
              does not, in Next.js and Node.
            </>
          }
        />

        <CaseFile
          number="02"
          year="2025 — present"
          client="Sphere AI · 123RF"
          role="Frontend Engineer"
          stack="Next.js · TypeScript · React Query · Zustand"
          body={
            <>
              An AI‑powered social content platform for the largest stock photo
              company in Malaysia, built greenfield. I owned the brand
              onboarding, campaign creation, creative library, post scheduling,
              and reporting dashboards. The interesting part was the async UX:
              live task states, multi‑step generation flows, the small dance of
              loading states for a thing that takes forty‑five seconds to
              return. I used Claude Code daily and the team noticed.
            </>
          }
        />

        <CaseFile
          number="03"
          year="2024 — 2025"
          client="Blieve AI · 123RF"
          role="Frontend Engineer (with light backend)"
          stack="Next.js · TypeScript · Shadcn · Konva · Zustand · Node.js"
          body={
            <>
              A consumer‑facing AI image and video studio. AI headshots,
              image‑to‑video, generative fill, the usual generative roster, but
              wrapped in an interface I cared about. I translated the Figma
              mockups pixel by pixel and pushed for the canvas tooling on
              Konva. Twenty thousand registered users. Seven thousand US
              dollars in monthly recurring revenue at the time I rolled off.
              Sometimes I jumped into the Node and Mongo backend to unblock
              myself.
            </>
          }
          link={{ href: "https://blieve.ai", label: "blieve.ai" }}
        />

        <CaseFile
          number="04"
          year="2024"
          client="YTL Cement Hub"
          role="Mobile Engineer"
          stack="React Native CLI · TypeScript · GraphQL"
          body={
            <>
              A B2B app for the largest construction material provider in
              Malaysia. The end users were diverse, the schemas were ugly, the
              feedback loops were long. I learned to take a meeting with a
              project manager, a tester, a backend engineer, and a designer in
              the same hour without losing the thread, which is its own
              skill.
            </>
          }
          link={{ href: "http://bit.ly/3U0n5nA", label: "bit.ly/3U0n5nA" }}
        />

        <CaseFile
          number="05"
          year="2023"
          client="Trackco"
          role="Mobile Engineer"
          stack="Flutter · BLoC"
          body={
            <>
              A B2B inventory and dealer management app for Southeast Asian
              supply chains. Stock in, stock out, QR scans, dealer rewards. A
              thousand downloads is small, but the logistics underneath were
              not.
            </>
          }
          link={{ href: "https://smartkood.com/trackco", label: "smartkood.com/trackco" }}
        />

        <CaseFile
          number="06"
          year="2023"
          client="Cellmax"
          role="Mobile Engineer"
          stack="Flutter"
          body={
            <>
              Two Flutter apps for a skincare clinic. They were finished. Due
              to a personal matter on the client’s side, neither shipped to
              the stores. I keep this one in the case file anyway. Some of the
              best work I have done was for a release that did not happen.
            </>
          }
        />

        <CaseFile
          number="07"
          year="2022 — 2023"
          client="Hokkien Dictionary"
          role="Frontend"
          stack="React · TypeScript · Ant Design"
          body={
            <>
              A small responsive web app to preserve an endangered language. A
              CRUD dashboard, authentication, and the quiet satisfaction of
              making a thing whose value is measured in vocabulary entries
              rather than active users.
            </>
          }
          isLast
        />
      </Chapter>

      {/* ───── Chapter III · Feature ────────────────────────── */}
      <section className="border-t border-b border-ink mt-32 bg-paper-deep">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-24 lg:py-36">
          <Reveal as="div">
            <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 items-end">
              <p className="col-span-12 lg:col-span-3 eyebrow">
                The feature · Chapter III
              </p>
              <h2 className="col-span-12 lg:col-span-9 display-lg text-[clamp(56px,9vw,128px)] mt-4 lg:mt-0">
                The
                <span className="italic text-rust"> solo </span>
                endeavour.
              </h2>
            </div>
          </Reveal>

          <Reveal as="div" className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-16" delay={120}>
            <aside className="col-span-12 lg:col-span-3">
              <p className="marginalia">
                <span className="text-ink">HalalChecker AI</span><br />
                Founder & lead engineer<br />
                Oct 2024 — present<br />
                <span className="text-rust">iOS · Android · Flutter</span>
              </p>
            </aside>
            <article className="col-span-12 lg:col-span-7 lg:col-start-5 body-serif text-[19px]">
              <p className="dropcap max-w-[58ch]">
                I built HalalChecker AI alone, on a Saturday, at the kitchen
                table. The problem was personal: a friend living in Berlin had
                spent ten minutes in front of a shelf of stroopwafels trying to
                read the German ingredient list on his phone. I shipped the
                first version six weeks later. By the time you read this it
                has crossed twenty‑five thousand installs and earns a little
                over six hundred dollars a month, and the friend in Berlin no
                longer reads ingredient lists in the aisle.
              </p>
              <p className="max-w-[58ch] mt-5">
                The app does three things. It scans a barcode and resolves it
                against a grounded search via Gemini 3 Flash. It runs OCR on
                an ingredient list with Google Vision and then judges the
                ingredients. It accepts a photograph of the package and reasons
                about it. The fallback chain — barcode, then search, then
                cache — pulled the cost per scan down to a half‑cent on the
                fast path, five cents on the slow one. None of this is
                interesting unless you have shipped something like it. I have,
                and I think it is.
              </p>
            </article>
          </Reveal>

          {/* ── Pull quote ── */}
          <Reveal as="figure" className="my-24 lg:my-32" delay={180}>
            <blockquote className="pullquote text-[clamp(40px,6.5vw,88px)] max-w-[16ch] mx-auto text-center">
              <span className="text-rust">“</span>
              Built by Muslims, for Muslims, on a&nbsp;laptop in Puchong.
              <span className="text-rust">”</span>
            </blockquote>
            <figcaption className="eyebrow text-center mt-6">
              Tagline · v3.0 onboarding
            </figcaption>
          </Reveal>

          {/* ── Ledger ── */}
          <Reveal as="div" className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-12" delay={220}>
            <div className="col-span-12 lg:col-span-3">
              <p className="eyebrow">Ledger</p>
              <p className="serif italic text-ink-soft mt-2 text-sm">
                Headline figures as of July 2026. The finer rows are from
                February&apos;s audit, done against the RevenueCat dashboard
                while drinking coffee.
              </p>
            </div>
            <dl className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
              <LedgerRow label="Total installs, all stores" value="25,000+" sub="iOS & Android" />
              <LedgerRow label="Monthly recurring revenue" value="$700+" sub="gross, Jul 2026" highlight />
              <LedgerRow label="All‑time take‑home" value="$4,396" sub="net of stores & RevenueCat" />
              <LedgerRow label="Active paid subscriptions" value="170" sub="92 monthly · 49 annual · 29 legacy weekly" />
              <LedgerRow label="Free → paid conversion" value="6.7%" sub="paywall placement, regional pricing" />
              <LedgerRow label="Singapore share of revenue" value="39%" sub="followed by US, GB, CA, MY, AU" />
              <LedgerRow label="Cost per scan, fast path" value="$0.005" sub="OCR + ingredient analysis" />
            </dl>
          </Reveal>

          {/* ── Architecture ── */}
          <Reveal as="div" className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-24" delay={260}>
            <div className="col-span-12 lg:col-span-3">
              <p className="eyebrow">Stack</p>
              <p className="serif italic text-ink-soft mt-2 text-sm">
                Selected for boredom in the operational sense.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0 mono text-[12.5px] leading-7 text-ink">
              <div className="border border-ink/80 p-6 lg:p-8 bg-paper">
                <p>app  · Flutter, Riverpod, Dio</p>
                <p>api  · Node.js, Jest, Sentry</p>
                <p>db   · Supabase (Postgres, Storage)</p>
                <p>ai   · Google Gemini 3 Flash + grounding</p>
                <p>ocr  · Google Vision API</p>
                <p>pay  · RevenueCat (regional, Netflix Index)</p>
                <p>push · Firebase Cloud Messaging</p>
                <p>ci   · Codemagic</p>
                <p>mon  · Wiredash, Firebase Analytics, Sentry</p>
                <div className="rule-thin my-4 opacity-50" />
                <p className="text-ink-soft">
                  {"// designed, built, marketed, supported by one person."}
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Postscript ── */}
          <Reveal as="div" className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-24" delay={300}>
            <div className="col-span-12 lg:col-span-3">
              <p className="eyebrow">Postscript</p>
              <p className="serif italic text-ink-soft mt-2 text-sm">
                Two footnotes to the solo years.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5 body-serif text-[18px]">
              <p className="max-w-[58ch]">
                In the fortnight before Johor voted in 2026, I built{" "}
                <a
                  href="https://wakilku.com"
                  className="link-edit"
                  target="_blank"
                  rel="noreferrer"
                >
                  WakilKu
                </a>
                , a bilingual voter guide: all 56 seats, 172 sourced candidate
                profiles, and an interactive map. Next.js, roughly eighteen
                thousand lines, written solo with Claude Code in two weeks.
                Seven hundred voters came, and they stayed an average of 5.6
                minutes each before polling day.
              </p>
              <p className="max-w-[58ch] mt-5">
                And in early 2026 I stood in front of a hundred people at the
                first Flutter Kuala Lumpur meetup and gave a talk titled{" "}
                <span className="italic">
                  Building a Profitable App with Flutter
                </span>
                , which is to say, this chapter, out loud.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── Chapter IV · Toolkit ─────────────────────────── */}
      <Chapter
        roman="IV"
        title="The Toolkit"
        dek="What I reach for first, what I reach for second, and what I will admit to having only used in anger."
      >
        <Reveal as="div" className="col-span-12 lg:col-span-9 lg:col-start-3 mt-4">
          <ToolGroup
            label="First reach"
            items={[
              { name: "Flutter", note: "3 yrs · primary mobile stack" },
              { name: "React", note: "3 yrs · production web" },
              { name: "TypeScript", note: "everything that is not Dart" },
              { name: "React Query", note: "the right answer to async UI" },
            ]}
          />
          <ToolGroup
            label="Second reach"
            items={[
              { name: "Next.js", note: "App Router, server components" },
              { name: "React Native", note: "1 yr · YTL Cement Hub" },
              { name: "Node.js", note: "thin APIs, side‑project backends" },
              { name: "Supabase", note: "Postgres + Storage + Auth" },
              { name: "Riverpod", note: "Flutter state, my preferred shape" },
              { name: "BLoC", note: "client work that demanded it" },
            ]}
          />
          <ToolGroup
            label="Used in anger"
            items={[
              { name: "Cursor", note: "occasional pilot seat" },
              { name: "Claude Code", note: "daily co‑pilot, this site included" },
              { name: "GraphQL", note: "Apollo on YTL" },
              { name: "Konva", note: "canvas work on Blieve" },
              { name: "Zustand", note: "small lift, large reach" },
              { name: "Photoshop", note: "App Store creatives, by hand" },
              { name: "Codemagic", note: "Flutter CI" },
            ]}
            isLast
          />
        </Reveal>
      </Chapter>

      {/* ───── Chapter V · Education / Tongues ──────────────── */}
      <Chapter
        roman="V"
        title="Schooling & Tongues"
        dek="Two diplomas, three languages, one polite failure."
      >
        <Reveal as="div" className="col-span-12 lg:col-span-5 lg:col-start-3 body-serif text-[18px]">
          <p className="eyebrow">Universiti Teknologi MARA</p>
          <p className="mt-2">
            <span className="italic">Bachelor of Computer Science (Hons.)</span><br />
            Tapah, Perak. February 2020 — August 2022.
          </p>
          <p className="mt-6">
            <span className="italic">Diploma in Computer Science</span><br />
            Segamat, Johor. May 2017 — January 2020. CGPA 3.57.
          </p>
        </Reveal>
        <Reveal as="div" className="col-span-12 lg:col-span-3 lg:col-start-9 mt-8 lg:mt-0 body-serif text-[18px]" delay={120}>
          <p className="eyebrow">Tongues</p>
          <p className="mt-2">English, fluent.</p>
          <p>Malay, native.</p>
          <p className="text-ink-soft">
            Japanese, JLPT N4, scored seventy‑nine of one‑hundred‑and‑eighty.
            Did not pass. Will sit it again.
          </p>
        </Reveal>
      </Chapter>

      {/* ───── Coda · Contact ───────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-12 pt-32 pb-32 lg:pb-48">
        <Reveal as="div">
          <p className="eyebrow">Coda · Where to find me</p>
          <h2 className="display-lg mt-6 text-[clamp(56px,10vw,148px)] max-w-[14ch]">
            If you have read
            <span className="italic text-rust"> this far</span>, write.
          </h2>
        </Reveal>

        <Reveal as="div" className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-16" delay={120}>
          <div className="col-span-12 lg:col-span-7 body-serif text-[19px]">
            <p className="max-w-[56ch]">
              I am open to senior frontend and full‑stack roles, contracts of
              the right shape, and conversations about software with anyone
              who has built something they care about. I reply within
              twenty‑four hours, and usually within two.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
            <ContactRow
              label="Email"
              value="iskandarzhilmi@gmail.com"
              href="mailto:iskandarzhilmi@gmail.com"
            />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/iskandarhilmi"
              href="https://www.linkedin.com/in/iskandarhilmi"
            />
            <ContactRow
              label="Phone"
              value="+60 13 370 8667"
              href="tel:+60133708667"
            />
            <ContactRow
              label="Mail to"
              value="Puchong, Selangor, MY"
            />
          </div>
        </Reveal>

        <div className="mt-32 grid grid-cols-12 items-end gap-x-6">
          <div className="col-span-6">
            <p className="ornament text-3xl">—I.&nbsp;Z.&nbsp;H.</p>
          </div>
          <div className="col-span-6 text-right">
            <p className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
              Set in Fraunces &amp; JetBrains Mono · Composed in Puchong ·{" "}
              <span className="text-ink">© MMXXVI</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───── Components ─────────────────────────────────────────── */

function Chapter({
  roman,
  title,
  dek,
  children,
}: {
  roman: string;
  title: string;
  dek: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 lg:px-12 py-28 lg:py-36">
      <Reveal as="header" className="mb-16 lg:mb-24">
        <div className="rule-double" />
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 items-baseline mt-6">
          <p className="col-span-3 lg:col-span-2 figure-num text-[64px] lg:text-[96px] text-rust leading-none">
            {roman}
          </p>
          <div className="col-span-9 lg:col-span-10">
            <p className="eyebrow">Chapter {roman}</p>
            <h2 className="headline text-[clamp(36px,5.5vw,72px)] mt-2">
              {title}
            </h2>
            <p className="serif italic text-ink-soft mt-3 text-[18px] max-w-[60ch]">
              {dek}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10">{children}</div>
    </section>
  );
}

function CaseFile({
  number,
  year,
  client,
  role,
  stack,
  body,
  link,
  isLast,
}: {
  number: string;
  year: string;
  client: string;
  role: string;
  stack: string;
  body: React.ReactNode;
  link?: { href: string; label: string };
  isLast?: boolean;
}) {
  return (
    <>
      <Reveal as="article" className="col-span-12 mt-16 lg:mt-20">
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-2">
            <p className="figure-num text-[40px] text-ink leading-none">{number}</p>
            <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-ink-faint mt-2">
              {year}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-3 lg:mt-0">
            <h3 className="headline text-[26px] lg:text-[32px]">
              {client}
              <span className="text-ink-soft serif italic font-normal">
                {" — "}
                {role}
              </span>
            </h3>
            <p className="mono text-[11px] tracking-[0.12em] uppercase text-ink-soft mt-2">
              {stack}
            </p>
            <div className="body-serif text-[18px] mt-4 max-w-[58ch]">
              <p>{body}</p>
              {link && (
                <p className="mt-3 mono text-[12px] text-ink-soft">
                  →{" "}
                  <a
                    href={link.href}
                    className="link-edit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </p>
              )}
            </div>
          </div>
          <aside className="col-span-12 lg:col-span-2 lg:col-start-11 mt-4 lg:mt-2">
            <span className="ornament text-2xl">¶</span>
          </aside>
        </div>
      </Reveal>
      {!isLast && (
        <Reveal as="div" className="col-span-12 mt-16 lg:mt-20">
          <div className="rule-thin" />
        </Reveal>
      )}
    </>
  );
}

function LedgerRow({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div className="ledger-row grid grid-cols-12 gap-x-4 items-baseline py-5">
      <dt className="col-span-12 sm:col-span-6 serif text-ink-soft text-[16px] sm:text-[17px]">
        {label}
      </dt>
      <dd
        className={`col-span-7 sm:col-span-3 figure-num text-[28px] lg:text-[34px] mt-1 sm:mt-0 ${
          highlight ? "text-rust" : "text-ink"
        }`}
      >
        {value}
      </dd>
      <p className="col-span-5 sm:col-span-3 mono text-[10.5px] tracking-[0.08em] uppercase text-ink-faint text-right">
        {sub}
      </p>
    </div>
  );
}

function ToolGroup({
  label,
  items,
  isLast,
}: {
  label: string;
  items: { name: string; note: string }[];
  isLast?: boolean;
}) {
  return (
    <div className={`grid grid-cols-12 gap-x-6 lg:gap-x-10 py-10 ${isLast ? "" : "border-b border-rule"}`}>
      <p className="col-span-12 lg:col-span-2 eyebrow">{label}</p>
      <ul className="col-span-12 lg:col-span-10 mt-3 lg:mt-0 grid sm:grid-cols-2 gap-x-8 gap-y-3">
        {items.map((it) => (
          <li key={it.name} className="flex items-baseline justify-between gap-3 border-b border-rule/60 pb-2">
            <span className="serif text-[20px]">{it.name}</span>
            <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-ink-soft text-right">
              {it.note}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-t border-rule py-3 flex items-baseline justify-between gap-4 last:border-b">
      <span className="eyebrow">{label}</span>
      {href ? (
        <a href={href} className="serif text-[16px] link-edit text-right" target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <span className="serif text-[16px] text-right">{value}</span>
      )}
    </div>
  );
}
