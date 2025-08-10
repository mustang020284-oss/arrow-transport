export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d10] py-6 text-center text-sm text-white/60">
      <p>
        © {new Date().getFullYear()} Arrow Transport. Wszystkie prawa zastrzeżone.
      </p>
      <p className="mt-1">
        Strona wykonana przez <span className="text-blue-400">Sebix Dev</span>.
      </p>
    </footer>
  );
}
