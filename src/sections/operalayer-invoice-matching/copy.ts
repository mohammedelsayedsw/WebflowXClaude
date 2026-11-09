/**
 * Page copy for /solutions/operalayer/invoice-matching.
 * Source: Anton's page at operalayer-invoice-matching.asapriko.chatgpt.site (2026-11-09).
 * Anton's copy ships word for word: do not edit these strings without him.
 */

export const QUICK = [
  {
    tab: "Price",
    product: "Cable glands · Line 04",
    title: "€4.80 agreed. €5.10 billed.",
    pair: [
      { k: "PO", v: "€4.80" },
      { k: "Billed", v: "€5.10" },
    ],
    note: "Thirty cents is easy to miss. On 1,000 units, that is €300.",
    action: "Check the agreed price before accepting the invoice.",
  },
  {
    tab: "Quantity",
    product: "Junction boxes · Line 11",
    title: "100 cartons billed. 92 received.",
    pair: [
      { k: "Received", v: "92 cartons" },
      { k: "Billed", v: "100 cartons" },
    ],
    note: "At €30 per carton, €240 of the bill still needs a delivery to back it up.",
    action: "Ask receiving whether the other eight cartons arrived separately.",
  },
  {
    tab: "Specification",
    product: "LED panels · Line 14",
    title: "4,000 K ordered. 3,000 K billed.",
    pair: [
      { k: "Ordered", v: "4,000 K" },
      { k: "Billed", v: "3,000 K" },
    ],
    note: "The price and count match. The supplier listed a different light colour.",
    action: "Check the item label and whether the buyer approved a substitute.",
  },
];

export const PROBLEMS = [
  {
    title: "A small price change quietly eats into your margin.",
    body: "The order says €4.80. The invoice says €5.10. The total is calculated correctly, so the extra €300 on a thousand units is easy to approve.",
  },
  {
    title: "The paperwork can agree while the delivery comes up short.",
    body: "The supplier dispatches 100 cartons on paper. Your warehouse counts 92. Unless accounting sees that count before posting the bill, someone has to chase the difference afterwards.",
  },
  {
    title: "Your most experienced people spend the morning checking the easy lines.",
    body: "One supplier sells by the box, another by the piece. The buyer knows the codes, receiving has the count and accounting has the invoice. All three get involved before anyone knows which line actually needs attention.",
  },
];

export const FULL = [
  {
    tab: "Price difference",
    line: "Cable glands · Line 04",
    title: "An extra €300 on one line",
    body: "The order and warehouse receipt both show 1,000 M20 cable glands. The supplier billed all 1,000 at a higher unit price.",
    rows: [
      ["Purchase order PO-1048", "M20 cable gland", "1,000", "€4.80"],
      ["Warehouse receipt GR-1170", "M20 cable gland", "1,000", "Agreed on PO"],
      ["Supplier invoice INV-2846", "M20 cable gland", "1,000", "€5.10"],
    ],
    why: "The agreed line value is €4,800. The supplier billed €5,100. A quantity check alone would let the difference through.",
    action:
      "The buyer checks for an agreed price change. If €4.80 still applies, accounts payable requests a corrected invoice or €300 credit and keeps the line on hold.",
    hold: "Hold for price review",
    result: "The example line is on hold. The buyer owns the price check.",
  },
  {
    tab: "Short delivery",
    line: "Junction boxes · Line 11",
    title: "Eight cartons still need an explanation",
    body: "The purchase order and invoice both say 100 cartons. The warehouse recorded 92 on receipt.",
    rows: [
      ["Purchase order PO-1048", "Junction boxes", "100 cartons", "€30"],
      ["Warehouse receipt GR-1170", "Junction boxes", "92 cartons", "Agreed on PO"],
      ["Supplier invoice INV-2846", "Junction boxes", "100 cartons", "€30"],
    ],
    why: "Comparing the invoice with the order gives a match. Bringing in the warehouse count shows €240 billed against goods still unaccounted for.",
    action:
      "Receiving checks for a second delivery. If it arrived, link the second receipt. If the delivery was short, purchasing asks the supplier to correct the bill under the agreed terms.",
    hold: "Hold for receipt check",
    result: "The example line is on hold. Receiving checks the outstanding eight cartons.",
  },
  {
    tab: "Wrong specification",
    line: "LED panels · Line 14",
    title: "Same quantity. Same price. Different light.",
    body: "The buyer ordered 60 neutral white panels. The invoice lists 60 warm white panels at the same €28 unit price. The warehouse receipt records the count only.",
    rows: [
      ["Purchase order PO-1048", "LP-4000 · 4,000 K", "60 panels", "€28"],
      ["Warehouse receipt GR-1170", "Colour unrecorded", "60 panels", "Agreed on PO"],
      ["Supplier invoice INV-2846", "LP-3000 · 3,000 K", "60 panels", "€28"],
    ],
    why: "Both totals are €1,680. The item codes tell the buyer something the totals cannot. The paperwork alone leaves open which panels actually arrived.",
    action:
      "The warehouse checks the carton label. The buyer confirms whether a substitute was agreed. Accounting can then accept the approved change or ask the supplier to correct the invoice.",
    hold: "Hold for item check",
    result: "The example line is on hold. The warehouse checks the label and purchasing checks the substitution.",
  },
];

export const STATS = [
  {
    n: "2 hours per person",
    label: "back for the team",
    body: "The customer reports two hours per person of routine checking removed. Buyers, receivers and accountants have more time for the lines that need their attention.",
  },
  {
    n: "36 seconds",
    label: "from upload to posting",
    body: "The recorded median time from invoice upload to posting in Microsoft Dynamics NAV was 36 seconds, measured in August 2026.",
  },
  {
    n: "98.5%",
    label: "matching accuracy after two weeks",
    body: "Matching accuracy improved from 69% to 87% in the first week, then reached 98.5% in the second week.",
  },
];

export const STEPS = [
  "Read the invoice, delivery note or CMR transport document from the agreed inbox, upload or photo.",
  "Find the purchase order and link supplier codes, packs and units to your own items.",
  "Check prices, quantities and item details. Include the warehouse count when a receipt is available.",
  "Show the differences for review. Send accepted records to the ERP under your posting rules.",
];

export const ROLES = [
  {
    role: "Finance director or owner",
    items: [
      "See the value of a disputed price or quantity before approving the bill.",
      "Separate money questioned from credits the supplier actually issued.",
      "Measure how much staff time the process gives back each month.",
    ],
  },
  {
    role: "Accounts payable",
    items: [
      "Open the invoice at the line that needs a decision.",
      "See the order and receipt alongside it without retyping every line.",
      "Know which invoices can be posted and which are waiting for an answer.",
    ],
  },
  {
    role: "Buyer or purchasing manager",
    items: [
      "See when a supplier changed the price, pack or product code.",
      "Check an agreed substitution against the original order.",
      "Give the supplier the exact line and amount to correct.",
    ],
  },
  {
    role: "Warehouse or receiving lead",
    items: [
      "Capture the delivery document while the goods are in front of you.",
      "Record the actual count and check the label when a product is uncertain.",
      "Give accounting a receipt it can use to settle a shortage.",
    ],
  },
  {
    role: "Operations director",
    items: [
      "See whether a bill is waiting on purchasing, receiving or finance.",
      "Find the supplier formats and pack sizes that cause repeated work.",
      "Measure whether the next delivery from that supplier is easier to process.",
    ],
  },
  {
    role: "IT or ERP owner",
    items: [
      "Start with a working Microsoft Dynamics NAV reference.",
      "Agree which fields OperaLayer can read and which records it can write.",
      "Test approvals, failed exports and retries before enabling automatic posting.",
    ],
  },
];

export const FIT = [
  "A busy team still opens supplier PDFs and compares them with purchase orders by hand.",
  "Product codes, packs, units or partial deliveries make a simple total check unreliable.",
  "Purchasing, receiving and accounting each hold part of the answer.",
  "Your ERP already holds the orders and you want accepted invoices recorded there.",
];

export const START = [
  {
    title: "Choose the checks that matter",
    team: "Your team brings a clean invoice and a few difficult ones, with their orders and available receipts.",
    us: "With OperaLayer, agree which price, quantity and product differences should stop a line.",
  },
  {
    title: "Connect the order and receipt records",
    team: "Your ERP owner identifies the purchase order, receipt and posting fields and approves access.",
    us: "The OperaLayer team sets up the agreed connection and tests it with sample records. Microsoft Dynamics NAV has a working connection. Other systems are scoped against their own interfaces.",
  },
  {
    title: "Review the first matches together",
    team: "Your buyer, receiver and accountant check what passed and what was held.",
    us: "The OperaLayer team adjusts pack conversions and price tolerances with them. Test known mistakes and clean invoices before allowing a line to pass automatically.",
  },
  {
    title: "Agree who owns each exception",
    team: "Your team agrees who checks a price, confirms a shortage and authorises a posting.",
    us: "The OperaLayer team sets up the review and export rules. Together you measure time spent, useful alerts and confirmed corrections.",
  },
];

export const HOOD = [
  {
    q: "Reading supplier documents",
    a: "OperaLayer extracts the invoice number, supplier, item code, description, quantity, unit and price from the incoming document. A poorly read field carries a warning so the reviewer can check it against the original.",
  },
  {
    q: "Finding your item behind the supplier code",
    a: "OperaLayer checks the barcode, your item code and approved supplier aliases. Similar descriptions can suggest a candidate. A reviewer settles an uncertain match before it becomes a rule.",
  },
  {
    q: "Converting packs and units",
    a: "A confirmed rule can turn ten boxes of twelve into 120 pieces. OperaLayer keeps the conversion tied to the supplier and item. An unknown pack size goes to review.",
  },
  {
    q: "Checking the agreed price and recorded receipt",
    a: "Two-way matching compares the PO with the invoice. Three-way matching adds the warehouse receipt. Your team agrees how to handle rounding, part deliveries and small differences, then tests those rules on known cases.",
  },
  {
    q: "Posting the accepted record to the ERP",
    a: "The NAV connection reads purchase orders and writes accepted records back to the ERP. Review and export history lets the team trace a posting back to the source. Failed exports can be investigated before retrying.",
  },
];

export const FAQ_GROUPS = [
  {
    group: "Starting and using OperaLayer",
    items: [
      {
        q: "Do all our suppliers have to change how they invoice us?",
        a: "Suppliers can keep sending the formats they use today. We start with a sample of your PDFs, scans and delivery notes, including the difficult ones, to see which can pass and which need review.",
      },
      {
        q: "What if we receive one purchase order in several deliveries?",
        a: "The warehouse records each receipt. The reviewer can check the invoice against the deliveries recorded so far and see what is still outstanding. We test your partial-delivery rules as part of setup.",
      },
      {
        q: "What if we accept small price differences?",
        a: "Choose tolerances with finance and purchasing. Test them against rounding, discounts and known overcharges. In the first review, count how many alerts led to action and adjust the thresholds before widening automation.",
      },
      {
        q: "Who speaks to the supplier when there is a problem?",
        a: "Your buyer or accounts payable team owns the conversation. OperaLayer supplies the document, order line and amount in question so they can ask for a correction with the evidence in front of them.",
      },
    ],
  },
  {
    group: "Data and confidence",
    items: [
      {
        q: "Can it tell what physically arrived?",
        a: "It can compare the recorded receipt with the order and invoice. Your warehouse still counts the goods and checks labels or damage. A supplier delivery note or CMR shows what the supplier or carrier documented.",
      },
      {
        q: "Could it accept the wrong item because the description looks similar?",
        a: "An exact code or approved mapping gives a stronger match. Where the code, specification or pack is unclear, the line can wait for a person to compare it with the original and the item record.",
      },
      {
        q: "Who decides whether an invoice can post?",
        a: "You set the approval and posting rules. Start with human review, then enable automatic export for document types and checks that pass your tests. Payment approval stays with your finance team.",
      },
      {
        q: "What happens to our supplier and price data?",
        a: "Before setup, we agree the documents and ERP fields in scope, who can access them, where they are processed and stored, and how long they are kept. Your IT team reviews those details for your deployment.",
      },
      {
        q: "How do we know whether it pays off?",
        a: "Measure handling time on the same suppliers before and after the pilot. Track accepted invoice reductions and supplier credits separately. Compare the measured benefit with setup and running costs.",
      },
    ],
  },
  {
    group: "Comparing approaches",
    items: [
      {
        q: "Our ERP already matches invoices. Where would OperaLayer help?",
        a: "Follow one invoice from the supplier inbox to the posted entry. If someone still reads the PDF, translates a pack size or calls the warehouse about a mismatch, start the demo at that step.",
      },
      {
        q: "How does it compare with Continia Document Capture?",
        a: "Continia offers invoice and receipt matching inside Microsoft Dynamics 365 Business Central. OperaLayer has a working NAV example across purchasing, receiving and accounting. Compare both with the same supplier documents, ERP version, receipt data, setup and support costs.",
      },
      {
        q: "Could we do this with OCR or a general AI assistant?",
        a: "Reading the PDF gives you the supplier’s numbers. You still need the right order, the warehouse count, the pack conversion and a controlled way to post the accepted result. Bring a tricky invoice to the demo and follow it through all five steps.",
      },
      {
        q: "Will it work with SAP or our warehouse system?",
        a: "The live reference on this page uses Microsoft Dynamics NAV. For SAP or another ERP, we review the available interfaces for orders, receipts and postings. We quote the connection and test it with your records before rollout.",
      },
    ],
  },
];
