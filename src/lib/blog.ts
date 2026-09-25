import { BASE_URL } from "./config";

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  id: number;
  /** Used as the `/blog/[slug]` URL segment */
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** ISO 8601 date used for structured data (`datePublished`) */
  publishedAt: string;
  author: string;
  authorRole: string;
  image: string;
  imageAlt: string;
  /** Article body — one paragraph per entry */
  content: string;
  metaDescription: string;
  faqs?: BlogFaq[];

  /** SEO **/
  metaTitle: string;
  keyTakeaways?: string[];
};

export const blogCategories = [
  "All",
  "Buying Guide",
  "Maintenance",
  "Installation",
  "Comparisons",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "guide-on-epoxy-flooring",
    title: "Everything You Need to Know About Epoxy Flooring in Surrey",
    excerpt: "A successful epoxy floor therefore depends on more than resin quality. Concrete condition, preparation, coating thickness, and curing conditions all affect performance.",
    category: "",
    date: "Jul 22, 2026",
    publishedAt: "2026-07-22",
    author: "Sevenshadesepoxy",
    authorRole: "Flooring Specialists",
    image: "/images/guide-on-epoxy-flooring.webp",
    imageAlt: "",
    metaDescription: "A successful epoxy floor therefore depends on more than resin quality. Concrete condition, preparation, coating thickness, and curing conditions all affect performance.",
    metaTitle: "A Complete Guide on Epoxy Flooring",
    content: 
    `   
    <h2>What is Epoxy Flooring?</h2>
    <p>Epoxy flooring is a resin-based coating applied over prepared concrete surfaces. The system combines epoxy resin with a compatible hardener.</p>
    <p>Mixing both components starts a chemical reaction that hardens the coating. Once cured, it forms a dense surface bonded to concrete.</p>
    <p>Professional installation normally begins with inspecting and preparing the concrete slab.</p>
    <p>Diamond grinding removes contaminants while creating the profile needed for adhesion.</p>
    <p>What is necessary before starting the coating? Repair cracks, pitting, and damaged areas, then moisture-test.</p>
    <p>The installer then applies the selected primer, epoxy layers, and finish. Decorative flakes or quartz can provide texture, color, and additional traction.</p>
    <p>Many garage systems also receive a durable clear protective topcoat. UV-stable topcoats help preserve appearance where sunlight reaches the floor.</p>
    <p>Epoxy offers good resistance against abrasion and common automotive chemicals. Its seamless surface also prevents dirt from collecting between flooring joints.</p>
    <p>Installation time depends on the products and number of coating layers. Traditional epoxy systems often require several days before you can resume vehicle traffic.</p>
    <p>Temperature and humidity can also significantly affect working and curing times. Follow each product's manufacturer-specified cure schedule.</p>

    <h2>Is Epoxy Flooring Expensive?</h2>
    <p><b>Is it expensive to epoxy your floor?</b> Not necessarily, but professional systems cost more than basic floor paint.</p>
    <p>Across Canada, epoxy flooring commonly costs around C$3–C$12 per square foot. Professional installations in Surrey often fall in the middle or upper range.</p>
    <p>First, square footage alone never determines the final project price. Labor costs for concrete preparation are also a major cost variable, including Grinding, crack repairs, coating removal, and moisture treatment.</p>
    <p>Material grade and floor thickness also play a key role in the final cost. Decorative flakes, metallic effects, quartz, and premium topcoats cost more.</p>
    <p>Commercial floors may require thicker systems for carts and rolling equipment. Slip-resistant finishes can also require additional aggregates and coating layers.</p>
    <p>Keep in mind, cheap installation can become expensive when contractors cut corners on surface preparation. As a result, poor bonding may cause peeling, bubbling, or premature coating failure.</p>
    <p>Ask contractors how they prepare concrete before comparing their estimates. The coating specification matters as much as the quoted price.</p>

    <h2>Lifespan of an Epoxy Floor</h2>
    <p>One of the most common questions is, <b>"What is the lifespan of an epoxy floor?"</b> Epoxy lifespan depends on floor preparation, coating thickness, and maintenance.</p>
    <p>Residential epoxy commonly lasts several years; with quality systems, it can last up to ten years.</p>
    <p>But industrial floors can wear faster because of handling heavier loads daily.</p>
    <p>Garage floors experience different stresses from basement or showroom floors. Vehicle tires, road salts, dropped tools, and grit accelerate surface wear.</p>
    <p>Proper maintenance does not require complicated equipment or specialist cleaning products. Sweep up abrasive debris regularly and clean spills before residue builds up.</p>
    <p>Avoid dragging sharp metal objects directly across the finished surface. Protective pads can reduce scratching beneath heavy cabinets and equipment.</p>
    <p><b>What do epoxy floors look like after 5 years?</b> A well-installed floor should remain smooth, bonded, and easy to clean.</p>
    <p>Some high-traffic areas may show light scratches or reduced surface gloss. Sun-exposed sections can discolor when unsuitable topcoats were originally installed.</p>
    <p>Peeling should not be assumed automatically. Widespread delamination often shows preparation, moisture, or adhesion problems.</p>
    <p>Decorative flake systems can make minor imperfections noticeable. Their patterned finish also hides dust better than solid glossy colors.</p>
    <p>After preparation, older floors can sometimes receive another compatible protective topcoat. This can refresh appearance without replacing the entire flooring system.</p>
    <p>The best lifespan starts with choosing the right system from the start. Garage, basement, retail, and industrial floors have different performance requirements.</p>
    <p>For a floor designed around your concrete condition and daily use, discuss the project with <a href="${BASE_URL}">an experienced epoxy flooring contractor in Surrey.</a></p>
    `,
    keyTakeaways: [
      "Epoxy flooring has become a practical choice for many Surrey properties. It works well in garages, basements, workshops, warehouses, and commercial spaces.",
      "After coating, you will get a seamless surface on prepared concrete. It handles vehicle traffic, spills, abrasion, and routine cleaning effectively.",
      "Surrey's damp climate makes concrete preparation especially important before installation. Moisture problems can weaken adhesion and shorten the coating's service life.",
      "A successful epoxy floor therefore depends on more than resin quality. Concrete condition, preparation, coating thickness, and curing conditions all affect performance.",
    ],
    faqs: [],
  },
  {
    id: 2,
    slug: "tips-to-maintain-an-epoxy-floor-so-it-lasts",
    title: "Tips to Maintain an Epoxy Floor for Long-Lasting Results",
    excerpt: "Practical tips to maintain an epoxy floor that prevent scratches, remove stains, clean safely, and keep your floor looking good for years.",
    category: "",
    date: "Aug 20, 2026",
    publishedAt: "2026-08-20",
    author: "Sevenshadesepoxy",
    authorRole: "Flooring Specialists",
    image: "/images/tips-to-maintain-an-epoxy-floor-so-it-lasts.webp",
    imageAlt: "",
    metaDescription: "Practical tips to maintain an epoxy floor that prevent scratches, remove stains, clean safely, and keep your floor looking good for years.",
    metaTitle: "Tips to Maintain an Epoxy Floor for Long-Lasting",
    content: 
    `
    <h2>7 Tips: How to maintain an epoxy floor so it lasts</h2>
    <h3>1. Regular Cleaning</h3>
    <p>Do this regularly; otherwise, you may find a dull epoxy coating one day.</p>
    <p>Loose sand and grit may look harmless, but they become abrasive when shoes, tires, or equipment move across them.</p>
    <p>A soft-bristle broom or dust mop is a common option for sweeping. But a vacuum is also perfect for garage walls and corners.</p>
    <p>For routine washing, use warm water and a compatible pH-neutral floor cleaner. Follow the cleaner manufacturer's dilution instructions instead of making a stronger mixture.</p>
    <p>If you are wondering how to clean an epoxy floor, use this simple routine:</p>
    <ul>
    <li>Use a broom or vacuum to clean the epoxy floor.</li>
    <li>Mop with warm water and a suitable neutral cleaner.</li>
    <li>Gently scrub stubborn areas using a soft or medium-bristle brush.</li>
    <li>Remove dirty cleaning solution and rinse as needed.</li>
    </ul>
    <p>Textured and anti-slip floors need slightly different treatment. Their raised surface can hold dirt that an ordinary mop misses.</p>
    <p>Use a soft or medium-bristle deck brush for these areas. Larger commercial floors may benefit from an appropriate automatic floor scrubber.</p>

    <h3>2. Clean Oil and Chemical Spills Promptly</h3>
    <p>Although epoxy systems can resist common spills up to a limit. Oil, grease, fuel, and industrial chemicals should not sit unnecessarily.</p>
    <p>Blot or remove liquid before cleaning the affected area. Use a compatible degreaser when water alone cannot remove oily residue.</p>
    <p>Prompt cleaning also reduces slipping hazards in garages and workplaces. It prevents sticky residue from attracting more dust and grit.</p>
    <p>Avoid assuming every strong chemical is safe for your coating. Different epoxy and topcoat formulations have different chemical-resistance ratings.</p>

    <h3>3. Avoid Harsh and Abrasive Cleaning Methods</h3>
    <p>If you are scrubbing with a power tool, be careful. can leave fine scratches on your floor. Avoid steel wool, stiff metal brushes, and aggressive scouring pads. Choose non-abrasive tools suited to the coating's surface texture.</p>
    <p>Be careful with highly acidic or strongly alkaline cleaners. Use products recommended for resinous floors or approved by your epoxy floor installer.</p>
    <p>Pressure washing also requires special attention. It can damage coating edges and joints. Excessive pressure can worsen areas where the coating has already lost adhesion.</p>
    <p>These epoxy floor care tips matter especially for glossy floors. Fine scratches become more noticeable when light reflects across a smooth finish.</p>

    <h3>4. Protect the Floor From Scratches and Impact Damage</h3>
    <p>Epoxy is hard, but that doesn't mean it's scratch-proof. Even a small stone trapped beneath equipment during moving can act like sandpaper.</p>
    <p>So it is better to place protective pads beneath heavy cabinets, equipment, and machinery. Avoid dragging metal shelving, appliances, or sharp objects across the coating.</p>
    <p>For <b>epoxy garage floor maintenance</b>, pay particular attention to entrance areas. Road grit, salt, and dirt often collect where vehicles enter.</p>
    <p>A suitable entrance mat can capture much of that material. Make sure the mat itself does not trap moisture against damaged coating.</p>
    <p>Dropped tools can crack a coating's upper layer and impact the underlayer or the concrete. Inspect damaged spots rather than leaving exposed concrete unprotected.</p>

    <h3>5. Give New Epoxy Enough Time to Cure</h3>
    <p>A newly installed epoxy floor may feel hard before reaching full performance. Cure times vary widely by product and environmental conditions.</p>
    <p>Follow the installer's schedule before allowing foot traffic, vehicles, or heavy equipment. Do not rely on touch alone to decide whether the floor has cured.</p>
    <p>Temperature can significantly change the curing process. Cooler conditions generally slow curing, while the exact limits depend on the coating system.</p>
    <p>New coatings also develop their chemical and abrasion resistance during curing. Treating the floor gently during this period helps prevent avoidable marks.</p>
    <p>After the coating, ask the contractor when your floor will be ready for foot traffic, vehicle parking, and equipment replacement.</p>
    
    <h3>6. Regular Inspection for Wear, Cracks, Peeling, and Dull Areas</h3>
    <p>Early detection of problems can help to reduce repair costs. Do a quick inspection of entrances, vehicle paths, work areas, and floor joints from time to time.</p>
    <p>Watch for scratches, chips, peeling edges, bubbles, exposed concrete, or unusual discoloration. Cracks may also originate from movement in the concrete underneath.</p>
    <p>Do not simply coat over a peeling or cracked section. Identify the cause before applying another coating layer.</p>

    <h3>7. Recoat the Surface If Needed</h3>
    <p>You don't need to replace an epoxy floor just because ause its appearance changes. A suitable new topcoat may restore protection when the underlying system remains sound. At a time cleaning isn't enough to restore the finish. Then scratching, a dull floor, peeling, or exposed damaged areas deserve a professional assessment.</p>
    <p>Recoating requires proper cleaning and mechanical preparation for reliable adhesion. Applying a fresh coating directly over contamination can create another failure.</p>
    <p>If you need it, <a href="${BASE_URL}">an epoxy floor contractor in Surrey</a> can inspect the existing system and recommend a better solution.</p>

    <h2>Keep Maintenance Simple and Consistent</h2>
    <p>Although epoxy floors do not need hard daily care. Remove abrasive dirt, clean spills promptly, use compatible products, and protect high-wear areas.</p>
    <p>Occasional inspections can also reveal damage before it spreads. With sensible maintenance and timely repairs, your floor can retain its appearance and performance for years.</p>
    <p>If your epoxy floor has scratches, peeling areas, stains, or a worn topcoat, have a professional assess the surface before choosing a repair or replacement.</p>
    `,
    keyTakeaways: [
      "A good epoxy floor can handle vehicles, foot traffic, tools, and everyday spills. That durability, however, doesn't mean you should ignore the surface.",
      "Regular epoxy floor maintenance prevents grit, chemicals, and small scratches from damaging the finish. The right routine is surprisingly simple and requires very little specialized equipment.",
      "Whether you have coated your garage, basement, workshop, or commercial floor, these practical steps will help protect it.",
    ],
    faqs: [],
  },
  {
    id: 3,
    slug: "epoxy-installation-process",
    title: "Epoxy Installation Process: What Happens Before Coating?",
    excerpt: "Guide for the epoxy installation process from concrete Preparation to curing, with practical steps",
    category: "",
    date: "Sep 25, 2026",
    publishedAt: "2026-09-25",
    author: "Sevenshadesepoxy",
    authorRole: "Flooring Specialists",
    image: "/images/epoxy-installation-process.webp",
    imageAlt: "",
    metaDescription: "Guide for the epoxy installation process from concrete Preparation to curing, with practical steps",
    metaTitle: "A Complete Epoxy Installation Process: Step-by-Step Guide",
    content: 
    `
    <p>Before opening a bucket of epoxy, the installer needs to understand the concrete.</p>
    <p>Is the slab new or old? Are there cracks, oil stains, existing coatings, moisture concerns, or damaged sections?</p>
    <p>These conditions determine how to prepare the floor. They may also affect which coating system is suitable.</p>
    <p>Concrete moisture deserves particular attention. Excess moisture moving through a slab can interfere with certain coating systems and contribute to adhesion problems.</p>
    <p>The installer should follow the moisture limits and preparation requirements specified by the chosen product manufacturer.</p>

    <h2>Step 1: Prepare the Concrete Surface</h2>
    <p>Ask an experienced installer which stage matters most; surface Preparation is usually near the top of the list.</p>
    <p>A clean, properly prepared surface supports reliable adhesion. y Normally, sweeping and washing a floor is rarely enough for coating.</p>
    <p>Mechanical Preparation commonly involves diamond grinding or shot blasting. The exact method depends on the slab, coating specification, and required concrete surface profile. Grinding removes weak surface material, contamination, and some existing coatings. It also creates a texture that allows the coating system to bond properly.</p>
    <p>Then thoroughly remove the dust using appropriate extraction equipment.</p>

    <h3>Why Preparation Cannot Be Rushed</h3>
    <p>A poorly prepared floor can look perfectly acceptable at first. Problems may only become obvious after the floor enters regular service.</p>
    <p>This is especially relevant for Surrey garages. Vehicles can bring water, road debris, and de-icing materials onto the floor during wetter and colder periods.</p>
    <p>Good Preparation gives the coating the foundation it needs to handle those conditions.</p>

    <h2>Step 2: Repair Cracks, Pits, and Damaged Concrete</h2>
    <p>Grinding often reveals defects that were difficult to see beforehand.</p>
    <p>Evaluate cracks, holes, spalling, and pitted areas before coating. Suitable repair materials depend on the type and extent of the damage.</p>
    <p>A <a href="${BASE_URL}">contractor</a> may open and clean a crack before filling it. Damaged sections can also require patching and leveling.</p>
    <p>Not every crack behaves the same way. Don't hide a moving or structural crack beneath epoxy and forget it.</p>
    <p>The aim is to create a sound substrate, not merely a floor that looks smooth before coating.</p>

    <h2>Step 3: Apply the Specified Primer</h2>
    <p>Many professional epoxy systems use a primer over prepared concrete.</p>
    <p>Primer can help wet the prepared substrate and establish a suitable base for subsequent layers. However, the exact primer and application method depend on the complete flooring system.</p>
    <p>This is where an Epoxy Installation guide should never replace the manufacturer's technical data sheet. Mixing ratios, coverage rates, recoat windows, temperatures, and substrate requirements vary between products.</p>
    <p>Once the primer is applied, it must reach the required condition before you begin the next coat.</p>

    <h2>Step 4: Mix and Apply the Epoxy</h2>
    <p>Epoxy is normally supplied as separate resin and hardener components. Combining them starts the chemical reaction that cures the material.</p>
    <p>Installers should not estimate the ratio by eye.</p>
    <p>Installers must measure and mix components according to the product instructions. Mixing time and technique also matter because poorly combined material can cure unevenly.</p>
    <p>Once mixed, epoxy has a limited working period called pot life. Installers therefore prepare quantities they can apply within the product's specified working time.</p>
    <p>The material is then distributed across the floor at the required coverage or thickness.</p>
    <p>Depending on the system, you may use rollers, squeegees, notched tools, or other equipment.</p>

    <h2>Step 5: Add Decorative Flakes or Other Finishes</h2>
    <p>Not every epoxy floor has to be a plain solid color.</p>
    <p>Decorative flakes are popular in garages because they add visual texture. Broadcast aggregates can also contribute texture and help create the required finish.</p>
    <p>Commercial installations can require different finishes. Such spaces may prioritize wear resistance, cleanability, slip resistance, or chemical performance.</p>
    <p>The coating build should therefore match how the space will actually be used.</p>

    <h2>Step 6: Apply the Protective Topcoat</h2>
    <p>The visible epoxy layer is not necessarily the final layer.</p>
    <p>Many flooring systems use a compatible topcoat to provide the required finish and additional protection. Depending on the specification, the finish coat may be epoxy, polyurethane, polyaspartic, or another compatible technology.</p>
    <p>The best choice depends on abrasion, chemicals, UV exposure, traffic, and desired appearance.</p>
    <p>You may also incorporate slip-resistant aggregate where you need extra traction. For commercial properties, base this decision on the operating environment, rather than appearance alone.</p>

    <h2>Step 7: Let the Epoxy Floor Cure Properly</h2>
    <p>One of the most common questions about installing epoxy concerns curing time.</p>
    <p>There is no reliable universal answer such as "wait exactly 24 hours."</p>
    <p>Epoxy products have different cure schedules. Temperature, substrate conditions, humidity, coating thickness, and formulation can affect when the floor is ready for use.</p>
    <p>A surface may feel dry before it is ready for vehicle or equipment traffic.</p>
    <p>The product data sheet should determine when people can walk on the floor and when vehicles, machinery, shelving, or other loads can return.</p>
    <p>Cool conditions can extend curing times. That makes temperature control particularly relevant for installations in unheated BC garages during colder weather.</p>

    <h2>DIY vs Professional Epoxy Installation</h2>
    <p>DIY epoxy kits can work for appropriate projects, but homeowners should understand where the difficulty lies.</p>
    <p>Rolling the coating is only one part of the job. Assessing concrete, controlling dust, mechanically profiling the slab, repairing damage, managing moisture concerns, and staying within product working times require more planning.</p>

    <h2>Common Epoxy Installation Mistakes</h2>
    <p>Some avoidable errors can lead to coating problems later.</p>
    <ul>
    <li>Applying epoxy over poorly prepared concrete</li>
    <li>Ignoring moisture conditions</li>
    <li>Coating over cracks without assessing them</li>
    <li>Mixing resin and hardener incorrectly</li>
    <li>Exceeding the product's working time</li>
    <li>Allowing traffic before sufficient curing</li>
    <li>Choosing a coating system unsuitable for the space</li>
    </ul>
    <p>The lesson is straightforward: epoxy performance depends on the entire system and installation process, not simply the product in the bucket.</p>

    <h2>What Should a Good Epoxy Installation Look Like?</h2>
    <p>A professionally completed floor should have consistent coverage and a finish appropriate for its intended use.</p>
    <p>Edges, corners, repaired areas, joints, and transitions deserve the same attention as the room's center.</p>
    <p>More importantly, the coating should be properly bonded to a sound substrate.</p>
    <p>That quality starts during Preparation, long before anyone sees the finished floor.</p>

    <h2>The Epoxy Installation Process Is Built From the Ground Up</h2>
    <p>The epoxy installation process succeeds or fails largely on what happens before and between the visible coating layers.</p>
    <p>Proper concrete assessment, mechanical Preparation, repairs, correct mixing, appropriate coating selection, and sufficient curing all contribute to the final result.</p>
    <p>For Surrey homeowners and businesses, understanding these stages also makes it easier to compare contractors. Ask how the concrete will be prepared, how moisture concerns will be addressed, which coating system will be used, and when the finished floor can safely return to service.</p>
    <p>If you are planning a garage, basement, retail, warehouse, or commercial flooring project, getting the slab assessed first can help determine the right system for the space.</p>
    `,
    keyTakeaways: [
      "A finished epoxy floor may look simple. The work underneath it is not.",
      "Epoxy installation involves much more than rolling resin onto concrete. The slab must be inspected, prepared, repaired, coated, and given enough time to cure.",
      "Miss one of those stages and problems can appear later. Peeling, bubbles, uneven color, and poor adhesion often begin below the visible surface.",
      "This guide explains how epoxy is professionally installed in homes and commercial properties, including projects in Surrey, BC.",
    ],
    faqs: [
      {
        question: "Can epoxy be installed over old concrete?",
        answer: "Yes, but after assessing and properly addressing existing coatings, contamination, cracks, surface damage, and moisture conditions.",
      },
      {
        question: "Can epoxy be applied directly over concrete?",
        answer: "Yes, but only certain products and systems allow it under specified conditions. Always follow the technical requirements for the complete coating system.",
      },
      {
        question:"Can I install an epoxy floor myself?",
        answer: "DIY installation is possible for suitable floors and products. However, concrete Preparation, moisture problems, repairs, mixing, working time, and coating thickness can make professional projects considerably more demanding than ordinary painting.",
      },
      {
        question:"Is epoxy flooring suitable for commercial properties?",
        answer: "Yes. Epoxy flooring systems are used in warehouses, manufacturing areas, garages, workshops, and other commercial environments. Specify the system for the expected traffic, chemicals, cleaning procedures, and operating conditions.",
      },

    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((post) => post.slug === currentSlug);

  const rest = blogPosts.filter((post) => post.slug !== currentSlug);
  if (!current) return rest.slice(0, limit);

  const sameCategory = rest.filter((post) => post.category === current.category);
  const others = rest.filter((post) => post.category !== current.category);

  return [...sameCategory, ...others].slice(0, limit);
}

