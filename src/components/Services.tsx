 "use client";
 import RippleButton from "./RippleButton";

export default function Services() {
  return (
    <section id="uslugi" className="scroll-mt-24 ...">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nasze Usługi</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <RippleButton onClick={() => console.log("Transport Paczek")}>
  <div>
    <h3 className="text-xl font-semibold mb-4">Transport Paczek</h3>
    <p>Bezpieczny i szybki transport paczek między Polską a Norwegią.</p>
  </div>
</RippleButton>
            <RippleButton>
          <h3 className="text-xl font-bold mb-2">Przeprowadzki</h3>
            <p>Profesjonalne przeprowadzki z pełnym wsparciem logistycznym.</p>
          </RippleButton>
          <RippleButton>
            <h3 className="text-xl font-bold mb-2">Transport Specjalny</h3>
            <p>Przewóz niestandardowych ładunków z zachowaniem pełnego bezpieczeństwa.</p>
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
