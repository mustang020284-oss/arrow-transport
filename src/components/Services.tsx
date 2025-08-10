export default function Services() {
  return (
    <section id="uslugi" className="scroll-mt-24 ...">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nasze Usługi</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Transport Paczek</h3>
            <p>Bezpieczny i szybki transport paczek między Polską a Norwegią.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Przeprowadzki</h3>
            <p>Profesjonalne przeprowadzki z pełnym wsparciem logistycznym.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Transport Specjalny</h3>
            <p>Przewóz niestandardowych ładunków z zachowaniem pełnego bezpieczeństwa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
