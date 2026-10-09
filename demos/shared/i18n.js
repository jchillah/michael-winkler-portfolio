(() => {
  const phrases = {
    "Business Software Concepts":"Business-Software-Konzepte","Business software concepts":"Business-Software-Konzepte",
    "Your business.":"Dein Unternehmen.","Smarter software.":"Intelligentere Software.","Your business. Smarter software.":"Dein Unternehmen. Intelligentere Software.",
    "Business software · Concept lab":"Businesssoftware · Konzeptlabor","Business software / Demo data":"Businesssoftware / Beispieldaten",
    "Practical software concepts for teams that need fewer spreadsheets, clearer processes and reliable information. Explore the interactive demos below, built with sample data to illustrate possible workflows.":"Praktische Softwarekonzepte für Teams, die weniger Tabellen, klarere Prozesse und zuverlässige Informationen benötigen. Entdecke die interaktiven Demos mit Beispieldaten.",
    "Interactive software concept demos":"Interaktive Softwarekonzepte","Real-time Inventory":"Echtzeit-Inventar","Field Service Desk":"Service- und Auftragsverwaltung","Invoice Workspace":"Rechnungsübersicht",
    "Track stock levels, spot low inventory, search products and adjust quantities from a simple operations dashboard.":"Bestände prüfen, Engpässe erkennen, Produkte suchen und Mengen in einer übersichtlichen Verwaltung anpassen.",
    "Coordinate work orders, assign technicians and move jobs through a transparent service workflow.":"Arbeitsaufträge koordinieren, Mitarbeitende zuweisen und Aufgaben transparent durch den Serviceprozess führen.",
    "Review invoice status, track due dates and create sample records in a compact finance workspace.":"Rechnungsstatus und Fälligkeiten prüfen und Beispieldatensätze in einer kompakten Finanzübersicht anlegen.",
    "Inventory":"Lagerbestand","Stock alerts":"Bestandswarnungen","Operations":"Betrieb","Work orders":"Arbeitsaufträge","Scheduling":"Planung","Mobile workflows":"Mobile Abläufe","Invoices":"Rechnungen","Document flow":"Dokumentenablauf","SME tools":"KMU-Werkzeuge",
    "Explore inventory demo ↗":"Lagerdemo öffnen ↗","Explore service demo ↗":"Servicedemo öffnen ↗","Explore invoice demo ↗":"Rechnungsdemo öffnen ↗","All business software concepts":"Alle Business-Software-Konzepte",
    "Prototype transparency:":"Transparenz zum Prototyp:","These are portfolio concepts, not production systems or paid client deployments. All names, amounts and records are fictional sample data. No backend, payment processing or legally compliant e-invoice generation is connected. Production implementations require requirements discovery, security review, persistence, access control and appropriate compliance validation.":"Dies sind Portfolio-Prototypen, keine Produktivsysteme oder bezahlten Kundenprojekte. Namen, Beträge und Datensätze sind fiktiv. Es gibt kein Backend, keine Zahlungsabwicklung und keine rechtskonforme E-Rechnungserstellung. Produktive Lösungen benötigen Anforderungsanalyse, Sicherheitsprüfung, persistente Speicherung, Zugriffsrechte und Compliance-Prüfung.",
    "Discuss a project ↗":"Projekt besprechen ↗","Developer portfolio ↗":"Entwicklerportfolio ↗","Custom mobile & business software":"Individuelle Mobile- und Unternehmenssoftware",
    "Stockroom":"Lagerverwaltung","Field Service":"Außendienst","Desk":"Verwaltung","Ledger":"Rechnungsbuch","Workspace":"Arbeitsbereich","Export CSV ↓":"CSV exportieren ↓","Thermal labels":"Thermoetiketten","Shipping cartons M":"Versandkartons M","Barcode scanner":"Barcode-Scanner","USB-C adapter":"USB-C-Adapter","Packing tape":"Packband","Handheld terminal":"Handheld-Terminal","Warehouse A":"Lager A","Warehouse B":"Lager B","Service desk":"Serviceplatz","Inventory":"Bestand","DEMO · Sample data":"DEMO · Beispieldaten","See what is available, what needs attention and what changed.":"Sieh, was verfügbar ist, was Aufmerksamkeit braucht und was sich geändert hat.",
    "Tracked SKUs":"Verfolgte Artikel","Units in stock":"Einheiten auf Lager","Low-stock items":"Artikel mit niedrigem Bestand","Out of stock":"Ausverkauft","Northwind Workshop":"Werkstatt Nordwind","Brightside Retail":"Einzelhandel Sonnenseite","Riverside Logistics":"Logistik Riverside","Greenline Services":"Greenline Dienstleistungen","Stockroom — Inventory Concept Demo":"Lagerverwaltung — Bestandsdemo","Service Desk — Work Order Concept Demo":"Serviceverwaltung — Auftragsdemo","Ledger — Invoice Workspace Concept Demo":"Rechnungsübersicht — Konzeptdemo","Search product or SKU…":"Produkt oder Artikelnummer suchen…","All stock states":"Alle Bestandsstatus","Low stock":"Niedriger Bestand","In stock":"Auf Lager","Reset sample data":"Beispieldaten zurücksetzen","Product":"Produkt","SKU":"Artikelnummer","Location":"Lagerort","Stock":"Bestand","Status":"Status","No matching items.":"Keine passenden Artikel gefunden.","Sample data only · Changes stay in this browser session and are not saved to a server.":"Nur Beispieldaten · Änderungen bleiben in dieser Browsersitzung und werden nicht auf einem Server gespeichert.",
    "Decrease ":"Verringern: ","Increase ":"Erhöhen: ","In stock":"Auf Lager","Low stock":"Niedriger Bestand","Stock updated":"Bestand aktualisiert","Sample data reset":"Beispieldaten zurückgesetzt","Preparing CSV export":"CSV-Export wird vorbereitet",
    "Service operations / Demo data":"Serviceverwaltung / Beispieldaten","Keep every work order visible from intake to completion.":"Behalte jeden Arbeitsauftrag vom Eingang bis zum Abschluss im Blick.",
    "Open work orders":"Offene Aufträge","In progress":"In Bearbeitung","Completed work orders":"Abgeschlossene Aufträge","New work order":"Neuer Arbeitsauftrag","Work order title":"Titel des Arbeitsauftrags","Customer / site":"Kunde / Standort","Technician":"Zuständig","Priority":"Priorität","Normal":"Normal","High":"Hoch","Urgent":"Dringend","Create work order":"Arbeitsauftrag erstellen","Search work orders…":"Arbeitsaufträge suchen…","All technicians":"Alle Zuständigen","Reset sample data":"Beispieldaten zurücksetzen","New":"Neu","Completed":"Abgeschlossen","Start work":"Arbeit beginnen","Mark completed":"Als abgeschlossen markieren","Reopen work order":"Arbeitsauftrag wieder öffnen","No matching work orders.":"Keine passenden Arbeitsaufträge gefunden.","Fictional records for demonstration only. Updates are held in page memory and are not sent to a server.":"Nur fiktive Beispieldaten. Änderungen bleiben im Seitenspeicher und werden nicht an einen Server übertragen.",
    "Work order created":"Arbeitsauftrag erstellt","High priority":"Hohe Priorität","Normal priority":"Normale Priorität","Urgent priority":"Dringende Priorität","Inspect loading bay sensor":"Laderampensensor prüfen","Replace handheld scanner":"Handscanner ersetzen","Quarterly equipment check":"Vierteljährliche Geräteprüfung","Repair cold-room monitor":"Kühlraummonitor reparieren","Install network access point":"Netzwerkzugangspunkt installieren","Northside Distribution":"Nordlager Logistik","West End Retail":"Einzelhandel West","Riverside Workshop":"Werkstatt am Fluss","Market Hall":"Markthalle","Office Park 2":"Büropark 2","moved to":"geändert zu","Work order status updated":"Status des Arbeitsauftrags aktualisiert","Sample data reset":"Beispieldaten zurückgesetzt",
    "Finance operations / Demo data":"Finanzverwaltung / Beispieldaten","A clear view of invoice status, amounts and due dates.":"Eine klare Übersicht über Rechnungsstatus, Beträge und Fälligkeiten.",
    "Outstanding amount":"Offener Betrag","Total paid":"Insgesamt bezahlt","Overdue invoices":"Überfällige Rechnungen","Invoices tracked":"Verfolgte Rechnungen","Create invoice":"Rechnung erfassen","Customer name":"Kundenname","Amount (€)":"Betrag (€)","Due date":"Fälligkeitsdatum","Invoice status":"Rechnungsstatus","Add sample invoice":"Beispielrechnung hinzufügen","Search invoice or customer…":"Rechnung oder Kunde suchen…","All statuses":"Alle Status","Draft":"Entwurf","Due":"Offen","Paid":"Bezahlt","Overdue":"Überfällig","Invoice":"Rechnung","Customer":"Kunde","Amount":"Betrag","Action":"Aktion","Mark due":"Als offen markieren","Mark paid":"Als bezahlt markieren","No matching invoices.":"Keine passenden Rechnungen gefunden.",
    "Concept prototype only. It does not generate or transmit legally compliant e-invoices and is not connected to accounting, tax or payment systems.":"Nur ein Konzeptprototyp. Er erstellt oder übermittelt keine rechtskonformen E-Rechnungen und ist nicht mit Buchhaltung, Steuer- oder Zahlungssystemen verbunden.",
    "Invoice added":"Rechnung hinzugefügt","marked paid":"als bezahlt markiert","marked due":"als offen markiert","Enter a valid amount greater than zero":"Gib einen gültigen Betrag größer als null ein","Sample invoice added":"Beispielrechnung hinzugefügt",
    "Language":"Sprache","Choose language":"Sprache auswählen","German":"Deutsch","English":"Englisch","Back to all business software concepts":"Zurück zu allen Business-Software-Konzepten",
    "All business software demos":"Alle Business-Software-Demos","Explore interactive prototypes for inventory, field service and invoice workflows. Each demo uses fictional sample data.":"Entdecke interaktive Prototypen für Lager, Service und Rechnungsabläufe. Alle Demos verwenden fiktive Beispieldaten.",
    "Mobile App Developer":"Cross-Platform Software Developer","Mobile platforms":"Plattformen","I build":"Ich entwickle","Mobile Apps":"Cross-Platform-Software","with clear architecture and real product focus.":"mit klarer Architektur und echtem Produktfokus.",
    "Flutter · Kotlin / Jetpack Compose · Swift / SwiftUI. From idea and APIs to cloud backends and release-ready apps.":"Flutter · Kotlin / Jetpack Compose · Swift / SwiftUI. Von der Idee über APIs und Cloud-Backends bis zu releasefähigen Anwendungen für Web, Mobile und Desktop.",
    "Cross-platform apps with feature-first structure, Riverpod/Provider, Firebase, Supabase and REST APIs.":"Cross-Platform-Apps mit Feature-first-Struktur, Riverpod/Provider, Firebase, Supabase und REST-APIs.",
    "My focus is mobile development across Flutter, Android and iOS.":"Mein Schwerpunkt ist plattformübergreifende Entwicklung für Mobile, Web und Desktop."
  };
  const reverse = Object.fromEntries(Object.entries(phrases).map(([en,de]) => [de,en]));
  let language = "de";
  try { const saved = localStorage.getItem("business-demo-language"); language = saved === "de" || saved === "en" ? saved : (navigator.language?.toLowerCase().startsWith("de") ? "de" : "en"); } catch (_) { language = navigator.language?.toLowerCase().startsWith("de") ? "de" : "en"; }
  function translateTextNode(node) {
    if (!node || !node.nodeValue || !node.parentElement) return;
    if (node.parentElement.closest("script,style,noscript,code,pre")) return;
    const original=node.nodeValue, trimmed=original.trim();
    if (!trimmed) return;
    const translated = language === "de" ? phrases[trimmed] : reverse[trimmed];
    if (translated) node.nodeValue=original.replace(trimmed,translated);
  }
  function translateTree(root=document.body) {
    if (!root) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateTextNode);
    root.querySelectorAll?.("[placeholder],[aria-label],[title]").forEach(el=>{
      for (const attr of ["placeholder","aria-label","title"]) {
        const val=el.getAttribute(attr); if(!val) continue;
        const next=language==="de" ? phrases[val] : reverse[val];
        if(next) el.setAttribute(attr,next);
      }
    });
    root.querySelectorAll?.("[data-language-switch]").forEach(el=>{el.value=language;el.setAttribute("aria-label",language==="de"?"Sprache auswählen":"Choose language");});
    document.documentElement.lang=language;
    const title=document.querySelector("title"); if(title){const next=language==="de"?phrases[title.textContent.trim()]:reverse[title.textContent.trim()];if(next)title.textContent=next;}
  }
  function apply(next) {
    language=next==="en"?"en":"de";
    try{localStorage.setItem("business-demo-language",language);}catch(_){}
    translateTree();
    document.dispatchEvent(new CustomEvent("business-language-change",{detail:{language}}));
  }
  window.businessI18n={apply,get language(){return language;},t(key){return language==="de"?(phrases[key]||key):(reverse[key]||key);},formatDate(value){return new Intl.DateTimeFormat(language==="de"?"de-DE":"en-GB").format(new Date(value+"T12:00:00"));},formatMoney(value){return new Intl.NumberFormat(language==="de"?"de-DE":"en-IE",{style:"currency",currency:"EUR"}).format(value);}};
  document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("[data-language-switch]").forEach(el=>{el.value=language;el.addEventListener("change",()=>apply(el.value));});
    translateTree();
    const observer=new MutationObserver(records=>records.forEach(record=>{record.addedNodes.forEach(node=>{if(node.nodeType===Node.TEXT_NODE)translateTextNode(node);else if(node.nodeType===Node.ELEMENT_NODE)translateTree(node);});}));
    observer.observe(document.body,{subtree:true,childList:true});
  });
})();