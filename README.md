# Notebook for fun

https://github.com/PiotrRynio/notebook-for-fun

Tworze ten projekt w celach szkoleniowych oraz dla własnej zabawy. Podstawą projektu jest mini kurs na youtube. Podczas
tworzenia projektu dodaję w nim własne rozszerzenia oraz robię pewne rzeczy inaczej, aby rozwinąć swoje umiejętności
oraz poznać nową wiedzę. **(Uwaga: pliki CSS zaciągnąłem w całości od autora projektu).**

## Start:

W głównym katalogu wpisujemy: `npm install`, a następnie uruchamiamy projekt przez wpisanie `npm run start-be`
oraz `npm run start-fe`.

---

## Co dodałem od siebie:

- **husky + prettier** - wykorzystuję je tutaj, aby automatycznie formatować kod podczas wykonywania commita. Dzieje się
  to przez pre-commit, czyli akcję wykonywaną automatycznie przed zacommitowaniem. Pozwala to uniknąć konfliktów na
  repozytorium, szczególnie gdy nad jednym projektem pracuje większa liczba programistów. Dodatkowo zmodyfikowałem tutaj
  standardowe ustawienia "husky" w taki sposób, aby dwie części projektu (Frontend i Backend) miały niezależne
  ustawienia prettiera). Dzięki powyższym zmianom lepiej zrozumiałem NPM i rozwiązałem problem, który nie był opisany w
  internecie. Z pewnością zastosuję nabytą wiedzę w innych projektach.

- **nodemon** - znacznie wspomaga pracę programistyczną na BE. Pozwala na niewpisywanie za każdym razem
  komendy `$ node index.js`. Instrukcja jest wywoływana każdorazowo po zapisaniu edytowanych plików.

- **clean code** - część kodu pisałem z zasadami pisania "Czystego Kodu". Wykorzystywałem między innymi funkcje
  mapujące, funkcje strzałkowe czy sposoby na krótsze pisanie funkcji. Używałem również komponentów funkcyjnych.

---

Pozdrawiam <br/>
**Piotr Rynio**
