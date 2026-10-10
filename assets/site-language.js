(() => {
  "use strict";
  const pairs = [
    ["Back to my portfolio ↗", "Zurück zum Portfolio ↗"],
    ["All concepts ↗", "Alle Konzepte ↗"],
    ["Michael Winkler · Software", "Michael Winkler · Software"],
    ["Selected business software concepts", "Ausgewählte Business-Software-Konzepte"],
    ["Software should make daily work easier.", "Software soll die tägliche Arbeit erleichtern."],
    ["I build mobile and cross-platform software around real workflows: keeping stock accurate, making field jobs easier to coordinate and giving teams a clearer view of invoices. These small interactive prototypes show how I approach the problem and the interface before connecting a production backend.", "Ich entwickle mobile und plattformübergreifende Software für konkrete Arbeitsabläufe: Bestände im Blick behalten, Außendiensteinsätze koordinieren und Rechnungen übersichtlich verwalten. Diese interaktiven Prototypen zeigen, wie ich Probleme und Benutzeroberflächen angehe, bevor ein Produktiv-Backend angebunden wird."],
    ["Three hands-on concepts · fictional sample data", "Drei interaktive Konzepte · fiktive Beispieldaten"],
    ["Explore the prototypes", "Prototypen ausprobieren"],
    ["Try the filters, forms and workflow actions.", "Filter, Formulare und Arbeitsabläufe testen."],
    ["01 / INVENTORY", "01 / INVENTAR"],
    ["Inventory management", "Inventarverwaltung"],
    ["I built this concept to make stock levels, low-stock items and warehouse locations easy to scan. You can add, edit or remove products, adjust quantities and export the current list.", "Ich habe dieses Konzept entwickelt, um Lagerbestände, niedrige Mengen und Lagerorte schnell erfassbar zu machen. Produkte lassen sich hinzufügen, bearbeiten und löschen, Mengen können angepasst und die Liste exportiert werden."],
    ["Stock levels", "Lagerbestände"],
    ["Low-stock flags", "Mindestbestand-Warnungen"],
    ["CSV export", "CSV-Export"],
    ["Open inventory demo", "Inventar-Demo öffnen"],
    ["02 / FIELD SERVICE", "02 / AUSSENDIENST"],
    ["Field service desk", "Außendienstverwaltung"],
    ["This prototype follows a work order from intake to completion. Create jobs, assign a technician, filter the board and change a job's status as work progresses.", "Dieser Prototyp begleitet einen Arbeitsauftrag vom Eingang bis zum Abschluss. Aufträge lassen sich erstellen, Technikern zuweisen, filtern und während der Bearbeitung im Status aktualisieren."],
    ["Work orders", "Arbeitsaufträge"],
    ["Technician assignment", "Technikerzuweisung"],
    ["Status workflow", "Statusablauf"],
    ["Open service demo", "Außendienst-Demo öffnen"],
    ["03 / FINANCE", "03 / FINANZEN"],
    ["Invoice workspace", "Rechnungsübersicht"],
    ["I designed this sample workspace around the questions a small team needs answered quickly: what is paid, what is due and which invoices need attention. Records can be added, edited, removed and exported.", "Ich habe diese Beispieloberfläche auf die Fragen ausgerichtet, die kleine Teams schnell beantworten müssen: Was ist bezahlt, was ist fällig und welche Rechnung braucht Aufmerksamkeit? Einträge lassen sich hinzufügen, bearbeiten, löschen und exportieren."],
    ["Invoice status", "Rechnungsstatus"],
    ["Due dates", "Fälligkeiten"],
    ["Open invoice demo", "Rechnungs-Demo öffnen"],
    ["What these demos are — and aren't:", "Was diese Demos sind – und was nicht:"],
    ["These are my portfolio prototypes, not deployed client systems. Names, records and amounts are fictional. Changes are stored only in your current browser on this device; there is no shared database or login. The invoice demo is not accounting software and does not generate legally compliant e-invoices. A real implementation would start with requirements, data access rules, backend persistence, validation, security and any relevant compliance checks.", "Das sind meine Portfolio-Prototypen, keine produktiv eingesetzten Kundensysteme. Namen, Datensätze und Beträge sind frei erfunden. Änderungen werden nur in diesem Browser auf diesem Gerät gespeichert; es gibt keine gemeinsame Datenbank und keine Anmeldung. Die Rechnungs-Demo ist keine Buchhaltungssoftware und erstellt keine rechtskonformen E-Rechnungen. Eine echte Umsetzung würde mit Anforderungen, Zugriffsregeln, dauerhafter Backend-Speicherung, Validierung, Sicherheit und relevanten Compliance-Prüfungen beginnen."],
    ["Michael Winkler · Mobile & business software", "Michael Winkler · Mobile- und Business-Software"],
    ["Talk through a project ↗", "Projekt besprechen ↗"],
    ["Business demos", "Business-Demos"],
    ["Operations / interactive prototype", "Betriebsabläufe / interaktiver Prototyp"],
    ["Inventory", "Inventar"],
    ["A straightforward view of stock, low quantities and warehouse locations.", "Ein klarer Überblick über Bestände, niedrige Mengen und Lagerorte."],
    ["Export CSV", "CSV exportieren"],
    ["＋ Add item", "＋ Artikel hinzufügen"],
    ["Products", "Produkte"],
    ["Total units", "Einheiten gesamt"],
    ["Low stock", "Niedriger Bestand"],
    ["Out of stock", "Nicht vorrätig"],
    ["Add product", "Produkt hinzufügen"],
    ["Edit product", "Produkt bearbeiten"],
    ["Product name", "Produktname"],
    ["e.g. Shipping cartons", "z. B. Versandkartons"],
    ["Warehouse / location", "Lager / Standort"],
    ["Warehouse A", "Lager A"],
    ["Quantity", "Menge"],
    ["Minimum stock", "Mindestbestand"],
    ["Save item", "Artikel speichern"],
    ["Cancel", "Abbrechen"],
    ["Search product, SKU or location…", "Produkt, SKU oder Standort suchen…"],
    ["Search inventory", "Inventar durchsuchen"],
    ["All stock states", "Alle Lagerzustände"],
    ["Low stock", "Niedriger Bestand"],
    ["In stock", "Auf Lager"],
    ["Reset demo", "Demo zurücksetzen"],
    ["Product", "Produkt"],
    ["SKU", "Artikelnummer"],
    ["Location", "Standort"],
    ["Status", "Status"],
    ["Actions", "Aktionen"],
    ["Edit", "Bearbeiten"],
    ["Delete", "Löschen"],
    ["No products match this search.", "Keine passenden Produkte gefunden."],
    ["Prototype only · Fictional sample data. Changes are saved in this browser on this device, not to a server.", "Nur ein Prototyp · Fiktive Beispieldaten. Änderungen werden in diesem Browser auf diesem Gerät gespeichert, nicht auf einem Server."],
    ["← Back to business software concepts", "← Zurück zu den Business-Software-Konzepten"],
    ["Decrease quantity", "Menge verringern"],
    ["Increase quantity", "Menge erhöhen"],
    ["That SKU already exists", "Diese Artikelnummer ist bereits vergeben."],
    ["Enter valid non-negative whole numbers", "Bitte gültige, nicht negative ganze Zahlen eingeben."],
    ["Stock quantity updated", "Bestandsmenge aktualisiert"],
    ["Product deleted", "Produkt gelöscht"],
    ["Product updated", "Produkt aktualisiert"],
    ["Product added", "Produkt hinzugefügt"],
    ["Delete ", "Löschen: "],
    ["Reset all changes and restore the sample inventory?", "Alle Änderungen verwerfen und die Beispieldaten wiederherstellen?"],
    ["Sample inventory restored", "Beispielbestand wiederhergestellt"],
    ["Service operations / interactive prototype", "Serviceabläufe / interaktiver Prototyp"],
    ["Field service", "Außendienst"],
    ["Keep work orders moving and make the next action clear for everyone.", "Arbeitsaufträge im Fluss halten und den nächsten Schritt für alle klar machen."],
    ["Reset demo", "Demo zurücksetzen"],
    ["＋ New work order", "＋ Neuer Arbeitsauftrag"],
    ["Open work orders", "Offene Aufträge"],
    ["In progress", "In Bearbeitung"],
    ["Completed", "Abgeschlossen"],
    ["New work order", "Neuer Arbeitsauftrag"],
    ["Edit work order", "Arbeitsauftrag bearbeiten"],
    ["Work order", "Arbeitsauftrag"],
    ["Inspect loading bay sensor", "Sensor an der Laderampe prüfen"],
    ["Customer / site", "Kunde / Standort"],
    ["Customer or site", "Kunde oder Standort"],
    ["Assigned technician", "Zugewiesener Techniker"],
    ["Normal", "Normal"],
    ["High", "Hoch"],
    ["Urgent", "Dringend"],
    ["New", "Neu"],
    ["Save work order", "Arbeitsauftrag speichern"],
    ["Search work orders or customers…", "Aufträge oder Kunden suchen…"],
    ["Search work orders", "Arbeitsaufträge suchen"],
    ["All technicians", "Alle Techniker"],
    ["All statuses", "Alle Status"],
    ["Fictional work orders. Changes are saved in this browser on this device, not to a server.", "Fiktive Arbeitsaufträge. Änderungen werden in diesem Browser auf diesem Gerät gespeichert, nicht auf einem Server."],
    ["No work orders here.", "Hier gibt es keine Arbeitsaufträge."],
    ["Move to", "Verschieben nach"],
    ["Delete work order ", "Arbeitsauftrag löschen: "],
    ["Work order deleted", "Arbeitsauftrag gelöscht"],
    ["Work order updated", "Arbeitsauftrag aktualisiert"],
    ["Work order created", "Arbeitsauftrag erstellt"],
    ["Restore the original sample work orders?", "Ursprüngliche Beispielaufträge wiederherstellen?"],
    ["Sample data restored", "Beispieldaten wiederhergestellt"],
    ["Finance operations / interactive prototype", "Finanzabläufe / interaktiver Prototyp"],
    ["See what's paid, what is due and which invoices need a follow-up.", "Sehen, was bezahlt und fällig ist und bei welchen Rechnungen nachgehakt werden muss."],
    ["＋ Add invoice", "＋ Rechnung hinzufügen"],
    ["Outstanding", "Offener Betrag"],
    ["Paid total", "Bezahlter Gesamtbetrag"],
    ["Overdue invoices", "Überfällige Rechnungen"],
    ["Invoices tracked", "Erfasste Rechnungen"],
    ["Add invoice", "Rechnung hinzufügen"],
    ["Edit invoice", "Rechnung bearbeiten"],
    ["Customer", "Kunde"],
    ["Customer name", "Kundenname"],
    ["Amount (€)", "Betrag (€)"],
    ["Due date", "Fällig am"],
    ["Draft", "Entwurf"],
    ["Due", "Fällig"],
    ["Paid", "Bezahlt"],
    ["Overdue", "Überfällig"],
    ["Save invoice", "Rechnung speichern"],
    ["Search invoice or customer…", "Rechnung oder Kunde suchen…"],
    ["Filter invoice status", "Rechnungsstatus filtern"],
    ["Invoice", "Rechnung"],
    ["Amount", "Betrag"],
    ["No invoices match this search.", "Keine passenden Rechnungen gefunden."],
    ["Change invoice status", "Rechnungsstatus ändern"],
    ["Prototype only · Fictional records. This is not accounting software and does not create legally compliant e-invoices or connect to payment systems. Changes are saved in this browser on this device, not to a server.", "Nur ein Prototyp · Fiktive Datensätze. Dies ist keine Buchhaltungssoftware, erstellt keine rechtskonformen E-Rechnungen und ist nicht mit Zahlungssystemen verbunden. Änderungen werden in diesem Browser auf diesem Gerät gespeichert, nicht auf einem Server."],
    ["Enter an amount greater than zero", "Bitte einen Betrag größer als null eingeben."],
    ["Complete all required fields", "Bitte alle Pflichtfelder ausfüllen."],
    ["Invoice deleted", "Rechnung gelöscht"],
    ["Invoice updated", "Rechnung aktualisiert"],
    ["Invoice added", "Rechnung hinzugefügt"],
    ["Restore the original sample invoices?", "Ursprüngliche Beispielrechnungen wiederherstellen?"],
    ["Sample data restored", "Beispieldaten wiederhergestellt"],
    ["Invoice", "Rechnung"],
    ["Language: German", "Sprache: Deutsch"],
    ["Language: English", "Sprache: Englisch"],
    ["Sprache wechseln", "Switch language"],
    ["Back to my portfolio ↗", "Zurück zum Portfolio ↗"],
    ["What these demos are — and aren't:", "Was diese Demos sind – und was nicht:"],
    ["Invoice workspace", "Rechnungsübersicht"],
    ["Field service desk", "Außendienstverwaltung"],
    ["Inventory management", "Inventarverwaltung"],
    ["Explore the prototypes", "Prototypen ausprobieren"],
    ["Software should make daily work easier.", "Software soll die tägliche Arbeit erleichtern."],
    ["Selected business software concepts", "Ausgewählte Business-Software-Konzepte"],
    ["Operations / interactive prototype", "Betriebsabläufe / interaktiver Prototyp"],
    ["← Back to business software concepts", "← Zurück zu den Business-Software-Konzepten"],
    ["Michael Winkler · GitHub profile · Portfolio", "Michael Winkler · GitHub-Profil · Portfolio"],
    ["Back to my portfolio ↗", "Zurück zum Portfolio ↗"],
    ["← Back to portfolio", "← Zurück zum Portfolio"],
    ["Feature structure in the source code", "Feature-Struktur im Quellcode"],
    ["README documenting status and feature scope", "README mit dokumentiertem Status und Funktionsumfang"],
    ["Additional evidence", "Weitere Nachweise"],
    ["Project graphic from the repository — not a UI screenshot", "Projektgrafik aus dem Repository – kein UI-Screenshot"],
    ["No dedicated screenshots of the running app interface were found in the reviewed file list. Therefore, icons are not presented here as if they were app screenshots.", "In der geprüften Dateiliste wurden keine dedizierten Screenshots der laufenden App-Oberfläche gefunden. Deshalb werden hier keine Icons als angebliche App-Screenshots dargestellt."],
    ["The repository contains app icons, logos and splash screen graphics.", "Das Repository enthält App-Icons, Logos und Splash-Screen-Grafiken."],
    ["Visual evidence", "Visuelle Nachweise"],
    ["I structured the source code by feature areas such as Auth, Servers, Favorites, Profile and Settings.", "Ich habe den Quellcode nach Funktionsbereichen wie Auth, Servers, Favorites, Profile und Settings strukturiert."],
    ["Structure", "Struktur"],
    ["I used Flutter and Dart for the app, along with Riverpod, Dio and Firebase integration in the project.", "Ich habe Flutter und Dart für die App sowie Riverpod, Dio und Firebase-Integration im Projekt eingesetzt."],
    ["I implemented a favourites feature for saving and managing servers.", "Ich habe eine Favoritenfunktion zum Speichern und Verwalten von Servern umgesetzt."],
    ["I integrated the official ASA server list as the data source.", "Ich habe die offizielle ASA-Serverliste als Datenquelle eingebunden."],
    ["Server data", "Serverdaten"],
    ["Verifiable project information", "Nachprüfbare Projektinformationen"],
    ["I developed ASA Server Eye through to its Google Play release. The released functionality described here covers the live server overview and favourites.", "Ich habe ASA Server Eye bis zur Veröffentlichung im Google Play Store entwickelt. Der veröffentlichte Funktionsumfang, auf den ich mich hier beziehe, umfasst die Live-Serverübersicht und Favoriten."],
    ["Released on Android", "Veröffentlicht auf Android"],
    ["Open on Google Play ↗", "Bei Google Play öffnen ↗"],
    ["I developed ASA Server Eye with Flutter and published it on Google Play for Android. The app helps ARK: Survival Ascended players review server information and manage favourites.", "Ich habe ASA Server Eye mit Flutter entwickelt und im Google Play Store für Android veröffentlicht. Die App hilft Spielern von ARK: Survival Ascended, Serverdaten zu überblicken und Favoriten zu verwalten."],
    ["Cross-platform · Flutter", "Cross-platform · Flutter"],
    ["Authentication", "Authentifizierung"],
    ["Settings", "Einstellungen"],
    ["Favourites", "Favoriten"],
    ["Price chart", "Preisdiagramm"],
    ["Coin details", "Coin-Details"],
    ["Market overview", "Marktübersicht"],
    ["Actual screenshots from the CryptoTracker repository", "Echte Screenshots aus dem CryptoTracker-Repository"],
    ["I have not released this project. The screenshots show the development state, not an app available on the App Store.", "Ich habe dieses Projekt nicht veröffentlicht. Die Screenshots zeigen den Entwicklungsstand und keine im App Store verfügbare App."],
    ["I used Swift, SwiftUI, Swift Charts, URLSession, Firebase and SwiftData, structuring the interface around MVVM.", "Ich habe dafür Swift, SwiftUI, Swift Charts, URLSession, Firebase und SwiftData eingesetzt und die Oberfläche nach dem MVVM-Ansatz strukturiert."],
    ["I included a cryptocurrency news section based on an RSS feed, as well as dark mode and pull-to-refresh.", "Ich habe einen Bereich für Krypto-News aus einem RSS-Feed sowie Dark Mode und Pull-to-Refresh vorgesehen."],
    ["News & settings", "News & Einstellungen"],
    ["This does not guarantee that all features are available without an internet connection.", "Das garantiert nicht, dass alle Funktionen ohne Internetzugang verfügbar sind."],
    ["I use SwiftData to cache market and chart data locally.", "Ich nutze SwiftData, um Markt- und Chartdaten lokal zwischenzuspeichern."],
    ["Local cache", "Lokaler Cache"],
    ["I integrated Firebase Authentication and user-specific favourites in Cloud Firestore.", "Ich habe Firebase Authentication und nutzerbezogene Favoriten in Cloud Firestore integriert."],
    ["Favourites & sign-in", "Favoriten & Anmeldung"],
    ["I visualized historical price movements with Swift Charts.", "Ich habe historische Preisverläufe mit Swift Charts visualisiert."],
    ["Price history", "Preisverläufe"],
    ["I integrated CoinGecko for prices, market capitalization and 24-hour data, with display options for USD, EUR and GBP.", "Ich habe CoinGecko für Preise, Marktkapitalisierung und 24-Stunden-Daten angebunden und die Darstellung in USD, EUR und GBP vorgesehen."],
    ["Market data", "Marktdaten"],
    ["README / technical details ↗", "README / technische Details ↗"],
    ["I developed CryptoTracker as a native iOS project for cryptocurrency market data and historical price charts. The project has not been released and is not available on the App Store.", "Ich habe CryptoTracker als natives iOS-Projekt für Kryptomarktdaten und historische Preisverläufe entwickelt. Das Projekt wurde nicht veröffentlicht und ist nicht im App Store verfügbar."],
    ["iOS · Swift · SwiftUI", "iOS · Swift · SwiftUI"],
    ["GitHub profile", "GitHub-Profil"],
    ["GitHub release v1.0.0 with the APK files published there.", "GitHub-Release v1.0.0 mit den dort veröffentlichten APK-Dateien."],
    ["UI screens in the source code", "UI-Screens im Quellcode"],
    ["Gradle configuration for dependencies and the Android build.", "Gradle-Konfiguration für Abhängigkeiten und Android-Build."],
    ["Technical evidence", "Technische Nachweise"],
    ["Repository screenshot: screen4.png", "Repository-Screenshot: screen4.png"],
    ["Repository screenshot: screen3.png", "Repository-Screenshot: screen3.png"],
    ["Repository screenshot: screen2.png", "Repository-Screenshot: screen2.png"],
    ["Repository screenshot: screen1.png", "Repository-Screenshot: screen1.png"],
    ["Actual screenshots from the GameRadar repository", "Echte Screenshots aus dem GameRadar-Repository"],
    ["I store favourites and selected detail data locally. Online search through the external data source is therefore not fully available offline.", "Ich speichere Favoriten und bestimmte Detaildaten lokal. Die Online-Suche über die externe Datenquelle ist dadurch nicht vollständig offline verfügbar."],
    ["I use Kotlin, Jetpack Compose, Room, Retrofit and Koin; the app follows MVVM/MVI principles.", "Dafür verwende ich Kotlin, Jetpack Compose, Room, Retrofit und Koin; die App orientiert sich an MVVM/MVI."],
    ["I added a statistics section for the personal game collection.", "Ich habe einen Statistikbereich für die persönliche Spielesammlung ergänzt."],
    ["Statistics", "Statistiken"],
    ["I added JSON import and export for favourites and the wishlist.", "Ich habe Import und Export von Favoriten und Wunschliste über JSON ergänzt."],
    ["Export and import", "Export und Import"],
    ["I developed game detail views with metadata and components for screenshot and trailer galleries.", "Ich habe Detailansichten für Spiele mit Metadaten sowie Komponenten für Screenshot- und Trailer-Galerien entwickelt."],
    ["Detail views", "Detailansichten"],
    ["I implemented favourites and a wishlist with local storage using Room.", "Ich habe Favoriten und Wunschliste mit lokaler Speicherung über Room umgesetzt."],
    ["Personal lists", "Persönliche Listen"],
    ["I integrated the RAWG API and implemented filters for platform, genre, rating and release date.", "Ich habe die RAWG-API angebunden und Filter für Plattform, Genre, Bewertung und Veröffentlichungsdatum umgesetzt."],
    ["Game search", "Spielesuche"],
    ["What I implemented", "Was ich umgesetzt habe"],
    ["GitHub APK ↗", "GitHub-APK ↗"],
    ["GameRadar pitch deck ↗", "GameRadar-Pitchdeck ↗"],
    ["I developed GameRadar as a native Android app for searching, filtering and organizing video games in personal lists. I provide an APK through a GitHub release; the app is not published on Google Play.", "Ich habe GameRadar als native Android-App entwickelt, mit der sich Videospiele suchen, filtern und in persönlichen Listen organisieren lassen. Eine APK stelle ich als GitHub-Release bereit; eine Veröffentlichung im Google Play Store gibt es nicht."]
  ];
  const enToDe = new Map(pairs);
  const deToEn = new Map(pairs.map(([en, de]) => [de, en]));
  const storageKey = "portfolio-language";
  const readLanguage = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "de" || saved === "en") return saved;
    } catch (_) {}
    return /^de(?:-|$)/i.test(navigator.language || "") ? "de" : "en";
  };
  let language = readLanguage();
  const originalValues = new WeakMap();

  function translated(value) {
    const text = value.trim();
    if (!text) return value;
    const map = language === "de" ? enToDe : deToEn;
    const replacement = map.get(text);
    if (replacement === undefined) return value;
    return value.replace(text, replacement);
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.parentElement && !node.parentElement.closest("script,style,code,pre,[data-no-translate]")) {
        const next = translated(node.nodeValue);
        if (next !== node.nodeValue) node.nodeValue = next;
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node;
    if (el.matches("script,style,code,pre,[data-no-translate]")) return;
    if (el.tagName === "OPTION") {
      if (!originalValues.has(el)) originalValues.set(el, el.value);
      const original = originalValues.get(el);
      const next = translated(el.textContent);
      if (next !== el.textContent) el.textContent = next;
      el.value = original;
    }
    for (const attr of ["placeholder", "aria-label", "title", "alt"]) {
      if (el.hasAttribute(attr)) {
        const old = el.getAttribute(attr);
        const next = translated(old);
        if (next !== old) el.setAttribute(attr, next);
      }
    }
    for (const child of el.childNodes) translateNode(child);
  }

  function updateSwitcher() {
    let button = document.getElementById("siteLanguageToggle");
    if (!button) {
      const nav = document.querySelector(".nav, .site-header .nav-wrap");
      if (!nav) return;
      button = document.createElement("button");
      button.id = "siteLanguageToggle";
      button.type = "button";
      button.className = "site-language-toggle";
      button.style.cssText = "border:1px solid var(--line,#d9e0d7);background:var(--surface,#fff);color:var(--ink,#202820);border-radius:9px;padding:8px 10px;font:inherit;font-size:.82rem;font-weight:750;white-space:nowrap;cursor:pointer;flex-shrink:0";
      button.addEventListener("click", () => {
        language = language === "de" ? "en" : "de";
        try { localStorage.setItem(storageKey, language); } catch (_) {}
        applyLanguage();
      });
      const lastLink = nav.querySelector("a:last-child");
      if (lastLink) nav.insertBefore(button, lastLink);
      else nav.appendChild(button);
    }
    button.textContent = language === "de" ? "DE / EN" : "EN / DE";
    button.setAttribute("aria-label", language === "de" ? "Switch language to English" : "Sprache auf Deutsch umstellen");
    button.setAttribute("title", language === "de" ? "Sprache: Deutsch" : "Language: English");
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    try { localStorage.setItem(storageKey, language); } catch (_) {}
    if (document.title) document.title = translated(document.title);
    translateNode(document.body);
    updateSwitcher();
  }

  applyLanguage();
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") translateNode(mutation.target);
      for (const node of mutation.addedNodes || []) translateNode(node);
    }
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
})();