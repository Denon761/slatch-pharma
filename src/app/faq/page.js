const p = (text) => ({ type: "p", text });
const ul = (items) => ({ type: "ul", items });

const FAQ_SECTIONS = [
  {
    title: "Products & Medicine Discovery",
    items: [
      {
        q: "What types of medicines are available?",
        a: [
          p("Slatch Pharmaceuticals® markets and distributes herbal medicines across a broad range of health categories. Customers can browse available products by health condition, product name, or unique QD product code."),
          p("Actual availability depends on the current product portfolio and stock."),
        ],
      },
      {
        q: "Which health categories are covered?",
        a: [
          p("Available medicines may cover applicable conditions relating to:"),
          ul([
            "Head, brain and sleep",
            "Hair, scalp and nails",
            "Eyes, ears, nose and throat",
            "Respiratory and lung health",
            "Heart, blood and circulation",
            "Digestive and stomach disorders",
            "Bowel and rectal conditions",
            "Liver and gallbladder",
            "Kidney, bladder and urinary health",
            "Diabetes and metabolic health",
            "Joint, bone, muscle and nerve health",
            "Skin conditions",
            "Men's health",
            "Women's health",
            "Children's health",
            "General weakness and fever-related conditions",
            "Weight, energy and vitality",
            "Elderly care",
          ]),
        ],
      },
      {
        q: "Can I browse medicines by disease or condition?",
        a: [p("Yes. Customers who do not already know the product they need can browse medicines by the relevant health condition or category.")],
      },
      {
        q: "Which common conditions can I search for?",
        a: [
          p("Depending on available products and their applicable indications, customers may browse categories relating to conditions such as:"),
          ul([
            "Headache", "Migraine", "Hair fall", "Dandruff", "Sinus-related complaints", "Cough", "Phlegm",
            "Chest congestion", "High blood pressure", "Low blood pressure", "Acidity", "Gas", "Indigestion",
            "Constipation", "Diarrhoea", "Piles / hemorrhoids", "Liver-related complaints", "Kidney and urinary complaints",
            "Diabetes-related conditions", "Joint pain", "Back pain", "Knee pain", "Arthritis-related symptoms",
            "Sciatica-related symptoms", "Acne and skin complaints", "Male infertility-related conditions",
            "Low sperm count", "Poor sperm motility", "Sexual weakness", "Premature ejaculation",
            "Women's health complaints", "Menstrual irregularities", "Leucorrhoea-related complaints",
            "General weakness", "Fatigue", "Age-related health complaints",
          ]),
        ],
      },
      {
        q: "Does every medicine have its own unique name?",
        a: [
          p("Yes. Every medicine has its own unique product name/code, helping customers identify the exact product they need."),
          p("Examples include QD 536 and QD 3068."),
        ],
      },
      {
        q: "What is a QD product code?",
        a: [
          p("A QD code is the unique product identity assigned to an individual medicine."),
          p("It helps customers search, request, identify, and reorder the exact medicine without relying only on the disease or health-condition name."),
        ],
      },
      {
        q: "Can I buy a medicine simply by asking for its QD code?",
        a: [
          p("Yes. If you already know the exact product code, you can request the medicine directly by its QD name/code."),
          p("For example, a returning customer who already knows QD 536 can simply ask for QD 536."),
        ],
      },
      {
        q: "Do I need to tell the medical store my disease if I know the product name?",
        a: [p("No. If you already know the exact medicine and its unique QD product code, you can request the medicine directly by that name/code.")],
      },
      {
        q: "Can I search the website using the QD code?",
        a: [p("Yes. Customers who already know their medicine should be able to search directly using its unique QD product code.")],
      },
      {
        q: "Can I search by disease if I do not know the QD code?",
        a: [p("Yes. Customers who do not know the exact product name can browse by health category or condition and then review the relevant product information.")],
      },
    ],
  },
  {
    title: "Product Information",
    items: [
      { q: "Is the complete ingredient list mentioned?", a: [p("Yes. The relevant ingredients and herbal composition are mentioned on the individual product pack.")] },
      {
        q: "Are the ingredients also shown online?",
        a: [
          p("Where available, the product page may also display the medicine's ingredients and composition so customers can review them before purchasing."),
          p("The physical product pack remains an important source of product-specific information."),
        ],
      },
      { q: "What standards are followed for herbal ingredients?", a: [p("The herbal ingredients used in the products follow the applicable herbal pharmacopoeial listings provided or recognized within the relevant DRAP framework, according to the respective product documentation.")] },
      { q: "Does every product have its own formulation?", a: [p("Each medicine has its own product-specific formulation and composition as stated on its pack and applicable product information.")] },
      { q: "Are the therapeutic indications mentioned?", a: [p("Where applicable, the individual medicine's therapeutic indication is provided in its product information and on the relevant product presentation.")] },
      { q: "Are treatment or cure-related uses mentioned?", a: [p("Where applicable, treatment or cure-related information is presented according to the respective medicine's applicable approved product indication and documentation.")] },
      {
        q: "Does every medicine treat every condition listed on the website?",
        a: [
          p("No. Health-condition categories are intended to help customers discover relevant products."),
          p("Each medicine has its own specific indication, composition, dosage, and precautions."),
        ],
      },
      { q: "Is dosage mentioned on each medicine?", a: [p("Yes. Applicable dosage and directions for use are provided with the individual medicine.")] },
      { q: "Are directions for use mentioned?", a: [p("Yes. Customers should follow the directions provided on the individual medicine pack or accompanying product information.")] },
      { q: "Are precautions mentioned on the pack?", a: [p("Yes. Applicable precautions are provided on the medicine pack.")] },
      { q: "Are warnings mentioned?", a: [p("Where relevant to the medicine, applicable warnings and restrictions are included in the product information or on the pack.")] },
      { q: "Are contraindications mentioned?", a: [p("Where applicable, relevant contraindications or restrictions are provided with the medicine's product information.")] },
      { q: "Are storage instructions mentioned?", a: [p("Yes. Applicable storage instructions are provided on the individual product pack.")] },
      { q: "Is the pack size clearly shown?", a: [p("Yes. The applicable pack size or quantity should be shown on the product page and product packaging.")] },
      { q: "Is manufacturer information provided on the pack?", a: [p("Yes. Applicable manufacturer information is provided as part of the product's pack and regulatory information.")] },
    ],
  },
  {
    title: "Authenticity & Product Identification",
    items: [
      { q: "Does every medicine have a unique barcode?", a: [p("Yes. Each applicable product carries its own unique barcode, providing an additional product-identification reference.")] },
      { q: "Why is the barcode important?", a: [p("The barcode helps distinguish the exact product and pack and can be checked together with other identifying details.")] },
      {
        q: "How can I confirm that I have received the correct medicine?",
        a: [
          p("Check the:"),
          ul(["QD product name/code", "Unique barcode", "Product name", "Pack size", "Ingredients", "Batch information", "Manufacturing information", "Expiry information", "Applicable regulatory details", "Packaging integrity"]),
        ],
      },
      { q: "How can I check product authenticity?", a: [p("Customers should examine the original packaging, QD product identity, barcode, batch information, manufacturing and expiry information, regulatory details, and pack integrity.")] },
      { q: "Is the batch number mentioned?", a: [p("Applicable batch or lot information is provided on the product packaging.")] },
      { q: "Is the manufacturing date mentioned?", a: [p("Applicable manufacturing information is provided on the product packaging.")] },
      {
        q: "Is the expiry date mentioned?",
        a: [
          p("Yes. Applicable expiry information is provided on the pack."),
          p("Customers should not use a medicine beyond its stated expiry date."),
        ],
      },
      { q: "Are DRAP enlistment details available?", a: [p("Where applicable, the individual medicine carries its relevant product enlistment or regulatory information.")] },
      { q: "Is Form 7 information available?", a: [p("Applicable Form 7 or related regulatory information may be provided or referenced where relevant to the individual product.")] },
      {
        q: "What if the packaging looks different from my previous purchase?",
        a: [
          p("Packaging or labelling may change from time to time."),
          p("Compare the QD product code, barcode, ingredients, pack details, batch information, regulatory information, and other identifying details. Contact customer support if you are unsure."),
        ],
      },
    ],
  },
  {
    title: "Use, Safety & Precautions",
    items: [
      { q: "Should I read the pack before using the medicine?", a: [p("Yes. Customers should read the medicine's ingredients, dosage, directions, precautions, warnings, storage instructions, and other applicable information before use.")] },
      {
        q: "What if I am allergic to one of the ingredients?",
        a: [
          p("Do not use a product containing an ingredient you know you are allergic or sensitive to without appropriate professional advice."),
          p("Always review the complete ingredient list."),
        ],
      },
      {
        q: "Can herbal medicines interact with other medicines?",
        a: [
          p("Some herbal ingredients may not be suitable to combine with certain medicines or treatments."),
          p("Customers already taking prescription medication or receiving ongoing treatment should seek appropriate professional healthcare advice where necessary."),
        ],
      },
      {
        q: "Can pregnant women use these medicines?",
        a: [
          p("Suitability depends on the individual medicine."),
          p("Pregnant customers should review the product precautions and seek appropriate healthcare advice before use where necessary."),
        ],
      },
      { q: "Can breastfeeding women use these medicines?", a: [p("Suitability varies by medicine. Review the product-specific precautions and guidance before use.")] },
      {
        q: "Can children use the medicines?",
        a: [
          p("Only medicines suitable for the relevant age group should be used for children."),
          p("Check the specific product's dosage, age guidance, directions, and precautions."),
        ],
      },
      {
        q: "Can elderly customers use these medicines?",
        a: [
          p("Suitability depends on the medicine and the customer's health condition."),
          p("Older adults taking multiple medicines should pay particular attention to product precautions and interactions."),
        ],
      },
      {
        q: "Can I take more than the recommended dosage for faster results?",
        a: [
          p("No. Use the medicine according to the stated dosage."),
          p("More than the recommended amount should not be assumed to provide faster or better results."),
        ],
      },
      {
        q: "Can I use more than one herbal medicine at the same time?",
        a: [
          p("This depends on the products, their ingredients, dosage, and the customer's circumstances."),
          p("Review the product information and seek appropriate professional guidance if there is uncertainty."),
        ],
      },
      { q: "Should I stop my existing prescription medicine?", a: [p("Do not stop, replace, or significantly change prescribed treatment solely because you have purchased a herbal medicine.")] },
      {
        q: "What should I do if I experience an unexpected reaction?",
        a: [
          p("Stop using the product and seek appropriate healthcare advice if you experience a significant or unexpected reaction."),
          p("Keep the medicine pack and batch information available."),
        ],
      },
    ],
  },
  {
    title: "Specific Health Categories",
    items: [
      {
        q: "Are medicines available for piles?",
        a: [
          p("Where included in the current portfolio, applicable herbal medicines may be available for piles / hemorrhoid-related conditions."),
          p("Customers who already know their product can request it directly by its QD code."),
        ],
      },
      {
        q: "Are medicines available for male infertility?",
        a: [
          p("Where included in the product portfolio, applicable medicines may be available for male fertility-related conditions such as low sperm count, poor sperm motility, and related concerns."),
          p("For example, a customer who already knows the relevant product can purchase it directly using its QD product identity rather than having to describe the condition."),
        ],
      },
      {
        q: "Are medicines available for blood pressure?",
        a: [
          p("Where included in the applicable portfolio, relevant medicines may be available for blood-pressure-related conditions."),
          p("Customers receiving prescribed blood-pressure treatment should not change existing treatment without appropriate medical guidance."),
        ],
      },
      { q: "Are medicines available for diabetes?", a: [p("The available portfolio may include medicines for applicable diabetes or blood-sugar-related conditions where covered by the individual product's indication.")] },
      { q: "Are medicines available for joint or back pain?", a: [p("The available range may include applicable medicines relating to joint pain, knee pain, back pain, muscle discomfort, arthritis-related symptoms, sciatica-related complaints, and mobility concerns.")] },
      { q: "Are medicines available for hair fall?", a: [p("Where included in the portfolio, products may be available for hair fall, dandruff, scalp complaints, weak hair, and other applicable hair-related conditions.")] },
      { q: "Are medicines available for stomach problems?", a: [p("Available medicines may include applicable products for acidity, gas, indigestion, constipation, poor digestion, bloating, appetite-related complaints, and other digestive conditions.")] },
      { q: "Are medicines available for liver and kidney complaints?", a: [p("Where included in the portfolio, customers may find applicable medicines for liver, gallbladder, kidney, bladder, and urinary-system-related conditions.")] },
      { q: "Are medicines available for men's and women's health?", a: [p("Yes, the available portfolio may include applicable herbal medicines for men's reproductive and sexual health as well as women's menstrual, hormonal, reproductive, and general health concerns.")] },
    ],
  },
  {
    title: "Availability & Medical Stores",
    items: [
      { q: "Are the medicines available at medical stores?", a: [p("Yes. The medicines are supplied through medical stores and applicable retail medicine channels across Pakistan, subject to stock availability at the individual outlet.")] },
      { q: "Can I ask my local medical store for the medicine by QD code?", a: [p("Yes. If you know the unique QD product code, you can ask the medical store for that exact medicine.")] },
      {
        q: "What if my medical store does not currently have the product?",
        a: [
          p("Stock may vary from store to store."),
          p("Customers can ask the retailer about availability or use the official retail ordering channels where available."),
        ],
      },
      {
        q: "Can I reorder the same medicine easily?",
        a: [
          p("Yes. Keeping the QD product code makes repeat purchasing easier."),
          p("Simply search or request the medicine using the same unique product code."),
        ],
      },
      {
        q: "How can I check whether a product is in stock online?",
        a: [
          p("Where inventory information is available, current stock status should be shown on the product page."),
          p("Customers may also contact support for availability."),
        ],
      },
    ],
  },
  {
    title: "Online Ordering & Payments",
    items: [
      { q: "Can I order medicines online?", a: [p("Where online ordering is enabled, customers can purchase available medicines through the official website or applicable retail ordering channels.")] },
      { q: "Can I search directly by QD code while ordering online?", a: [p("Yes. The QD code is intended to make direct product discovery and repeat purchasing easier.")] },
      { q: "What payment methods are available?", a: [p("Available payment methods should be displayed during checkout. Options may vary depending on the current payment services offered by the store.")] },
      { q: "Are prices shown before checkout?", a: [p("Applicable product prices and order charges should be displayed during the retail purchasing process.")] },
      {
        q: "Can an order be cancelled?",
        a: [
          p("Cancellation depends on the order status and applicable cancellation policy."),
          p("Customers should contact support as soon as possible if they wish to cancel an order."),
        ],
      },
    ],
  },
  {
    title: "Delivery & Tracking",
    items: [
      {
        q: "Do you deliver across Pakistan?",
        a: [
          p("Slatch Pharmaceuticals® works to provide access to available medicines across Pakistan through applicable retail and distribution channels."),
          p("Delivery availability depends on location and available courier services."),
        ],
      },
      {
        q: "How long does delivery take?",
        a: [
          p("Delivery time depends on the destination, order processing, courier service, and current delivery conditions."),
          p("Applicable delivery estimates should be communicated during or after ordering."),
        ],
      },
      {
        q: "How much is the delivery charge?",
        a: [
          p("Shipping charges depend on the destination, order, and current delivery policy."),
          p("Applicable charges should be shown before the order is completed."),
        ],
      },
      { q: "Can I track my order?", a: [p("Where tracking is available, customers should receive or be able to obtain tracking information after dispatch.")] },
      { q: "What should I do if my order is delayed?", a: [p("Check available tracking information first. If the delivery appears unusually delayed, contact customer support with your order details.")] },
    ],
  },
  {
    title: "Damaged Products, Returns & Customer Support",
    items: [
      {
        q: "What if I receive the wrong medicine?",
        a: [
          p("Do not use the product."),
          p("Contact customer support with the order number, product details, and photographs where requested so the issue can be reviewed."),
        ],
      },
      {
        q: "What if the medicine arrives damaged, leaking, or opened?",
        a: [
          p("Do not use a product whose packaging, seal, bottle, container, or protective packaging appears damaged, leaking, opened, altered, or suspicious."),
          p("Keep the packaging and contact customer support."),
        ],
      },
      { q: "Can medicines be returned or exchanged?", a: [p("Returns and exchanges are subject to the applicable return and refund policy and any restrictions relating to medicines, opened products, tampered packaging, safety, hygiene, or regulatory requirements.")] },
      {
        q: "Can an opened or used medicine be returned?",
        a: [
          p("Opened or used medicines may be restricted from return or exchange due to safety and product-integrity considerations."),
          p("Customers should review the applicable return policy."),
        ],
      },
      {
        q: "Where can I get help before or after purchasing?",
        a: [
          p("Customers can contact the official Slatch Pharmaceuticals® customer-support channels for assistance with:"),
          ul(["Finding a product", "Searching by QD code", "Product information", "Ingredients", "Pack information", "Product availability", "Orders", "Delivery and tracking", "Damaged or incorrect products", "Returns and refunds", "General retail assistance"]),
          p("For individual diagnosis, medical emergencies, or decisions involving existing prescribed treatment, customers should seek appropriate professional healthcare assistance."),
        ],
      },
    ],
  },
];

const PATIENT_GUIDE = [
  { title: "Already know your medicine?", text: "Search or ask for it directly using its unique QD product name/code." },
  { title: "Don't know the product name?", text: "Browse by your relevant health condition and review the individual medicine information." },
  { title: "Before using any medicine:", text: "Check the ingredients, therapeutic indication, dosage, directions, precautions, unique barcode, batch information, manufacturing and expiry information, and applicable product details shown on the pack." },
  { title: "Retail Availability:", text: "Products are available through applicable medical stores, retail medicine channels, and official ordering channels across Pakistan, subject to individual product and outlet stock availability." },
];

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function AnswerBlocks({ blocks }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.type === "ul" ? (
          <ul key={i} className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={i} className="mt-3 text-sm text-gray-600">
            {block.text}
          </p>
        )
      )}
    </>
  );
}

export const metadata = {
  title: "FAQ | Slatch Pharmaceuticals",
};

export default function FAQPage() {
  return (
    <div className="container-page py-14 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>

      <nav className="mt-6 flex flex-wrap gap-2">
        {FAQ_SECTIONS.map((section) => (
          <a
            key={section.title}
            href={`#${slugify(section.title)}`}
            className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 hover:bg-brand-100 transition"
          >
            {section.title}
          </a>
        ))}
      </nav>

      {FAQ_SECTIONS.map((section) => (
        <section key={section.title} id={slugify(section.title)} className="mt-12 scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
          <div className="mt-4 divide-y divide-gray-100 border-y border-gray-100">
            {section.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-gray-900">
                  <span>{item.q}</span>
                  <span className="shrink-0 text-brand-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <AnswerBlocks blocks={item.a} />
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-14 rounded-2xl bg-brand-50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900">Patient Guide</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PATIENT_GUIDE.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-12 text-center text-base font-semibold text-brand-700">
        Every Medicine. A Clear Identity. A Unique QD Code.
      </p>
    </div>
  );
}
