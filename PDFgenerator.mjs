import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import fontkit from '@pdf-lib/fontkit'
import fetchDataFromUserAPI from './getApiGetUserData.js';
async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  //const fontBytes = await fetch('times-new-roman.ttf').then((res) => res.arrayBuffer());
//const customFont = await pdfDoc.embedFont(fontBytes);

const emailUser = "s022222@student.tu.kielce.pl";
fetchDataFromUserAPI('s022222@student.tu.kielce.pl',`http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/user/${emailUser}`)







const fontPath = 'times-new-roman.ttf'; // Podaj pełną ścieżkę do pliku fontu
  const currentFilePath = fileURLToPath(import.meta.url);
  const fontBytes = await fs.readFile(path.resolve(path.dirname(currentFilePath), fontPath));
  pdfDoc.registerFontkit(fontkit);
  
  const customFont = await pdfDoc.embedFont(fontBytes);
 
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;
  
//variables into pdf 
  const index_nr="";
  const secondname="";
  const faculty="";






  const text = `
 \t\t\t Załącznik nr 1 do Zarządzenia Nr 54/19
\t\t\t Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r.
Umowa
o organizację praktyki studenta Politechniki Świętokrzyskiej
zawarta w dniu ........................................ r. pomiędzy:
Politechniką Świętokrzyską al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce,
zwaną dalej Uczelnią, reprezentowaną na podstawie udzielonego przez Rektora Uczelni
pełnomocnictwa, przez Dziekana Wydziału ………………………………….
……….………………………………………………………………………………………… ,
a
………………………………..……. z siedzibą w ……………. ul. ………………………….,
o nr KRS ………….…, NIP ……………………, Regon ……………………, zwanym dalej
Zakładem lub Zakładem Pracy, reprezentowanym przez ……………………………………
………………………………………………………………………………………………….
§ 1. Uczelnia kieruje studenta ${name},
nr albumu ${index_nr} do Zakładu w celu odbycia przez niego praktyki studenckiej
w okresie od ……………… do ….………………
§ 2. Zakład zobowiązuje się do:
1) zapewnienia odpowiednich stanowisk pracy, pomieszczeń, warsztatów, urządzeń, narzędzi
i materiałów zgodnie z programem praktyki stanowiącym załącznik nr 1 do niniejszej
umowy;
2) zapoznania studenta z zakładowym regulaminem pracy, przepisami o bezpieczeństwie
i higienie pracy oraz o ochronie danych/tajemnicy przedsiębiorstwa itp. obowiązujących
w Zakładzie;
3) nadzoru nad wykonaniem przez studenta zadań wynikających z programu praktyki.
§ 3. Uczelnia zobowiązuje się do sprawowania kierownictwa dydaktycznego nad praktyką
studencką oraz jej kontroli i oceny, zgodnie z programem praktyk.
§ 4. W przypadku gdy Zakład zdecyduje o możliwości przyznania studentowi wynagrodzenia
z tytułu pracy wykonywanej w trakcie odbywania praktyki, stosowna umowa zawierana jest
pomiędzy Zakładem a studentem, bez udziału i pośrednictwa Uczelni.
Strona 2 z 2
§ 5. 1. Strony wyznaczają osoby właściwe do kontaktu w bieżących sprawach:
1) z ramienia Zakładu Pracy …………………………………………………………………
tel.: …………………………………………………………………
e-mail: …………………………………………………………………
2) z ramienia Uczelni: …………………………………………………………………
tel.: …………………………………………………………………
e-mail: …………………………………………………………………
2. Klauzula informacyjna dotycząca przetwarzania przez Uczelnię danych osobowych
pozyskanych z Zakładu stanowi załącznik nr 2 do niniejszej umowy. Zakład zobowiązuje się
do udostępnienia załącznika osobom, których dane przekazano na podstawie niniejszej
umowy.
§ 6. Umowa niniejsza została sporządzona w dwóch jednobrzmiących egzemplarzach po
jednym dla każdej ze Stron.
§ 7. Ewentualne spory mogące wyniknąć na tle stosowania niniejszej umowy będą
rozstrzygane na zasadzie mediacji przez wytypowanych przez każdą ze Stron mediatorów.
§ 8. Umowa została zawarta na czas odbywania przez studenta praktyki określony w § 1.
W imieniu Zakładu:
……………………………………………….
Podpis i pieczęć
W imieniu Politechniki Świętokrzyskiej:
………………………………………………
  
  
  `;

  page.drawText(text, {
    x: 50,
    y: height - 4 * fontSize,
    size: 11,
    font: customFont,
    color: rgb(0,0,0),

  });

  const pdfBytes = await pdfDoc.save();

  // Zapisz plik PDF na dysku
  await fs.writeFile('plik.pdf', Buffer.from(pdfBytes));
}

// Wywołaj funkcję do utworzenia i zapisania pliku PDF
createPdf().catch(error => console.error(error));
