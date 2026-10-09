(() => {
  const dictionaries = {
    de: {
      languageLabel:"Sprache auswählen", languageGerman:"Deutsch", languageEnglish:"Englisch",
      portfolio:"Zum Entwicklerportfolio", showcase:"Business Software", eyebrow:"DIGITALE PROZESSE · INTERAKTIVE DEMOS",
      heroTitle:"Weniger Reibung. Bessere Abläufe.", heroText:"Entdecke, wie maßgeschneiderte Software Bestände, Serviceaufträge und Rechnungsabläufe übersichtlicher machen kann. Die Demos sind bewusst ohne Anmeldung nutzbar.",
      crossPlatform:"Cross-Platform-Entwicklung", platformsText:"Lösungen für Web, iOS, Android, Windows, macOS und Linux – abhängig von den Anforderungen und den passenden Technologien.",
      inventoryTitle:"Lager & Bestand", inventoryText:"Bestände prüfen, Engpässe erkennen und Artikelbewegungen nachvollziehen.", inventoryLink:"Lagerdemo öffnen",
      serviceTitle:"Service & Aufträge", serviceText:"Aufträge erfassen, Zuständigkeiten zuweisen und Arbeitsschritte transparent verfolgen.", serviceLink:"Service-Demo öffnen",
      invoiceTitle:"Rechnungen & Belege", invoiceText:"Rechnungsstatus, Fälligkeiten und Beträge an einem Ort im Blick behalten.", invoiceLink:"Rechnungsdemo öffnen",
      prototype:"Prototyp mit Beispieldaten", transparency:"Hinweis zur Demo", transparencyText:"Diese interaktiven Prototypen arbeiten ausschließlich mit fiktiven Beispieldaten im Browser. Sie sind keine produktiven Kundensysteme, speichern keine Daten auf einem Server und erstellen keine rechtskonformen E-Rechnungen. Produktive Lösungen benötigen unter anderem sichere Anmeldung, Rollen- und Rechteverwaltung, persistente Speicherung, Tests, Backups und eine fachliche Compliance-Prüfung.",
      contact:"Projekt besprechen", contactText:"Du hast einen Prozess, der zu viele Tabellen, manuelle Schritte oder doppelte Dateneingaben benötigt?", contactLink:"Projektidee per E-Mail senden",
      backToShowcase:"Zur Übersicht", demoData:"DEMO · FIKTIVE DATEN", reset:"Beispieldaten zurücksetzen", export:"CSV exportieren", search:"Suchen…", noResults:"Keine passenden Einträge gefunden.",
      stockTitle:"Lagerbestand", stockSubtitle:"Ein klarer Überblick über Artikel, Mengen und Nachbestellbedarf.", products:"Artikel", units:"Einheiten auf Lager", lowStock:"Niedriger Bestand", outOfStock:"Ausverkauft", product:"Artikel", sku:"Artikelnummer", location:"Lagerort", quantity:"Menge", status:"Status", allStatuses:"Alle Status", inStock:"Auf Lager", low:"Nachbestellen", out:"Ausverkauft", decrease:"Menge verringern", increase:"Menge erhöhen", quantityUpdated:"Bestand aktualisiert.", resetDone:"Beispieldaten zurückgesetzt.", csvReady:"CSV-Export wird vorbereitet.", stockSearch:"Artikel, Nummer oder Lagerort suchen…", minStock:"Mindestbestand",
      serviceSubtitle:"Vom Eingang bis zum Abschluss – alle Aufgaben auf einen Blick.", openOrders:"Offene Aufträge", inProgress:"In Bearbeitung", completed:"Abgeschlossen", newOrder:"Neuer Auftrag", createOrder:"Auftrag anlegen", orderTitle:"Auftrag", customer:"Kunde / Standort", technician:"Zuständige Person", priority:"Priorität", normal:"Normal", high:"Hoch", urgent:"Dringend", allTechnicians:"Alle Zuständigen", allOrders:"Alle Aufträge", newStatus:"Neu", progressStatus:"In Bearbeitung", doneStatus:"Abgeschlossen", startWork:"Arbeit beginnen", markComplete:"Als abgeschlossen markieren", reopen:"Wieder öffnen", orderCreated:"Auftrag angelegt.", orderMoved:"Auftragsstatus aktualisiert.", invalidOrder:"Bitte Auftrag und Kunden/Standort angeben.", orderSearch:"Auftrag, Kunde oder Nummer suchen…", resetOrders:"Aufträge zurückgesetzt.",
      invoiceSubtitle:"Fälligkeiten und Zahlungsstatus übersichtlich verwalten.", outstanding:"Offener Betrag", paidTotal:"Bezahlt gesamt", overdueCount:"Überfällige Rechnungen", invoiceCount:"Rechnungen", createInvoice:"Rechnung erfassen", addInvoice:"Beispielrechnung hinzufügen", invoiceNo:"Rechnungsnummer", dueDate:"Fällig am", amount:"Betrag", invoiceStatus:"Zahlungsstatus", allInvoiceStatuses:"Alle Status", draft:"Entwurf", due:"Offen", paid:"Bezahlt", overdue:"Überfällig", markPaid:"Als bezahlt markieren", markDue:"Als offen markieren", invoiceCreated:"Beispielrechnung angelegt.", invalidAmount:"Bitte einen gültigen Betrag größer als null eingeben.", invalidInvoice:"Bitte Kundennamen und Fälligkeitsdatum eingeben.", invoiceSearch:"Rechnungsnummer oder Kunde suchen…", resetInvoices:"Rechnungen zurückgesetzt.", dueDateHelp:"Fälligkeitsdatum", invoiceDisclaimer:"Nur Demonstration: Keine Buchhaltung, Zahlung, Steuerberechnung oder rechtskonforme E-Rechnungserstellung angebunden.",
      empty:"Keine Einträge vorhanden.", sampleOnly:"Nur Beispieldaten", languageChanged:"Sprache geändert"
    },
    en: {
      languageLabel:"Choose language", languageGerman:"German", languageEnglish:"English",
      portfolio:"Developer portfolio", showcase:"Business software", eyebrow:"DIGITAL WORKFLOWS · INTERACTIVE DEMOS",
      heroTitle:"Less friction. Better workflows.", heroText:"Explore how tailored software can make inventory, service orders and invoice workflows clearer. These demos are intentionally available without sign-in.",
      crossPlatform:"Cross-platform development", platformsText:"Solutions for web, iOS, Android, Windows, macOS and Linux—depending on requirements and the right technology choices.",
      inventoryTitle:"Inventory & stock", inventoryText:"Review stock, spot shortages and keep track of item quantities.", inventoryLink:"Open inventory demo",
      serviceTitle:"Service & work orders", serviceText:"Capture jobs, assign ownership and follow work through a transparent process.", serviceLink:"Open service demo",
      invoiceTitle:"Invoices & documents", invoiceText:"Keep invoice status, due dates and amounts in one clear workspace.", invoiceLink:"Open invoice demo",
      prototype:"Prototype with sample data", transparency:"Demo limitations", transparencyText:"These interactive prototypes use fictional sample data in your browser only. They are not production customer systems, do not store data on a server and do not generate legally compliant e-invoices. Production solutions require secure authentication, role-based access, persistent storage, testing, backups and domain-specific compliance review.",
      contact:"Discuss a project", contactText:"Have a process that relies on too many spreadsheets, manual steps or duplicate data entry?", contactLink:"Send a project idea by email",
      backToShowcase:"All concepts", demoData:"DEMO · FICTIONAL DATA", reset:"Reset sample data", export:"Export CSV", search:"Search…", noResults:"No matching records found.",
      stockTitle:"Inventory overview", stockSubtitle:"A clear view of items, quantities and what needs replenishing.", products:"Products", units:"Units in stock", lowStock:"Low-stock items", outOfStock:"Out of stock", product:"Product", sku:"SKU", location:"Location", quantity:"Quantity", status:"Status", allStatuses:"All stock states", inStock:"In stock", low:"Reorder", out:"Out of stock", decrease:"Decrease quantity", increase:"Increase quantity", quantityUpdated:"Stock updated.", resetDone:"Sample data reset.", csvReady:"Preparing CSV export.", stockSearch:"Search product, SKU or location…", minStock:"Minimum stock",
      serviceSubtitle:"From intake to completion—all work orders in one view.", openOrders:"Open orders", inProgress:"In progress", completed:"Completed", newOrder:"New work order", createOrder:"Create work order", orderTitle:"Work order", customer:"Customer / site", technician:"Assigned to", priority:"Priority", normal:"Normal", high:"High", urgent:"Urgent", allTechnicians:"All assignees", allOrders:"All orders", newStatus:"New", progressStatus:"In progress", doneStatus:"Completed", startWork:"Start work", markComplete:"Mark completed", reopen:"Reopen", orderCreated:"Work order created.", orderMoved:"Work order status updated.", invalidOrder:"Please enter a work order and customer/site.", orderSearch:"Search order, customer or ID…", resetOrders:"Work orders reset.",
      invoiceSubtitle:"Manage due dates and payment status in one clear view.", outstanding:"Outstanding amount", paidTotal:"Total paid", overdueCount:"Overdue invoices", invoiceCount:"Invoices", createInvoice:"Add invoice", addInvoice:"Add sample invoice", invoiceNo:"Invoice number", dueDate:"Due date", amount:"Amount", invoiceStatus:"Payment status", allInvoiceStatuses:"All statuses", draft:"Draft", due:"Due", paid:"Paid", overdue:"Overdue", markPaid:"Mark as paid", markDue:"Mark as due", invoiceCreated:"Sample invoice added.", invalidAmount:"Enter a valid amount greater than zero.", invalidInvoice:"Please enter a customer and due date.", invoiceSearch:"Search invoice number or customer…", resetInvoices:"Invoices reset.", dueDateHelp:"Due date", invoiceDisclaimer:"Demo only: no accounting, payment, tax calculation or compliant e-invoice generation is connected.",
      empty:"No records available.", sampleOnly:"Sample data only", languageChanged:"Language changed"
    }
  };
  const allowed = ["de","en"];
  let current = "de";
  try {
    const saved = localStorage.getItem("business-demo-language");
    current = allowed.includes(saved) ? saved : (navigator.language?.toLowerCase().startsWith("de") ? "de" : "en");
  } catch (_) { current = navigator.language?.toLowerCase().startsWith("de") ? "de" : "en"; }
  function t(key) { return dictionaries[current]?.[key] ?? dictionaries.en[key] ?? key; }
  function apply(next) {
    current = allowed.includes(next) ? next : "de";
    try { localStorage.setItem("business-demo-language", current); } catch (_) {}
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel)); });
    document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
    document.querySelectorAll("[data-language-switch]").forEach(el => { el.value = current; el.setAttribute("aria-label", t("languageLabel")); });
    const title = document.querySelector("title[data-i18n]");
    if (title) document.title = t(title.dataset.i18n);
    document.dispatchEvent(new CustomEvent("business-language-change", {detail:{language:current}}));
  }
  window.businessI18n = { t, apply, get language(){return current;}, formatDate(value) { return new Intl.DateTimeFormat(current === "de" ? "de-DE" : "en-GB").format(new Date(value + "T12:00:00")); }, formatMoney(value) { return new Intl.NumberFormat(current === "de" ? "de-DE" : "en-IE", {style:"currency",currency:"EUR"}).format(value); } };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-language-switch]").forEach(el => el.addEventListener("change", () => apply(el.value)));
    apply(current);
  });
})();