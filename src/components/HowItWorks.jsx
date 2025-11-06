import { Gamepad2, CreditCard, Send } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Gamepad2,
      title: 'Enter Player Details',
      desc: 'Provide your MLBB Player ID and Server. No password required.',
    },
    { icon: CreditCard, title: 'Choose Pack & Pay', desc: 'Pick a diamond pack and pay securely with global methods.' },
    { icon: Send, title: 'Instant Delivery', desc: 'Diamonds arrive in minutes. Track your order status by email.' },
  ];

  return (
    <section id="how" className="relative bg-gradient-to-b from-black to-[#0b0b12] py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            How it works
          </h2>
          <p className="mt-2 text-white/60">Three simple steps to power-up your account.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-900">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-1 text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
