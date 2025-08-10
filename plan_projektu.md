## Etap 0: Fundamenty (dziś)
- [x] Środowisko: Node, VS Code, Next.js + TS + Tailwind.
- [x] Repo + lokalny serwer dev.
- [ ] Plik .env (później: klucze, URL-e).

## Etap 1: UX/Design (D1–D3)
- [ ] Paleta PL/NO, typografia, grid.
- [ ] Nagłówek (logo, język PL/EN), stopka.
- [ ] Przyciski 3D („skała”).
- [ ] Hero z CTA „Zamów transport”.

## Etap 2: Treści i responsywność (D4–D6)
- [ ] Strony: Home, O nas, Kontakt, Polityka prywatności.
- [ ] Responsywność: mobile-first (sm/md/lg/xl).
- [ ] SEO: tytuły, meta, sitemap, robots, hreflang.

## Etap 3: Cennik i koszyk (D7–D10)
- [ ] Stały cennik (edytowalny w panelu):
      10 kg = 400 NOK, 20 kg = 500 NOK, 30 kg = 600 NOK,
      koperta = 200 NOK, szyba = 900 NOK.
- [ ] Koszyk: łączenie paczek + podpowiedź tańszej kombinacji.
- [ ] Walidacja gabarytów → „Wycena indywidualna” + upload zdjęcia.

## Etap 4: Zamówienie (D11–D14)
- [ ] Formularz: dane nadawcy/odbiorcy, telefon, adres PL/NO.
- [ ] Wybór strefy dostawy: E6 (pickup), Ålesund (pod dom), Vestnes (punkt).
- [ ] Potwierdzenie e-mail (PL/EN).

## Etap 5: Panel admin (D15–D18)
- [ ] Logowanie admina.
- [ ] Lista zamówień, statusy, notatki.
- [ ] Edycja cennika, eksport CSV.

## Etap 6: Allegro – MVP (D19–D21)
- [ ] Pole „Zakupy Allegro”: wagi/sztuki + alias mail do forwardu.
- [ ] Sumowanie wag → propozycja paczek 10/20/30 kg.

## Etap 7: Twardnienie i wdrożenie (D22–D25)
- [ ] Testy PL/EN, mobile/desktop, walidacje formularzy.
- [ ] Optymalizacja (images, bundle), monitoring (Sentry/Log).
- [ ] Deploy: staging (Vercel) → produkcja (po akceptacji).

## Etap 8: Dodatki (po MVP)
- [ ] Panel klienta (historia, statusy).
- [ ] Płatności online (opcjonalnie).
- [ ] Automaty SMS (opcjonalnie).

## Stałe założenia
- Trasa: Świdwin → Ålesund (E136 → E39), E6 pickup, Ålesund/Vestnes – ustalenia telefoniczne.
- Bezpieczeństwo: HTTPS, CSRF, rate limiting, hasła: argon2/bcrypt.
- Języki: PL/EN (i18n).
EOF
