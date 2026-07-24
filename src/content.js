// ─────────────────────────────────────────────────────────────
// Edit only this file to update the whole site.
// Content sourced directly from Yoonju Lee's portfolio case studies.
// Rich text supports lightweight markup: **bold** and *italic*.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Yoonju',
  fullName: 'Yoonju Lee',
  role: 'a UX/UI designer',
  emoji: '👋',
  location: 'Vancouver, BC',
  email: 'lovingjoo@gmail.com',
  available: true,
  availableText: 'Open to opportunities · 2024 to 2025',
}

// Top navigation
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// Social links
export const socials = [
  { label: 'Email', href: 'mailto:lovingjoo@gmail.com', short: '✉' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yoon-ju-lee/',
    short: 'in',
  },
]

// Hero — big greeting headline + floating sticker pills
export const hero = {
  titleTop: "Hello! I'm Yoonju,",
  titleBottom: 'a UX/UI designer.',
  sub: 'I craft **thoughtful digital experiences** rooted in **empathy** and **clarity**. I design for people who are carrying a lot, in the moments that matter most.',
  stickers: [
    { label: 'Empathy-led Design', tint: 'blue', side: 'left' },
    { label: 'Inclusive Products', tint: 'pink', side: 'right' },
  ],
}

// Stacked card deck under the hero — quick links to main sections
export const deck = [
  {
    title: 'My Portfolio',
    body: 'Six case studies and the question at the center of each.',
    href: '#works',
    tint: 'mint',
  },
  {
    title: 'About Me',
    body: 'A closer look at my background, skills, and how I work.',
    href: '#about',
    tint: 'yellow',
  },
  {
    title: 'Contact Me',
    body: 'Let’s build something meaningful together.',
    href: '#contact',
    tint: 'pink',
  },
]

// Selected works — each links to a full case study below.
export const works = [
  {
    slug: 'galaxy',
    num: '01',
    name: 'Galaxy Auto Detailing',
    tags: 'Web Redesign · UX Audit · Small Business',
    tint: 'yellow',
    image: '/images/work-galaxy.jpg',
    imageFit: 'cover',
    headline:
      'A galaxy-themed detailing site, rebuilt to sell *the work,* not the theme.',
  },
  {
    slug: 'pawhaus',
    num: '02',
    name: 'Pawhaus',
    tags: 'Brand & Web · Pet Care · E-commerce',
    tint: 'yellow',
    image: '/images/work-pawhaus.jpg',
    imageFit: 'cover',
    headline: 'A pet-shop brand and store that treats pets like *family.*',
  },
  {
    slug: 'loopin',
    num: '02',
    name: 'Loopin',
    tags: 'Mobile · Mental wellness · 0 to 1 · 13 weeks',
    tint: 'pink',
    image: '/images/work-loopin.jpg',
    imageFit: 'contain',
    headline:
      'An app that helps ADHD kids and their parents feel *connected,* not just managed.',
  },
  {
    slug: 'receiptly',
    num: '03',
    name: 'Receiptly',
    tags: 'B2B SaaS · AI · Web & Mobile · 13 weeks',
    tint: 'blue',
    image: '/images/work-receiptly.jpg',
    imageFit: 'cover',
    headline:
      "Solo founders don't need better bookkeeping. They need to *trust* the numbers they show investors.",
  },
  {
    slug: 'upzy',
    num: '04',
    name: 'Upzy',
    tags: 'Marketplace · Sustainability · Consumer · 13 weeks',
    tint: 'lavender',
    image: '/images/work-upzy.jpg',
    imageFit: 'cover',
    headline:
      'What if "sustainable fashion" started with the *tailor down the street?*',
  },
  {
    slug: 'visit',
    num: '05',
    name: 'The Visit Magazine',
    tags: 'Editorial · Digital · InDesign · 9 pages',
    tint: 'mint',
    image: '/images/work-visit.jpg',
    imageFit: 'contain',
    headline:
      'Designing a magazine that *smells like Tofino,* all salt, cedar, and slow mornings.',
  },
]

// Full case studies, keyed by slug. Rendered in a full-screen overlay
// when a work card is clicked.
export const caseStudies = {
  galaxy: {
    eyebrow: 'Galaxy Auto Detailing · Website Redesign',
    tint: 'yellow',
    title: 'The galaxy theme explained the name, *not the business.*',
    sub: "Galaxy Auto Detailing is a certified detailing shop in Richmond, BC. Its original site set bright blue text over a starry space background that looked striking but buried the cars, the services, and the trust signals. I audited every page, then rebuilt the design system around the work itself.",
    meta: [
      { label: 'Project', value: 'Website redesign · 4 pages · Solo' },
      { label: 'Role', value: 'UX Audit · UI Redesign · Information Architecture' },
      { label: 'Industry', value: 'Automotive Services · Small Business' },
      { label: 'Tools', value: 'Figma · Illustrator' },
    ],
    sections: [
      {
        eyebrow: '01 · Why this problem matters',
        heading: 'A detailing site has one job: *make people trust you with their car.*',
        body: [
          'The original site ran a galaxy/star background behind everything, with bright blue (#008CF8) headings on black and green highlight text. The space theme connected to the "Galaxy" name, but it had nothing to do with car detailing, and the low contrast made the content genuinely hard to read.',
          'Every headline used the same bright blue font at similar sizes, so visitors couldn\'t tell **which services were available**, what was important, or where to click. The visual noise made the page feel heavy and unstructured. It was the kind of page people skip instead of read.',
          "For a small business that lives on bookings, that's not a styling problem. **It's a revenue problem.**",
        ],
      },
      {
        eyebrow: '02 · Auditing the old site',
        heading: 'Section by section, the same three failures *kept repeating.*',
        body: [
          'I walked through every page, from home and services to the gallery, blog, and contact, and logged the issues. They clustered into three patterns:',
        ],
        cards: [
          {
            title: 'Finding 1: The one CTA was buried.',
            meta: 'Audit · Conversion',
            body: 'The "Buy Gift Certificates Online" button sat in the navigation with an outlined border that broke consistency instead of drawing attention. The hero slideshow floated car photos over galaxy noise, so *the action never stood out.*',
          },
          {
            title: 'Finding 2: No visual hierarchy anywhere.',
            meta: 'Audit · Readability',
            body: 'Identical bright blue headlines, inconsistent image sizes, cramped card spacing, a clashing yellow banner, and promotions dumped into one grid with no categories. Visitors couldn\'t process what they were looking at.',
          },
          {
            title: 'Finding 3: Trust surfaces were failing.',
            meta: 'Audit · Credibility',
            body: 'Testimonials were small green text on a starry background with no card structure. The address hid in tiny type at the bottom of the page, far from the contact form. The proof the business had earned was *unreadable.*',
          },
        ],
        callout: 'A striking theme still has to *sell the work.*',
      },
      {
        eyebrow: '03 · The new design system',
        heading: 'High contrast, one accent, and red that *always means action.*',
        body: [
          'I replaced the starry canvas with a professional dark system: **deep black (#000000)** for clean backdrops, **charcoal gray (#242424)** section bands to create visual separation, and **white text** throughout for clear readability.',
          '**Bright red (#FF0000)** is reserved exclusively for actions like "Book Online Service," "Buy Gift Certificates Online," "Book Now," and "Submit." If it\'s red, you can click it, and it matters.',
          'Typography moved to **Roboto** with an NT Wagner logotype. Bold, larger headings create hierarchy, and regular body text keeps reading easy. The galaxy background became a clean, high-quality hero photo of a car actually being detailed.',
        ],
      },
      {
        eyebrow: '04 · Page-by-page decisions',
        heading: 'Every page got a clear job *and a clear next step.*',
        body: [
          'I focused the redesign on the four pages that carry the most weight. The landing page, services, gallery, and blog were each rebuilt around what its visitor is trying to do:',
        ],
        cards: [
          {
            title: 'Landing: two CTAs, one story',
            meta: 'Redesign · Home',
            body: 'A real detailing hero photo with two prominent red CTAs. Services summarized in readable cards with "Learn More." A dedicated Before & After section with labeled tags, a Latest Projects strip, star-rated reviews with customer photos, and contact info placed beside the form.',
          },
          {
            title: 'Services: from starfield to structure',
            meta: 'Redesign · Services',
            body: 'Nine services in a consistent card grid with matching photo ratios and clear labels, followed by deep-dive sections for Interior, Exterior, and Complete Care packages, each with its own "Book Now."',
          },
          {
            title: 'Gallery: projects, not a photo dump',
            meta: 'Redesign · Gallery',
            body: 'The endless uncategorized image wall became filterable project cards. Each one has a title, a description, and tags like Interior Detail, Deep Clean, and Ceramic Coating, so customers can see *what work produced the result.*',
          },
          {
            title: 'Blog: findable, skimmable, dated',
            meta: 'Redesign · Blog',
            body: 'The cluttered "News Blog" grid became a searchable card layout with categories, consistent thumbnails, dates, and pagination, so the car-care tips are something a visitor can actually browse.',
          },
        ],
      },
      {
        eyebrow: "05 · Results, learnings, what's next",
        heading: 'What changed because of this work.',
        impact: [
          {
            num: 'Result 01',
            stat: 'Two clear CTAs',
            label: 'The one buried navigation button became two clear red actions for *booking and gift certificates,* and they now repeat on every key page so visitors always know how to act.',
          },
          {
            num: 'Result 02',
            stat: '4 pages',
            label: 'The landing, services, gallery, and blog pages were rebuilt under one design system, so each service, project, and post now has a findable home.',
          },
          {
            num: 'Result 03',
            stat: 'One system',
            label: 'Colors, type, buttons, and card layouts are unified into one language. Red always means action, gray bands mark a new section, and tags explain the work behind each result.',
          },
        ],
        body: [
          "**Learning.** A theme is not a brand. The galaxy visuals were the site's most distinctive feature and also its biggest liability, because distinctiveness only helps when it points at what the business actually sells. Contrast, hierarchy, and honest labels do more for trust than any decoration.",
          '**Next.** If shipped: measure clicks on the two CTAs against the old single button, track gallery filter usage to learn which services customers browse most, and A/B test the hero copy.',
        ],
      },
    ],
    // Scrolling browser mockups with a before/after toggle. Add `gallery`
    // entries for gallery + blog pages once those exports are ready.
    screens: [
      {
        label: 'Landing page',
        url: 'galaxyautodetailing.com',
        before: '/images/gx-landing-before.jpg',
        after: '/images/gx-landing-after.jpg',
      },
      {
        label: 'Services',
        url: 'galaxyautodetailing.com/services',
        before: '/images/gx-service-before.jpg',
        after: '/images/gx-service-after.jpg',
      },
      {
        label: 'Gallery',
        url: 'galaxyautodetailing.com/gallery',
        before: '/images/gx-gallery-before.jpg',
        after: '/images/gx-gallery-after.jpg',
      },
      {
        label: 'Blog',
        url: 'galaxyautodetailing.com/blog',
        before: '/images/gx-blog-before.jpg',
        after: '/images/gx-blog-after.jpg',
      },
    ],
  },

  pawhaus: {
    eyebrow: 'Pawhaus · Pet Shop Website',
    tint: 'yellow',
    title: 'A pet-shop brand as *warm and playful* as bringing a pet home.',
    sub: 'Pawhaus (Paw + Haus, "the house of paws") is a pet-care e-commerce concept I designed solo for a school brief. I built the brand and the landing page together, so the identity and the shopping experience feel like one friendly place that treats pets like family.',
    meta: [
      { label: 'Project', value: 'School project · Solo' },
      { label: 'Role', value: 'Branding · UI / Web Design' },
      { label: 'Industry', value: 'Pet Care · E-commerce' },
      { label: 'Tools', value: 'Figma' },
    ],
    sections: [
      {
        eyebrow: '01 · The idea',
        heading: 'Pawhaus is *Paw + Haus,* a home for pet people.',
        body: [
          'The name pairs "paw" with the German "haus" (house), so the whole brand leans into one promise: a warm, welcoming home for you and your pet. The tagline says it plainly: **"We make pet care easy and fun."**',
          'Every choice after that serves the same feeling: friendly, rounded, and playful, but still trustworthy enough that people will hand over their card to care for a member of the family.',
        ],
      },
      {
        eyebrow: '02 · The palette',
        heading: 'Warm cream, a *confident indigo,* and playful orange.',
        body: [
          'The colours balance play and trust. A soft cream sets a calm, warm ground, indigo carries the brand and the primary actions, and orange and gold bring the fun that pet brands live on.',
        ],
        palette: [
          { hex: '#4A5AE9', name: 'Indigo' },
          { hex: '#FF9500', name: 'Orange' },
          { hex: '#EFC356', name: 'Gold' },
          { hex: '#FFFAE5', name: 'Cream' },
          { hex: '#FFFFFF', name: 'White' },
        ],
      },
      {
        eyebrow: '03 · Type & logo',
        heading: 'A rounded display face, a *calm body face,* and a paw.',
        body: [
          '**Madimi One** sets the logo and headlines. Its soft, rounded letters feel approachable and a little bouncy, exactly the tone a pet brand wants. **Poppins** handles body copy so product details and descriptions stay clean and easy to read.',
          'The logo joins a solid paw print to the **Pawhaus** wordmark, and paw prints and bone shapes carry through the site as friendly background motifs.',
        ],
        cards: [
          {
            title: 'Madimi One',
            meta: 'Display · Logo & titles',
            body: 'Rounded, friendly, and a little playful. Used for the logo, section titles, and any moment that should feel warm.',
          },
          {
            title: 'Poppins',
            meta: 'Body · Product & UI text',
            body: 'A clean geometric sans for descriptions, prices, and navigation, so the fun display face never gets in the way of shopping.',
          },
          {
            title: 'Paw & bone motifs',
            meta: 'Graphic language',
            body: 'Soft paw prints and a bone shape repeat as background accents, tying every section back to the brand without shouting.',
          },
        ],
      },
      {
        eyebrow: '04 · The landing page',
        heading: 'One scroll from *"hello" to ready-to-shop.*',
        body: [
          'The page moves a visitor from a warm first impression to a confident shopper. A cheerful hero ("We make pet care easy and fun") leads into **browse-by-category**, featured **products**, an **about + stats** block that builds trust (happy clients, brands, products, years in business), a **best-sellers** grid, and a **news & blog** row of pet-care tips.',
          'Products lead with big, bright photos and clear prices, categories sit one tap away, and social proof like reviews and numbers lands exactly where hesitation usually shows up.',
        ],
      },
      {
        eyebrow: '05 · What ties it together',
        heading: 'A system, not just a *pretty page.*',
        body: [
          '**Learning.** A consumer brand lives or dies on consistency. Fixing the palette, the two typefaces, the rounded shapes, and the paw motif up front meant every new section already knew how to look, so the whole site reads as one happy place.',
          '**Next.** Extend the system into the full shop and product pages, design the cart and checkout in the same warm language, and build a small component library so the brand holds together as the catalogue grows.',
        ],
      },
    ],
    // Single full-page mockup shown in a browser frame the visitor scrolls.
    showcase: {
      label: 'Pawhaus landing page',
      url: 'pawhaus.com',
      src: '/images/pawhaus-home.jpg',
    },
  },

  loopin: {
    eyebrow: 'Loopin · 2024',
    tint: 'pink',
    title: 'A mobile app that helps ADHD kids and their parents *feel connected* again.',
    sub: 'Loopin helps parents of neurodivergent kids strengthen their bond through fun daily routines and activities. The struggle runs both ways, so the app cares for two people at once: the child who needs to be understood, and the parent who needs support.',
    meta: [
      { label: 'Duration', value: '13 weeks' },
      { label: 'Role', value: 'UX/UI Design · CalmNest feature owner' },
      { label: 'Industries', value: 'Health & Wellness · Family Tech' },
      { label: 'Tools', value: 'Figma · Illustrator · After Effects' },
    ],
    sections: [
      {
        eyebrow: '01 · Why this problem matters',
        heading: "ADHD is a *family* experience, not just a child's diagnosis.",
        body: [
          'About **500,000 children in Canada** have ADHD, and roughly **70% of their parents** describe themselves as overwhelmed. The diagnosis sits with the child, but the daily weight is carried by the whole household.',
          'Most ADHD apps only look at one side of that. They track the child\'s behavior and hand the parent a dashboard, treating the parent as an administrator rather than a person who is also struggling.',
          'Loopin started from a different belief: to really help the child, you have to **support the child and the parent together,** because what they most need is each other.',
        ],
      },
      {
        eyebrow: '02 · Defining the real problem',
        heading: 'Two people, *two kinds of overwhelm,* one frayed connection.',
        body: [
          'Research surfaced two truths that lived side by side. The **child** felt misunderstood, overwhelmed, and like they were constantly struggling. The **parent** felt overwhelmed too, but also disconnected and unsupported in the everyday.',
          'The problem was never only the child\'s behavior or only the parent\'s stress. It was the **bond between them** wearing thin under both. So we reframed the brief from "manage the child" to "help the child and the parent reconnect."',
        ],
        callout: '"Connection, not perfection, is what truly changes a child\'s world."',
      },
      {
        eyebrow: '03 · The solution',
        heading: 'Two features for *two people,* joined by one goal.',
        body: [
          'Loopin gives each side of the relationship its own space, then brings them back together through shared routines and a mood history they can both see.',
        ],
        cards: [
          {
            title: 'Moodies: a voice for the child',
            meta: 'Feature · Child-facing',
            body: 'The child shares how they feel through playful emoji or a quick voice note. It turns a hard-to-explain feeling into something the parent can actually see and understand.',
          },
          {
            title: 'CalmNest: a moment for the parent',
            meta: 'Feature · Parent-facing',
            body: 'A private self-care check-in where the parent logs their own mood with a slider or voice journal, and de-stresses before showing up for their child. Support for the supporter.',
          },
          {
            title: 'Shared routines: the bond itself',
            meta: 'Feature · Together',
            body: 'Fun daily routines and activities the two do together, plus a mood history they share, so connection becomes a small everyday habit rather than one big repair.',
          },
        ],
      },
      {
        eyebrow: '04 · My contribution',
        heading: 'I owned the *CalmNest* feature end to end.',
        body: [
          'On our team, the part I designed from research through final UI was **CalmNest**, the parent-facing side of Loopin. It answers the question the child-facing features cannot: who is looking after the parent?',
          'I shaped it as a calm, low-pressure check-in instead of another task. A **weekly mood tracker** lets parents log how they feel each day with a simple emoji slider, so they can notice their own patterns the way Moodies surfaces the child\'s. A **voice journal** lets them offload a hard moment out loud when typing is too much.',
          'Around those, I laid out a small **resource library** of audio books, quick tips, saved items, and resources, all framed by the line that set the tone for the whole feature: *"Connection, not perfection, is what truly changes a child\'s world."*',
        ],
      },
      {
        eyebrow: '05 · How I validated it',
        heading: 'Testing with parents confirmed the *two-sided* bet.',
        body: [
          'We ran concept and prototype sessions with parents, comparing a traditional child-only tracker against the two-sided Loopin approach.',
          'Parents consistently chose the version that made room for them too. Giving the child a voice through Moodies and the parent a moment through CalmNest was what made the app feel like it understood their actual life, not just their child\'s symptoms.',
        ],
      },
      {
        eyebrow: "06 · Results, learnings, what's next",
        heading: 'What changed because of this work.',
        impact: [
          {
            num: 'Result 01',
            stat: 'Two-sided',
            label: 'The final design cares for the child and the parent as equal users, reframing an ADHD "tracking" app into a relationship app.',
          },
          {
            num: 'Result 02',
            stat: '5 / 5',
            label: 'Test parents said a space of their own was what would make them open the app at all, so CalmNest earned its place beside Moodies.',
          },
          {
            num: 'Result 03',
            stat: 'v2 roadmap',
            label: 'A parent-to-parent community is planned for v2, extending the same idea that no one in an ADHD family should feel unsupported.',
          },
        ],
        body: [
          '**Learning.** Designing CalmNest taught me to design for an exhausted parent without adding one more task to their day. Every interaction had to feel like relief, not homework, which reshaped how I approach emotional, low-pressure UX.',
          '**Next.** Test the CalmNest voice journal with parents in their hardest moments, not only calm ones, and pilot the shared routines with real families to see whether daily connection moments actually ease conflict.',
        ],
      },
    ],
    // Finished screens, grouped by feature. Moodies is the child-facing side
    // of Loopin; CalmNest is the parent-facing feature Yoonju owned end to end.
    slideGroups: [
      {
        title: 'Moodies',
        shots: [
          {
            src: '/images/loopin-moodies-1.jpg',
            label: 'Welcome and account',
            hint: 'The Loopin splash screen and a simple sign-up for parents.',
          },
          {
            src: '/images/loopin-moodies-2.jpg',
            label: 'Avatar and child profiles',
            hint: 'A child picks a playful avatar, and a parent adds each kid to the family.',
          },
        ],
      },
      {
        title: 'CalmNest',
        shots: [
          {
            src: '/images/loopin-calmnest-1.jpg',
            label: 'Mood tracker and daily check-in',
            hint: 'A weekly emoji slider for the parent, beside a gentle voice check-in.',
          },
          {
            src: '/images/loopin-calmnest-2.jpg',
            label: 'Resource library, audio books',
            hint: 'Calming reads and audio a parent can turn to in a hard moment.',
          },
          {
            src: '/images/loopin-calmnest-3.jpg',
            label: 'Tips, saved and sorted',
            hint: 'Shared parenting tips like "The Power of Positive Reinforcement."',
          },
        ],
      },
      {
        title: 'Loopin moments',
        shots: [
          {
            src: '/images/loopin-moment-1.jpg',
            label: 'Routines home and detail',
            hint: 'Scheduled loops and recommendations, with each routine opened into its steps.',
          },
          {
            src: '/images/loopin-moment-2.jpg',
            label: 'Steps and rewards',
            hint: 'A loop walks the child through simple steps, then celebrates with a badge.',
          },
          {
            src: '/images/loopin-moment-3.jpg',
            label: 'Build your own routine',
            hint: 'A parent adds each step with a timer and a video, audio, or photo cue.',
          },
        ],
      },
    ],
  },

  receiptly: {
    eyebrow: 'Receiptly · 2024',
    tint: 'blue',
    title: 'An AI expense tool that worked. I tested whether people could *actually read it.*',
    sub: 'Receiptly automates expense tracking for startups and small businesses, from AI receipt categorization to investor-ready reports. I ran a six-person usability study to find where the experience helped and where it quietly lost people.',
    meta: [
      { label: 'Duration', value: '13 weeks' },
      { label: 'Role', value: 'UX/UI Design · Usability Research' },
      { label: 'Industries', value: 'Fintech · AI products · B2B SaaS' },
      { label: 'Tools', value: 'Figma · Illustrator · Jira · Slack' },
    ],
    sections: [
      {
        eyebrow: '01 · Why this matters',
        heading: 'Automation only helps if people can *see it working.*',
        body: [
          'Receiptly promises to take the busywork out of expenses for startups and small businesses. You upload a receipt, the AI categorizes it, and the numbers roll up into investor-ready reports. The engine was in place. What we did not know yet was whether the experience around it actually felt clear.',
          'So the goal of this study was simple and honest: put the product in front of real people, watch them upload receipts and review reports, and surface the usability issues, pain points, and moments of doubt before they reached customers.',
          'In a financial product, that clarity is not a nice to have. If someone cannot tell whether the AI did its job, they stop trusting the numbers, and the automation loses its whole point.',
        ],
      },
      {
        eyebrow: '02 · Who I tested with',
        heading: 'Six people, *two everyday tasks.*',
        body: [
          'I ran moderated sessions with **six participants**, one UI designer and instructor plus five students, and gave each of them the two tasks the product is built around: **upload a receipt** and **review a financial report.** Then I watched for where they hesitated.',
          'The pain points clustered quickly. Confusing UI and unclear success messages. An **"Add more"** button nobody could read. Trouble tracking spending trends. A wish for better filters and search. Different people, the same handful of snags.',
        ],
        callout: 'The engine worked. The experience around it was where people got lost.',
      },
      {
        eyebrow: '03 · Area 1 · Uploading a receipt',
        heading: 'The upload flow *hid its own feedback.*',
        body: [
          'The first task was the one people would do every day. Three findings came out of it, and two of them were high impact:',
        ],
        cards: [
          {
            title: 'Upload area is easy to miss',
            meta: 'Finding 01 · Impact High',
            body: 'On the dashboard, the upload receipt area did not stand out, so people were unsure where to begin. **Recommendation:** give the upload zone a clearer, more visible treatment in the UI.',
          },
          {
            title: '"Needs attention" is unclear',
            meta: 'Finding 02 · Impact Medium',
            body: 'The **"Needs attention"** status did not explain itself. Was it the AI\'s doing, a missing field, or the user\'s mistake? **Recommendation:** add a tooltip that explains why a receipt needs manual review.',
          },
          {
            title: 'The success message sits too far away',
            meta: 'Finding 03 · Impact High',
            body: 'After a receipt was categorized, the success notification appeared up in a corner, far from where people were looking. **Recommendation:** move the confirmation closer to the action and make it more visible.',
          },
        ],
      },
      {
        eyebrow: '04 · Area 2 · Reports and insights',
        heading: 'The reports were valued, but *hard to bend.*',
        body: [
          'The second task was reviewing a financial report. People liked what was there, and still hit three clear walls:',
        ],
        cards: [
          {
            title: '"Add more" does not say what it does',
            meta: 'Finding 01 · Impact High',
            body: 'On Reports and Insights, the **"Add more"** button was the most misread control in the study. **Recommendation:** rename it to something like **"Edit Metrics"** or **"Modify Report"** so the label matches the action.',
          },
          {
            title: 'Reports are hard to filter',
            meta: 'Finding 02 · Impact High',
            body: 'People wanted to slice the financial reports and could not. **Recommendation:** add preset range filters such as weekly and monthly, along with revenue, expenses, and market insights.',
          },
          {
            title: 'Exporting and sharing is limited',
            meta: 'Finding 03 · Impact High',
            body: 'A report could only leave the product as a PDF, with no easy way to share it. **Recommendation:** add exports like Excel and Google Sheets, and let people copy a shareable link.',
          },
        ],
      },
      {
        eyebrow: '05 · What worked',
        heading: 'What already *earned its keep.*',
        body: [
          'Testing is not only about what breaks. Three things landed well, and they are worth protecting as the rest gets fixed:',
        ],
        cards: [
          {
            title: 'Onboarding',
            meta: 'Strength',
            body: 'Onboarding and signup were easy to navigate, so people started using the product without friction.',
          },
          {
            title: 'Investor-ready reports',
            meta: 'Strength',
            body: 'Users moved smoothly into the financial reports section and valued having reports they could put in front of investors.',
          },
          {
            title: 'Receipt tracking',
            meta: 'Strength',
            body: 'Users found the AI categorization and automated receipt tracking extremely valuable, which is exactly the promise the product is built on.',
          },
        ],
      },
      {
        eyebrow: '06 · What it pointed to next',
        heading: 'One through line, and *an honest next step.*',
        body: [
          '**The pattern.** Almost every pain point was a legibility problem, not a logic problem. The AI was doing its job. The interface just was not saying so clearly, whether that was an easy-to-miss upload zone, a success message tucked in a corner, a vague "Needs attention" label, or a button named "Add more."',
          '**The priorities.** The high-impact fixes cluster around making the automation readable: a more visible upload area, a success message you cannot miss, plain-language status labels with tooltips, and a report section you can filter, export, and share.',
          '**What I would do next.** This was a first-round discovery study, not a validation of a fix. The honest next step is to take these recommendations into a redesign and run a second round of testing to confirm the changes actually remove the hesitation.',
        ],
      },
    ],
    // Finished product screens, shown in a desktop browser frame and grouped
    // by area: the OCR upload flow, receipt management, and reporting.
    webScreens: {
      title: 'Mock up',
      url: 'app.receiptly.com',
      groups: [
        {
          title: 'Upload · OCR extraction',
          shots: [
            {
              src: '/images/receiptly-dashboard.jpg',
              label: 'Returning-user upload',
              hint: 'A familiar dashboard where a returning user drops in receipts and the AI starts categorizing right away.',
            },
            {
              src: '/images/receiptly-ocr-1.jpg',
              label: 'Upload and auto-categorize',
              hint: 'Receipts land in a list where the AI proposes a category and flags the ones that need a second look.',
            },
            {
              src: '/images/receiptly-ocr-2.jpg',
              label: 'Extracted line items',
              hint: 'Opening a receipt shows every item, price, total, and tax the AI pulled, with its reasoning surfaced.',
            },
            {
              src: '/images/receiptly-ocr-3.jpg',
              label: 'Saved and handed off',
              hint: 'A clear confirmation that the receipts are in, so the user knows the AI is taking it from here.',
            },
          ],
        },
        {
          title: 'Manage · receipts and folders',
          shots: [
            {
              src: '/images/receiptly-manage.jpg',
              label: 'Receipt management',
              hint: 'Every receipt in one searchable, filterable table with its assigned category and history.',
            },
            {
              src: '/images/receiptly-folder.jpg',
              label: 'Inside a folder',
              hint: 'Receipts grouped into folders like House Groceries, so a busy founder can find things fast.',
            },
            {
              src: '/images/receiptly-detail.jpg',
              label: 'Receipt detail',
              hint: 'The full breakdown of a single receipt, editable line by line before it counts toward a report.',
            },
          ],
        },
        {
          title: 'Reports · the metrics that matter',
          shots: [
            {
              src: '/images/receiptly-reports.jpg',
              label: 'Add the right metrics',
              hint: 'Founders pick investor-facing metrics like CAC, LTV to CAC, and churn to build their own report.',
            },
          ],
        },
      ],
    },
    // Floating phone showcase with a giant faded wordmark, in the style of
    // motion-led case study pages. Phones bob gently via CSS.
    mobileShowcase: {
      title: 'Mobile · Receiptly in your pocket',
      note: 'The same trust-first design, sized for the moment a founder actually holds a receipt.',
      word: 'Receiptly',
      phones: [
        { src: '/images/receiptly-mobile-1.webp', alt: 'Mobile dashboard with expense stats at a glance' },
        { src: '/images/receiptly-mobile-2.webp', alt: 'Reports and insights on mobile, with the CAC chart' },
        { src: '/images/receiptly-mobile-3.webp', alt: 'Receipt folders on mobile, with friendly empty states' },
      ],
    },
  },

  upzy: {
    eyebrow: 'Upzy · 2024',
    tint: 'lavender',
    title: 'A sustainability marketplace that *didn\'t sell sustainability.* It sold the tailor down the street.',
    sub: 'Most sustainable-fashion apps lead with guilt. Guilt has a terrible conversion rate. So we asked: *what do users actually want?*',
    meta: [
      { label: 'Duration', value: '13 weeks' },
      { label: 'Role', value: 'Lead UX · Strategic reframing · Map-first IA' },
      { label: 'Industries', value: 'Sustainability · Local marketplace · Consumer' },
      { label: 'Tools', value: 'Figma · Illustrator · Jira · Slack · Photoshop' },
    ],
    sections: [
      {
        eyebrow: '01 · Why this problem matters',
        heading: 'Sustainability apps were losing, *even when users agreed with the mission.*',
        body: [
          'The fashion industry throws off an enormous amount of textile waste every year, and a lot of it is clothing that could have been repaired, altered, or upcycled instead of tossed. The catch is that almost nobody knows where to take a garment to actually get that done.',
          'Why? Because most sustainability apps lead with guilt. *Save the planet. Reduce your footprint. Stop fast fashion.* But guilt has a terrible conversion rate. People agree with the message, then close the app and buy something convenient.',
          'The opportunity wasn\'t to make people care more. **It was to lower the activation energy of caring.**',
        ],
      },
      {
        eyebrow: '02 · How I defined the real problem',
        heading: 'It wasn\'t apathy. *It was access.*',
        body: [
          'I interviewed 5 people about their relationship with their clothes. The brief assumed motivation was the bottleneck. The interviews said something different.',
          'None of them led with the planet. They led with: *a sweater that didn\'t fit anymore. Pants they\'d been meaning to hem for two years. A jacket from a relative they couldn\'t bear to throw out.* They cared. They just didn\'t know where to **take it.**',
          'I reframed the problem from *"how do we motivate sustainable behavior"* to *"how do we connect people to the local craftsperson three blocks away."*',
        ],
        callout: "The blocker wasn't motivation. *It was access.*",
      },
      {
        eyebrow: '03 · What I thought the cause was',
        heading: 'Three hypotheses about *why local repair felt impossible.*',
        body: [
          'From interview synthesis, I drafted three hypotheses about why repair stayed in the "I should..." mental list and never became action:',
        ],
        cards: [
          {
            title: 'H1: Discovery friction is the killer.',
            meta: 'Hypothesis · IA',
            body: "If we lead with a map (not a list, not search), people see who's nearby in 2 seconds. Distance becomes the value proposition, not a footer detail.",
          },
          {
            title: 'H2: Listings should be people, not products.',
            meta: 'Hypothesis · Trust',
            body: 'People hire artisans, not services. If we lead with the maker\'s story and craft history, the relationship starts before the transaction does.',
          },
          {
            title: 'H3: Inquiry, not checkout.',
            meta: 'Hypothesis · Conversion',
            body: 'If we replace "Add to cart" with "Send a message," users start a conversation instead of dropping off at price ambiguity. Price ranges instead of fixed prices.',
          },
        ],
      },
      {
        eyebrow: '04 · How I proved it',
        heading: 'A competitor teardown, a hallway test, and a prototype walkthrough.',
        body: [
          '**Method 1, competitor teardown** of the tools people already reach for: Facebook, Etsy, and Nextdoor. Each covers one piece of the job and misses the rest. Facebook lets you post but has no way to discover local makers, Etsy is built to discover products but not to post a request, and Nextdoor is neighborhood chatter with neither. None give a maker a portfolio to stand on. *No single tool connects a person to a local artisan,* and the table below maps exactly where each one stops.',
          '**Method 2, hallway tests with 5 participants.** I put two prototypes side by side: a list-first feed and a map-first home. 5 of 5 chose map-first. The reason was always the same: *"I want to see who\'s actually near me."*',
          '**Method 3, prototype walkthrough** with the same 5. The "Send a message" flow felt natural, and every participant compared it to texting a hairdresser, not buying online. *Mental model confirmed.*',
        ],
      },
      {
        eyebrow: '05 · What I decided, and why',
        heading: 'Three decisions that *refused the marketplace genre.*',
        body: [
          'Each decision below trades a "best practice" for a different mental model. Each is defensible because users showed me, not because I preferred it.',
        ],
        cards: [
          {
            title: 'Decision 1: Map-first home',
            meta: 'Trade-off · Discoverable inventory · Lost SEO surface',
            body: 'Users open to a map of nearby artisans, not a feed of services. Distance in walking minutes, not kilometers. The "feed" people expected got dropped, and 5 of 5 testers confirmed they didn\'t miss it.',
          },
          {
            title: 'Decision 2: Profile-first listings',
            meta: 'Trade-off · Slower to populate · Higher trust',
            body: "Each listing leads with the artisan's photo, story, and 3 years of work, not a product page. Bookable services come second. The relationship is the product.",
          },
          {
            title: 'Decision 3: Inquiry instead of checkout',
            meta: 'Trade-off · Lower conversion velocity · Higher conversion quality',
            body: 'Replaced cart with a message thread. Replaced fixed prices with ranges. Removed "instant book." Users start a conversation, get a custom quote, then commit. Different funnel, different trust.',
          },
        ],
      },
      {
        eyebrow: "06 · Results, learnings, what's next",
        heading: 'What this taught us, and what comes next.',
        impact: [
          {
            num: 'Result 01',
            stat: '5 / 5',
            label: 'All five hallway-test participants picked map-first over list-first, so the "feed" pattern turned out to be an assumption that testing quietly killed.',
          },
          {
            num: 'Result 02',
            stat: 'Reframe',
            label: 'The brief said "sustainability" but the research said *access,* and reframing the problem reframed the entire product strategy, including its positioning.',
          },
          {
            num: 'Result 03',
            stat: 'Pilot-ready',
            label: 'The final design went to engineering with three pre-validated patterns: map-first IA, profile-first listings, and inquiry instead of checkout.',
          },
        ],
        body: [
          '**Learning.** "Sustainable" is a constraint a product holds, not a story it tells. The most sustainable thing the product could do was *be useful enough* that people opened it. Mission-led copy lost. Map-led utility won.',
          '**Next.** If launching: pilot in one neighborhood at a time (Brooklyn, Mt. Pleasant, East Vancouver) and measure repeat-message rate as the leading indicator. Add a low-stakes "save for later" so the relationship doesn\'t have to start with a transaction.',
        ],
      },
    ],
    // Feature comparison against the tools people already use for this.
    comparison: {
      title: 'Standing out in the crowd',
      note: 'People already try to do this on tools they have. None of them cover the whole job.',
      columns: ['Upzy', 'Facebook', 'Etsy', 'Nextdoor'],
      rows: [
        { feature: 'Add Post', values: [true, true, false, false] },
        { feature: 'Discover', values: [true, false, true, false] },
        { feature: 'Portfolio Management', values: [true, false, false, false] },
        { feature: 'Chat', values: [true, true, true, true] },
      ],
    },
    // Finished product screens, shown in a desktop browser frame and grouped
    // by the flow: map-first discovery, browsing makers, and request to proposal.
    webScreens: {
      title: 'Mock up',
      url: 'upzy.app',
      groups: [
        {
          title: 'Discover · map-first',
          shots: [
            {
              src: '/images/upzy-discover-home.jpg',
              label: 'Open to a map of makers nearby',
              hint: 'The home is a map, not a feed, so who is close by is the first thing you see.',
            },
            {
              src: '/images/upzy-discover-detail.jpg',
              label: 'Tap a shop for the full detail',
              hint: 'A shop card carries its rating, services, hours, and directions without leaving the map.',
            },
            {
              src: '/images/upzy-discover-list.jpg',
              label: 'List and map, side by side',
              hint: 'For people who prefer to scan, the list stays anchored to the same nearby results.',
            },
            {
              src: '/images/upzy-discover-pin.jpg',
              label: 'A quick look from any pin',
              hint: 'Tapping a pin previews the shop in place, so browsing never breaks your sense of where.',
            },
          ],
        },
        {
          title: 'Find your artist',
          shots: [
            {
              src: '/images/upzy-browse-home.jpg',
              label: 'Post a request, or scroll to browse',
              hint: 'One bar to post a job, and below it a run of makers to browse when you would rather look first.',
            },
            {
              src: '/images/upzy-browse-artists.jpg',
              label: 'Makers lead with their work',
              hint: 'Each listing is a person and their craft, filtered by Upcycle, Tailor, or Fashion, not a product grid.',
            },
          ],
        },
        {
          title: 'Request · inquiry, not checkout',
          shots: [
            {
              src: '/images/upzy-request-map.jpg',
              label: 'Makers see nearby requests, with a price',
              hint: 'On the maker side, open requests appear on the map with the budget attached, like a job close to home.',
            },
            {
              src: '/images/upzy-request-detail.jpg',
              label: 'A request is a story, not a cart',
              hint: 'The garment, its history, condition, and a price range, so the conversation starts with context.',
            },
            {
              src: '/images/upzy-proposal.jpg',
              label: 'Reply with a proposal',
              hint: 'The maker answers with a quote, a timeline, and related work, replacing "add to cart" with a real offer.',
            },
          ],
        },
      ],
    },
    // Floating phone showcase for the mobile app, in the motion-led style.
    mobileShowcase: {
      title: 'Mobile · Upzy in your pocket',
      note: 'The same map-first idea, sized for the sidewalk where you actually find a maker.',
      word: 'Upzy',
      bezel: true,
      phones: [
        { src: '/images/upzy-mobile-1.jpg', alt: 'Mobile map home with nearby makers and an Add Post button' },
        { src: '/images/upzy-mobile-2.jpg', alt: 'Shop detail on mobile with services, hours, and contact' },
        { src: '/images/upzy-mobile-3.jpg', alt: 'A maker profile on mobile with their portfolio of projects' },
      ],
    },
  },

  visit: {
    eyebrow: 'The Visit Magazine · 2024',
    tint: 'mint',
    title: 'A first issue I *wrote, photographed, and designed* on my own.',
    sub: 'The Visit Magazine No. 1 is a self-published digital issue. I turned my own trips through Tofino and the Joffre Lakes into a real magazine, from the masthead down to the last caption.',
    meta: [
      { label: 'Format', value: 'Digital edition · 9 pages' },
      { label: 'Role', value: 'Writing · Photography · Editorial design' },
      { label: 'Subject', value: 'Tofino & Joffre Lakes, BC · Outdoor travel' },
      { label: 'Tools', value: 'InDesign · Photoshop · Illustrator' },
    ],
    sections: [
      {
        eyebrow: '01 · Why I made this',
        heading: 'I wanted to turn my own trips into *a real magazine.*',
        body: [
          'The Visit Magazine started as a personal brief: take the photos and notes from my own travels through British Columbia and shape them into a proper editorial piece, not a photo dump. Number 1 is the digital first issue, and I wrote, photographed, and designed every page of it myself.',
          'The places are ones I actually went. **Tofino** for its Long Beach coastline, surf culture, and camping, and the glacier-fed **Joffre Lakes** further inland. I wanted a reader to finish the issue wanting to go, and I wanted to learn the craft of editorial design while making it.',
          'So I treated it like a real publication: a masthead, a type system, a reading rhythm, italic captions, and a colophon, all built from scratch in InDesign.',
        ],
      },
      {
        eyebrow: '02 · The type system',
        heading: 'A textured masthead, *brush section titles,* and a serif for the reading.',
        body: [
          'The issue leans on a deliberate gap between loud display type and calm body type, so a page can feel lively at the headline and still stay easy to read in the column.',
        ],
        cards: [
          {
            title: 'Masthead · Hansief Rough',
            meta: 'Display',
            body: '**THE VISIT MAGAZINE** is set in a rough, inky face that looks stamped and weathered, closer to a mark burned into a trail sign than a glossy logo.',
          },
          {
            title: 'Section titles · brush faces',
            meta: 'Display',
            body: 'Each opener gets its own voice. A flowing script for *"Tofino, Long Beach"* and bold brush capitals for *"Tofino Adventure"* and *"Camping,"* drawn from Wild Youth, Rustico, and MADE SAONARA, so the mood shifts with the place.',
          },
          {
            title: 'Body · Merriweather',
            meta: 'Text',
            body: 'A steady serif carries the articles and captions, opened by a large drop cap on each piece, so the writing stays readable no matter how energetic the headline gets.',
          },
        ],
        callout: 'Loud at the headline, *calm in the column.*',
      },
      {
        eyebrow: '03 · Designing the pages',
        heading: 'How each page was *built to be read.*',
        body: [
          'With the type set, the layout work was about pacing photographs and words so a reader moves through the issue the way you move through a trip.',
        ],
        cards: [
          {
            title: 'Photography leads, and it is all mine',
            meta: 'Layout',
            body: 'Every image in the issue is a photo I took on these trips. Full-bleed shots open a place, then framed photos with italic captions slow the reader down inside the article.',
          },
          {
            title: 'A shape for each adventure',
            meta: 'Craft',
            body: 'The surfing page masks its photo into a torn, wave-like edge so the image itself moves, matching the energy of the sport instead of sitting in a plain rectangle.',
          },
          {
            title: 'Signals that repeat',
            meta: 'Hierarchy',
            body: 'A drop cap opens every article, captions sit in italic under the photos, and a chapter word like *"Lakes"* runs vertically up the margin, so the reader always knows where a new section starts.',
          },
        ],
      },
      {
        eyebrow: '04 · What editorial work taught me',
        heading: 'Making a magazine changed how I design *products.*',
        body: [
          '**Hierarchy is about where the eye lands.** Laying out these pages taught me to ask not "which element is biggest" but "what does the reader see first, and where do they rest." That question now shapes how I build dashboards and onboarding flows.',
          '**Type sets the tone.** Pairing a rough masthead, brush titles, and a calm serif showed me how much mood lives in type alone, before any color or image. I bring that sensitivity to every product surface now.',
          '**Do the whole thing.** Writing, shooting, and designing one issue end to end taught me how much stronger the work is when the words, the images, and the layout are decided together. I approach product the same way, treating content and interface as one problem.',
        ],
      },
    ],
    // The finished magazine, read as spreads the way the issue is laid out.
    magazine: {
      title: 'The magazine, spread by spread',
      cover: { src: '/images/visit-page-1.jpg', label: 'Cover · The Visit Magazine No. 1' },
      spreads: [
        { src: '/images/visit-spread-2-3.jpg', label: 'Long Beach, where the coastline runs off the page' },
        { src: '/images/visit-spread-4-5.jpg', label: 'Tofino Adventure and Camping' },
        { src: '/images/visit-spread-6-7.jpg', label: 'Joffre Lakes, from the panorama to the water' },
        { src: '/images/visit-spread-8-9.jpg', label: 'Colophon and back cover' },
      ],
    },
  },
}

// About section
export const about = {
  heading: 'Hey! That’s me.',
  body: [
    "I'm **Yoonju Lee**, a UI/UX designer based in **Vancouver, BC**, with a diploma in Web and Mobile App Design and Development from Langara College. I work at the intersection of **empathy** and **clarity**.",
    'Before design, I studied psychology and social welfare and spent five years as a professional negotiator. That background shapes how I create **intuitive, people-first experiences**. I treat every product problem as a human problem first, and a system problem second.',
    "Outside of work, I'm happiest on a trail. **Hiking, camping, and traveling**, from alpine lakes to mountain summits, keep giving me new perspectives, and they're where most of my design inspiration actually comes from.",
  ],
  // Photo collage next to the bio. Drop files into public/images/ and
  // update src/alt/caption here.
  photos: [
    {
      src: '/images/about-1.jpg',
      alt: 'Yoonju outdoors in a cap and sunglasses on a sunny day',
      caption: 'trail selfie',
    },
    {
      src: '/images/about-2.jpg',
      alt: 'Tree pose in front of an alpine lake and snowy mountains',
      caption: 'alpine lakes',
    },
    {
      src: '/images/about-3.jpg',
      alt: 'Arms wide open on a rocky mountain summit',
      caption: 'up a mountain',
    },
    {
      src: '/images/about-4.jpg',
      alt: 'Standing by a turquoise waterfall pool at Lake Louise',
      caption: 'Lake Louise',
    },
  ],
  // Tools I work in. `icon` maps to a brand mark in App.jsx.
  skills: [
    { name: 'Figma', icon: 'figma' },
    { name: 'Photoshop', icon: 'photoshop' },
    { name: 'Illustrator Basics', icon: 'illustrator' },
    { name: 'InDesign', icon: 'indesign' },
    { name: 'HTML & CSS Basics', icon: 'htmlcss' },
    { name: 'After Effects Basics', icon: 'aftereffects' },
    { name: 'Premiere Pro', icon: 'premiere' },
  ],
  // Fun facts to round out the bio, from Yoonju's own About page.
  funFacts: [
    {
      emoji: '🎨',
      title: 'A moment of wonder',
      body: "I could stand in front of Dale Chihuly's glass sculptures in Seattle for hours, endlessly inspired by the unexpected.",
    },
    {
      emoji: '🌅',
      title: 'My favorite time of day',
      body: 'Sunset at Long Beach in Pacific Rim National Park Reserve, where the light does all the work.',
    },
    {
      emoji: '🏕️',
      title: 'Nature is my escape',
      body: 'Camping is how I reset, and Garibaldi Lake is one of the places I keep going back to.',
    },
    {
      emoji: '📷',
      title: 'Things I love',
      body: 'Traveling and photography, a habit I picked up while living on Jeju Island.',
    },
  ],
}

// My capabilities — pill tags
export const capabilities = [
  'Mobile Design',
  'Web Design',
  'UX & Product Design',
  'User Research',
  'Wireframing & Prototyping',
  'Design Systems',
  'Information Architecture',
  'Accessibility (WCAG)',
  'Editorial & Print',
  'Motion & Interaction',
  'Cognitive Psychology',
]

// Contact section
export const contact = {
  // "Let's get in touch" card: contact details plus a mailto-backed form.
  getInTouch: {
    heading: "Let's get in touch",
    sub: 'Feel free to reach out for collaborations, project inquiries, or just to say hello.',
    seal: 'Available for freelance',
    details: [
      { label: 'Location', value: 'Vancouver, BC, Canada' },
      { label: 'Email', value: 'lovingjoo@gmail.com', href: 'mailto:lovingjoo@gmail.com' },
      { label: 'LinkedIn', value: 'in/yoon-ju-lee', href: 'https://www.linkedin.com/in/yoon-ju-lee/' },
    ],
  },
  faqHeading: 'Need more details?',
  faqSub: 'A few answers to what people usually ask before starting a project.',
  faqs: [
    {
      q: 'What kind of work do you take on?',
      a: 'Mostly UX/UI design for web and mobile products, from research and wireframes through to polished, accessible interfaces. I also take on brand and editorial work when a project calls for it.',
    },
    {
      q: 'How do you usually start a project?',
      a: 'I start with the problem, not the screens. That means understanding the people involved, auditing what already exists, and agreeing on what success looks like before any pixels get pushed.',
    },
    {
      q: 'Can you help if I only have a rough idea?',
      a: 'Absolutely. A lot of the value is turning a vague idea into a clear, testable direction, so we can define the scope together and start small.',
    },
    {
      q: 'Do you work with developers and founders directly?',
      a: 'Yes. Most of my projects involved shaping scope with founders and defending design decisions with engineering, so I design with real constraints and hand-off in mind.',
    },
    {
      q: 'How do we communicate during a project?',
      a: 'Whatever keeps us aligned, usually a shared design file plus regular check-ins. I keep the work visible so there are never any surprises.',
    },
  ],
  title: "Let's build something\nmeaningful together.",
  sub: 'Something caught your eye? I’d love to connect. We can turn that idea into a real product.',
  cta: 'Get in Touch',
  handwritten: 'and make it real together',
  links: [
    { label: 'Email', href: 'mailto:lovingjoo@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yoon-ju-lee/' },
  ],
  tagline: 'Designed & built with care · Vancouver, BC',
}
