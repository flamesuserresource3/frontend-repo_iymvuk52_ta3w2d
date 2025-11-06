import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Is this safe and official?',
    a: 'Yes. We use authorized top-up channels and never ask for your password. Payments are processed securely.'
  },
  {
    q: 'How fast is delivery?',
    a: 'Most orders are delivered instantly or within a few minutes. Large packs may take up to 10 minutes.'
  },
  {
    q: 'What details do you need?',
    a: 'Only your MLBB Player ID and Server to send diamonds to the correct account.'
  },
  {
    q: 'Do you support other games?',
    a: 'Yes, we support multiple titles and are adding more regularly.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-black py-20">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90"><HelpCircle size={14}/> Help Center</span>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer list-none text-white/90 transition group-open:text-white">
                {f.q}
              </summary>
              <p className="mt-2 text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
