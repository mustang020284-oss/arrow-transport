// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 max-w-5xl mx-auto px-4 py-16 text-white">
       <h2 className="text-3xl font-semibold mb-4">Kontakt</h2>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
        <p className="text-white/80">
          Trasa: Świdwin → Ålesund (E136 → E39). Odbiór przy E6 lub pod dom (Ålesund) / punkt (Vestnes).
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-white/60 text-sm">Telefon</div>
            <div className="text-lg font-medium">+47 xxx xx xxx</div>
          </div>
          <div>
            <div className="text-white/60 text-sm">E-mail</div>
            <div className="text-lg font-medium">kontakt@arrow-transport.no</div>
          </div>
        </div>
      </div>
    </section>
  );
}
