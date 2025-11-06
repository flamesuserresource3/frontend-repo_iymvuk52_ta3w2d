import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah aman dan resmi?',
    a: 'Ya. Kami menggunakan channel top up resmi dan tidak pernah meminta password. Pembayaran diproses secara aman.'
  },
  {
    q: 'Seberapa cepat pengiriman?',
    a: 'Sebagian besar pesanan terkirim instan atau dalam beberapa menit. Paket besar dapat memakan waktu hingga 10 menit.'
  },
  {
    q: 'Data apa yang dibutuhkan?',
    a: 'Hanya ID dan Server MLBB untuk mengirim diamond ke akun yang benar.'
  },
  {
    q: 'Apakah mendukung game lain?',
    a: 'Ya, kami mendukung beberapa judul dan akan terus menambah.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-black py-20">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90"><HelpCircle size={14}/> Pusat Bantuan</span>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Pertanyaan yang Sering Diajukan</h2>
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
