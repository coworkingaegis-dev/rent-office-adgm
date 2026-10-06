// ---------------------------------------------------------------------------
// Single source of truth for the "Rent an Office in Abu Dhabi Global Market"
// micro-site. Prices and facts come from www.aegiscoworking.ae
// (private-office, office-space, virtual-office and pricing pages).
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import heroImg from '../assets/office-for-rent-adgm-addax-tower.webp'
import smallImg from '../assets/private-office-small-adgm.webp'
import mediumImg from '../assets/private-office-medium-adgm.webp'
import largeImg from '../assets/private-office-large-adgm.webp'
import meetingImg from '../assets/meeting-room-adgm.webp'
import deskImg from '../assets/dedicated-desk-adgm.webp'
import flexiImg from '../assets/flexi-desk-adgm.webp'
import boardroomImg from '../assets/business-centre-adgm-boardroom.webp'
import receptionImg from '../assets/business-centre-reception-adgm.webp'
import addressImg from '../assets/business-centre-reception-adgm.webp'

export const SITE_URL = 'https://rentofficeabudhabiglobalmarket.online'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Office for Rent in ADGM from AED 4,500 | Aegis Coworking'
export const PAGE_DESCRIPTION =
  'Rent a furnished private office in ADGM at Addax Tower from AED 4,500/month, or a desk from AED 1,000. Registered ADGM address, 24/7 access. Book a tour.'
export const DATE_PUBLISHED = '2026-10-06'
export const DATE_MODIFIED = '2026-10-06'

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

export const images = { heroImg, smallImg, mediumImg, largeImg, meetingImg, deskImg, flexiImg, boardroomImg, receptionImg, addressImg }

export const sections = [
  { id: 'finder', label: 'Find your office size' },
  { id: 'options', label: 'Offices & desks to rent' },
  { id: 'lease', label: 'How leasing works' },
  { id: 'compare', label: 'Business centre vs traditional lease' },
  { id: 'faq', label: 'FAQ' },
]

// Faces of the rotating 3D cube in the hero
export const cubeFaces = [
  { label: 'Private office', price: 'from AED 4,500', note: '1–20+ people' },
  { label: 'Dedicated desk', price: 'AED 1,150', note: 'your own desk' },
  { label: 'Flexi desk', price: 'AED 1,000', note: 'any open desk' },
  { label: 'Business address', price: 'from AED 292', note: 'virtual office' },
]

// Full keyword set (structured data + llms files; visible copy works them in as sentences)
export const keywords = [
  'Office for rent in ADGM', 'Office space for rent in ADGM', 'ADGM office rent', 'ADGM office for rent', 'Office rental in ADGM',
  'Office space Abu Dhabi Global Market', 'ADGM office space', 'Office leasing ADGM', 'Serviced office ADGM', 'Serviced office Abu Dhabi',
  'Furnished office ADGM', 'Furnished office for rent ADGM', 'Private office ADGM', 'Private office for rent Abu Dhabi',
  'Affordable office space ADGM', 'Affordable office for rent Abu Dhabi', 'Business centre ADGM', 'Business center Abu Dhabi',
  'Flexible office space ADGM', 'Commercial office space ADGM', 'Office for ADGM company', 'ADGM registered office', 'ADGM business address',
  'Office for ADGM licence', 'Office rental Al Reem Island', 'Office for rent Al Reem Island', 'Serviced office Al Reem Island',
  'Office space Addax Tower', 'Office for rent Addax Tower', 'ADGM office Addax Tower', 'Office near ADGM', 'Office space near Abu Dhabi Global Market',
  'Space in ADGM', 'Rent desk space in ADGM', 'Flexi desk in ADGM', 'Cheap desk space in ADGM', 'Flexible office space in ADGM',
  'Office space provider in ADGM', 'Aegis Coworking',
]

// Rent options (prices from aegiscoworking.ae)
export const options = [
  { id: 'small', name: 'Small private office', size: '1–4 people', price: 'From AED 4,500', unit: '/ month', img: 'smallImg', w: 474, h: 664, text: 'A furnished, lockable private office in ADGM for founders and small teams.', href: `${MAIN_SITE}/private-office` },
  { id: 'medium', name: 'Medium private office', size: '5–10 people', price: 'On request', unit: 'by layout', img: 'mediumImg', w: 700, h: 700, text: 'Room for a growing team, with meeting rooms and the lounge down the corridor.', href: `${MAIN_SITE}/private-office` },
  { id: 'large', name: 'Large private office', size: '10–20+ people', price: 'On request', unit: 'by layout', img: 'largeImg', w: 512, h: 512, text: 'Commercial office space in ADGM for established teams and regional offices.', href: `${MAIN_SITE}/private-office` },
  { id: 'desk', name: 'Dedicated desk', size: '1 person', price: 'AED 1,150', unit: '/ month', img: 'deskImg', w: 900, h: 675, text: 'Your own permanent desk with a registered ADGM business address for your licence.', href: 'https://dedicateddeskadgm.online/' },
  { id: 'flexi', name: 'Flexi desk', size: '1 person', price: 'AED 1,000', unit: '/ month', img: 'flexiImg', w: 900, h: 675, text: 'Rent desk space in ADGM on any open desk — no registered address included.', href: `${MAIN_SITE}/office-space` },
  { id: 'virtual', name: 'Virtual office', size: 'Address only', price: 'From AED 292', unit: '/ month', img: 'addressImg', w: 900, h: 675, text: 'An ADGM registered office address with mail handling, for when you don\'t need a room.', href: 'https://servicedofficeadgm.online/' },
]

export const officePerks = [
  { icon: 'chair', title: 'Fully furnished', text: 'Ergonomic desks and chairs, lockable storage, ready on day one.' },
  { icon: 'doc', title: 'ADGM registered office', text: 'Every office and dedicated desk includes a registered ADGM business address.' },
  { icon: 'key', title: '24/7 secure access', text: 'Round-the-clock access to Addax Tower and your office.' },
  { icon: 'wifi', title: 'All-in monthly rent', text: 'High-speed internet, utilities, cleaning and reception included.' },
  { icon: 'video', title: 'Meeting rooms & lounge', text: 'Book meeting rooms and the boardroom for client meetings.' },
  { icon: 'shield', title: 'Lease on AccessRP', text: 'ADGM-compliant leases registered on AccessRP, 12–36 months.' },
]

export const leaseSteps = [
  { title: 'Tour the 38th floor', text: 'Visit Addax Tower Monday–Friday, 9 AM–6 PM, or get a video walkthrough on WhatsApp.' },
  { title: 'Choose your office', text: 'Pick a private office, dedicated desk or flexi desk that fits your team and licence.' },
  { title: 'Lease & compliance', text: 'Complete ADGM due diligence; we register your lease on AccessRP.' },
  { title: 'Move in', text: 'Collect your access card and use your ADGM registered office for the licence.' },
]

export const stats = [
  { value: 38, suffix: 'th', label: 'floor, Addax Tower' },
  { value: 20, suffix: '+', label: 'people per private office' },
  { value: 24, suffix: '/7', label: 'access for office members' },
  { value: 0, prefix: 'AED ', label: 'deposit, setup or admin fees' },
]

// Business centre vs traditional ADGM office lease (general comparison)
export const compare = [
  { label: 'Fit-out & furniture', bc: 'Included — furnished office', trad: 'Usually your cost and your time' },
  { label: 'Upfront costs', bc: 'No deposit, setup or admin fees', trad: 'Deposits and agency fees are common' },
  { label: 'Internet, utilities, cleaning', bc: 'Included in one monthly rent', trad: 'Separate contracts and bills' },
  { label: 'Reception & meeting rooms', bc: 'Shared, staffed and bookable', trad: 'Only what you build yourself' },
  { label: 'Lease length', bc: '12–36 months, upgrade anytime', trad: 'Often multi-year and fixed size' },
  { label: 'Move-in time', bc: 'Ready once checks are done', trad: 'Weeks to months of fit-out' },
]

export const testimonials = [
  { quote: 'I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.', name: 'Naveeda Haseeb', role: 'Startup Founder' },
  { quote: 'For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.', name: 'Haseeb Awan', role: 'Entrepreneur' },
  { quote: 'Aegis coworking provide super professional services especially with the pricing, and the customer service, i needed the license and a space for one of my team member and they did all within a week time, my team member loved the space. I will highly suggest if any on is looking to get a license and a space in ADGM go for Aegis coworking.', name: 'Ubaid Zia', role: 'Startup Founder' },
  { quote: 'We were comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable.', name: 'John Paints', role: 'Software Analyst' },
  { quote: 'Very happy with the service from Aegis Coworking. We needed a professional business address in Abu Dhabi without committing to a large traditional office, and Aegis provided a practical solution. The team is responsive and professional.', name: 'Uzair Tahir', role: 'Tech Startup Founder' },
  { quote: 'Aegis Coworking is a convenient workspace in Abu Dhabi for startups and growing companies. The flexible workspace options, meeting room and hot desk helped us avoid the commitment of a traditional office.', name: 'Kasim Malikkandy', role: 'Consultant' },
  { quote: 'Nice suitable area for coworking for Adam incorporation.', name: 'Ali Kutty Faizy', role: 'Entrepreneur' },
]

export const guides = [
  { slug: 'private-office-rent-adgm-cost-what-to-expect-in-2026', title: 'Private Office Rent in ADGM: What to Expect in 2026', tag: 'Office rent' },
  { slug: 'adgm-office-cost-calculator', title: 'ADGM Office Cost Calculator', tag: 'Cost' },
  { slug: 'private-office-vs-coworking-adgm-the-complete-cost-privacy-guide', title: 'Private Office vs Coworking in ADGM: Cost & Privacy Guide', tag: 'Compare' },
  { slug: 'low-cost-office-adgm-budget-friendly-workspace-solutions-in-abu-dhabi', title: 'Low-Cost Office in ADGM: Budget-Friendly Workspace in Abu Dhabi', tag: 'Affordable' },
  { slug: 'accessrp-adgm-lease-registration', title: 'AccessRP: How ADGM Lease Registration Works', tag: 'Leasing' },
  { slug: 'adgm-fsra-office-requirements', title: 'ADGM FSRA Office Requirements', tag: 'Compliance' },
  { slug: 'adgm-license-workspace-questions-before-applying', title: 'Questions to Ask About Your ADGM Licence Workspace', tag: 'Licence' },
  { slug: 'adgm-meeting-room-vs-private-office-client-meetings', title: 'Meeting Room or Private Office for Client Meetings?', tag: 'Compare' },
  { slug: 'adgm-vs-difc-workspace-cost', title: 'ADGM vs DIFC Workspace Cost Compared', tag: 'Cost' },
  { slug: 'addax-tower-adgm-business-workspace', title: 'Addax Tower ADGM: Business Workspace on Al Reem Island', tag: 'Location' },
  { slug: 'is-al-reem-island-part-of-adgm', title: 'Is Al Reem Island Part of ADGM?', tag: 'Location' },
  { slug: 'which-adgm-workspace-fits-you', title: 'Which ADGM Workspace Fits You?', tag: 'Guide' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'How much is office rent in ADGM?',
    a: 'At Aegis Coworking in Addax Tower, a furnished private office in ADGM starts from AED 4,500 per month. A dedicated desk is AED 1,150, a flexi desk AED 1,000 and a virtual office from AED 292 per month. Pricing for larger offices depends on team size and layout.',
    link: { text: 'Private office rent in ADGM: 2026 guide', url: `${MAIN_SITE}/blog/private-office-rent-adgm-cost-what-to-expect-in-2026` },
  },
  {
    q: 'Is Addax Tower on Al Reem Island inside ADGM?',
    a: 'Yes. Addax Tower on Al Reem Island is within the Abu Dhabi Global Market jurisdiction, so an office for rent in Addax Tower is a genuine ADGM office address.',
    link: { text: 'Is Al Reem Island part of ADGM?', url: `${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm` },
  },
  {
    q: 'What is included in a private office?',
    a: 'Each private office includes a furnished workspace, ergonomic desks and chairs, lockable storage, high-speed internet, 24/7 access and a registered ADGM business address. Cleaning, utilities and reception are included in the monthly rent.',
  },
  {
    q: 'Can I use the office for my ADGM company registration and licence?',
    a: 'Yes. Private offices and dedicated desks include a registered ADGM business address suitable for your ADGM licence application and renewals, and leases are registered on AccessRP.',
    link: { text: 'Questions to ask before your ADGM licence application', url: `${MAIN_SITE}/blog/adgm-license-workspace-questions-before-applying` },
  },
  {
    q: 'How many people can a private office hold?',
    a: 'Our offices in ADGM accommodate teams of 1 to 20+ people, in Small (1–4), Medium (5–10) and Large (10–20+) options.',
  },
  {
    q: 'How long is an office lease in ADGM?',
    a: 'Leases run from 12 to 36 months and are registered on AccessRP. You can upgrade to a larger office as your team grows.',
    link: { text: 'How AccessRP lease registration works', url: `${MAIN_SITE}/blog/accessrp-adgm-lease-registration` },
  },
  {
    q: 'Are there deposits or setup fees?',
    a: 'No deposit, no admin fees and no setup fees, with free registration. A one-time AED 1,200 due-diligence fee applies to the dedicated desk, and ADGM government fees are separate.',
  },
  {
    q: 'Do FSRA-regulated firms need a private office?',
    a: 'FSRA-regulated firms usually need physical premises such as a private office, while many non-regulated companies can use a dedicated desk, flexi desk or virtual office.',
    link: { text: 'ADGM FSRA office requirements', url: `${MAIN_SITE}/blog/adgm-fsra-office-requirements` },
  },
  {
    q: 'What is the cheapest desk space in ADGM?',
    a: 'The cheapest option at Aegis is a day pass at AED 100. For monthly use, a flexi desk is AED 1,000; the dedicated desk at AED 1,150 is the lowest-cost option with a registered ADGM business address.',
    link: { text: 'Low-cost office options in ADGM', url: `${MAIN_SITE}/blog/low-cost-office-adgm-budget-friendly-workspace-solutions-in-abu-dhabi` },
  },
  {
    q: 'Is 24/7 access included?',
    a: 'Yes. Private office and dedicated desk members get secure 24/7 access to Addax Tower, every day of the week.',
  },
  {
    q: 'Can I book meeting rooms for clients?',
    a: 'Yes. Meeting rooms and the boardroom can be booked by the hour, so you can meet clients in ADGM without paying for a bigger office.',
    link: { text: 'Meeting room vs private office for client meetings', url: `${MAIN_SITE}/blog/adgm-meeting-room-vs-private-office-client-meetings` },
  },
  {
    q: 'How does a business centre compare to a traditional office lease?',
    a: 'A business centre gives you a furnished, serviced office with internet, utilities, cleaning and reception in one monthly price and no deposit. A traditional lease usually means fit-out, separate bills and a longer fixed commitment.',
    link: { text: 'Private office vs coworking in ADGM', url: `${MAIN_SITE}/blog/private-office-vs-coworking-adgm-the-complete-cost-privacy-guide` },
  },
  {
    q: 'Can I upgrade from a desk to a private office later?',
    a: 'Yes. Many members start on a flexi desk or dedicated desk and move into a private office at Addax Tower as the team grows.',
  },
  {
    q: 'How do I book a viewing?',
    a: 'Message us on WhatsApp or call +971 50 392 6316. Tours run Monday to Friday, 9 AM–6 PM, and we can send a video walkthrough if you are abroad.',
  },
]
