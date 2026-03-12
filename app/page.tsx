"use client";
import Logo from "@/components/Logo";

const REASONS = [
  { emoji: "📉", text: "You watched your portfolio drop 80% while the founder bought a yacht." },
  { emoji: "🔒", text: "Your tokens were 'locked for community safety' and never unlocked." },
  { emoji: "🤝", text: "The 'partnership' was two devs following each other on Twitter." },
  { emoji: "📢", text: "The 'major announcement' was a new logo." },
  { emoji: "🗳", text: "The governance vote was decided before you finished reading the proposal." },
  { emoji: "💰", text: "The team wallet moved $2M to Binance and called it 'rebalancing.'" },
];

export default function Page() {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2"><Logo size={22} /><span className="text-[11px] font-black text-[var(--color-red)]/60 tracking-wider">RAGEQUIT</span></div>
        <a href="https://x.com/RagequitCoin" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-white bg-[var(--color-red)] px-4 py-1.5 rounded hover:bg-[var(--color-red-dim)] transition-colors">
          Flip the Table
        </a>
      </nav>

      <section className="min-h-[100svh] flex items-center justify-center px-6 pt-16">
        <div className="max-w-lg text-center">
          <p className="text-7xl mb-6 anim-up d1 glitch-text">(╯°□°)╯︵&nbsp;┻━┻</p>
          <p className="text-[10px] text-[var(--color-red)]/50 tracking-[0.3em] uppercase mb-4 anim-up d1">ENOUGH IS ENOUGH</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 anim-up d2 leading-tight crack">
            RAGE<span className="text-[var(--color-red)]">QUIT.</span>
          </h1>
          <p className="text-[var(--color-muted)] mb-8 anim-up d3 leading-relaxed max-w-sm mx-auto">
            Not giving up. Not surrendering. Not paper-handing.
            This is the calculated, fully conscious decision to flip the table
            and walk away from a rigged game.
          </p>
          <a href="#why" className="text-sm font-bold text-white bg-[var(--color-red)] px-6 py-3 rounded hover:bg-[var(--color-red-dim)] transition-colors anim-up d3">
            Read the Manifesto ↓
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-lg mx-auto">
          <p className="text-[10px] text-[var(--color-red)]/40 tracking-[0.3em] uppercase mb-3">Evidence</p>
          <h2 className="text-2xl font-bold text-white mb-8">Why We Quit</h2>
          <div className="space-y-3">
            {REASONS.map((r, i) => (
              <div key={i} className="smash-card flex items-start gap-3">
                <span className="text-lg shrink-0">{r.emoji}</span>
                <p className="text-sm text-[var(--color-text)] leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-16 md:py-24 px-6 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-xl mx-auto space-y-12">
          {[
            { t: "Ragequitting is a rational act.", d: "They called you emotional. Impulsive. A paper-hand. But you did the math. The tokenomics don't work. The roadmap is fiction. The team is anonymous. Leaving isn't rage — it's arithmetic." },
            { t: "The table was never level.", d: "Insiders got the allocation. VCs got the discount. You got the 'community round' at 50x their entry. The game was rigged before you sat down. Flipping the table is the only dignified move." },
            { t: "Walking away is the ultimate power move.", d: "They need your liquidity, your engagement, your belief. Without it, the whole thing collapses. RAGEQUIT isn't leaving the game — it's ending it." },
          ].map((item, i) => (
            <div key={i} className="group pl-5 border-l-2 border-[var(--color-red)]/15 hover:border-[var(--color-red)]/40 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-red)] transition-colors">{item.t}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 text-center border-t border-[var(--color-border)]">
        <p className="text-5xl mb-4 glitch-text">┻━┻</p>
        <h2 className="text-3xl font-black text-white mb-3">
          Done playing by <span className="text-[var(--color-red)]">their rules.</span>
        </h2>
        <p className="text-sm text-[var(--color-muted)] mb-8 max-w-sm mx-auto">
          You don&apos;t owe them your liquidity, your attention, or your belief.
        </p>
        <a href="https://x.com/RagequitCoin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[var(--color-red)] px-6 py-3 rounded hover:bg-[var(--color-red-dim)] transition-colors">
          <span>𝕏</span> Flip the Table
        </a>
      </section>

      <footer className="border-t border-[var(--color-border)] py-6 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2"><Logo size={14} /><span className="text-[9px] text-[var(--color-red)]/30 font-bold">RAGEQUIT</span></div>
        <p className="text-[9px] text-[var(--color-muted)]/40">┬─┬ノ( º _ ºノ) ...nah (╯°□°)╯︵ ┻━┻</p>
      </footer>
    </>
  );
}
