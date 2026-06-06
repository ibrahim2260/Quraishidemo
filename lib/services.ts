export type Service = {
  id: string
  name: string
  shortDescription: string
  description: string
  benefits: string[]
  faqs: { q: string; a: string }[]
  imageUrl: string
  featured?: boolean
  categoryId: string
}

export type ServiceCategory = {
  id: string
  name: string
  description: string
  services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'general',
    name: 'General & Preventive',
    description:
      'The foundation of a healthy smile — proactive care that catches problems early and keeps your teeth strong for life.',
    services: [
      {
        id: 'checkups-cleanings',
        categoryId: 'general',
        name: 'Check-Ups & Cleanings',
        shortDescription: 'Professional cleanings and comprehensive exams twice a year.',
        description:
          'Regular professional cleanings remove tartar buildup that brushing simply cannot reach, while our comprehensive exams catch cavities, gum disease, and early oral cancer signs before they become costly problems. Prevention is always gentler and less expensive than treatment.',
        benefits: [
          'Remove tartar buildup between teeth and at the gumline',
          'Early detection of cavities and gum disease',
          'Oral cancer screening at every visit',
          'Personalized home-care coaching',
        ],
        faqs: [
          {
            q: 'How often should I have a cleaning?',
            a: 'For most patients, every six months. If you have gum disease or are prone to tartar buildup, we may recommend every three to four months.',
          },
          {
            q: 'Does insurance cover cleanings?',
            a: 'Most dental insurance plans cover two cleanings per year at 100%. We accept most major plans — call us to verify your coverage.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=675&fit=crop&crop=faces&q=85',
      },
      {
        id: 'fillings',
        categoryId: 'general',
        name: 'Tooth-Colored Fillings',
        shortDescription: 'Natural-looking composite resin — no silver, no shadows.',
        description:
          'Modern composite resin fillings match your natural tooth color so precisely that most people cannot tell which tooth was treated. They bond directly to the tooth structure, which means we remove less healthy tooth material than with old amalgam fillings.',
        benefits: [
          'Matched to your natural tooth shade',
          'Preserves more healthy tooth structure',
          'Mercury-free and BPA-free materials',
          'Completed in a single appointment',
        ],
        faqs: [
          {
            q: 'How long do composite fillings last?',
            a: 'With good home care, most last 7–12 years. We monitor them at every cleaning visit.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'root-canal',
        categoryId: 'general',
        name: 'Root Canal Therapy',
        shortDescription: 'Comfortable, tooth-saving treatment — far gentler than its reputation.',
        description:
          'A root canal removes infected or inflamed pulp from inside the tooth, eliminates the source of pain, and seals the tooth so it can remain in your mouth for decades. Modern techniques and anesthesia make the procedure no more uncomfortable than a filling for most patients.',
        benefits: [
          'Eliminates tooth pain immediately',
          'Saves your natural tooth — always the best option',
          'Prevents the spread of infection',
          'Completed in one or two appointments',
        ],
        faqs: [
          {
            q: 'Will a root canal hurt?',
            a: 'Most patients are surprised by how comfortable the procedure is. You will be thoroughly numb before we begin, and sedation options are available if you are anxious.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'sealants',
        categoryId: 'general',
        name: 'Dental Sealants',
        shortDescription: 'A thin protective coating that shields back teeth from cavities.',
        description:
          'Dental sealants are a fast, painless, and highly effective way to protect the chewing surfaces of back teeth — where most cavities in children and teens begin. A thin layer of tooth-colored resin is painted onto the grooves of the molars, hardened with a curing light, and acts as a physical barrier against bacteria and food particles for years.',
        benefits: [
          'Reduces cavity risk by up to 80% in treated teeth',
          'Applied in minutes — no drilling or anesthesia required',
          'Long-lasting protection (5–10 years with proper care)',
          'Safe for both children and adults',
        ],
        faqs: [
          {
            q: 'At what age should children get sealants?',
            a: 'Ideally as soon as the first permanent molars come in, usually between ages 6 and 12. Adults without decay or existing fillings can also benefit.',
          },
          {
            q: 'Does insurance cover dental sealants?',
            a: 'Most insurance plans cover sealants for children under 18. We will verify your coverage before the appointment.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'fluoride',
        categoryId: 'general',
        name: 'Fluoride Treatments',
        shortDescription: 'Professional fluoride to strengthen enamel and prevent decay.',
        description:
          'Professional fluoride treatments deliver a concentrated dose of fluoride directly to your teeth, strengthening enamel, reversing early-stage decay, and significantly reducing cavity risk. Applied in a matter of minutes at your regular cleaning visit, it is one of the simplest and most effective preventive tools in dentistry.',
        benefits: [
          'Strengthens enamel against acid erosion',
          'Can reverse early white-spot lesions before they become cavities',
          'Especially beneficial for patients with dry mouth, braces, or high cavity risk',
          'Takes just minutes — added to your regular cleaning visit',
        ],
        faqs: [
          {
            q: 'Is fluoride safe for adults?',
            a: 'Yes. Professional fluoride is safe and beneficial for patients of all ages, not just children. Adults with receding gums or a history of frequent cavities benefit most.',
          },
          {
            q: 'How often should I have fluoride treatments?',
            a: 'Typically twice a year alongside your cleaning. Patients at higher risk for cavities may benefit from more frequent applications.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'extractions',
        categoryId: 'general',
        name: 'Tooth Extractions',
        shortDescription: 'Safe, comfortable removal of damaged, crowded, or impacted teeth.',
        description:
          'When a tooth is too damaged, decayed, or crowded to save, extraction is the most practical path forward. We perform simple extractions in-office under local anesthesia — and for more complex cases such as impacted wisdom teeth, we can coordinate with a trusted oral surgery specialist to ensure the best outcome.',
        benefits: [
          'Eliminates pain from severely damaged or infected teeth',
          'Prevents the spread of infection to neighboring teeth',
          'Clears space for orthodontic treatment when needed',
          'Comfortable — full anesthesia before any work begins',
        ],
        faqs: [
          {
            q: 'Does getting a tooth pulled hurt?',
            a: 'No. The area is thoroughly numbed before extraction. You will feel pressure but not pain. Post-extraction soreness is normal and resolves within a few days.',
          },
          {
            q: 'What happens after an extraction — do I need a replacement?',
            a: 'In most cases, yes. Leaving a gap can cause neighboring teeth to shift. We will discuss your replacement options — implant, bridge, or partial denture — before or at the time of extraction.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&h=675&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Dentistry',
    description:
      'Artistry meets science. Every cosmetic treatment is designed around your face, your goals, and the unique beauty of your natural smile.',
    services: [
      {
        id: 'veneers',
        categoryId: 'cosmetic',
        name: 'Porcelain Veneers',
        shortDescription: 'Ultra-thin shells that transform your smile in two appointments.',
        description:
          'Porcelain veneers are the pinnacle of cosmetic dentistry — custom-crafted wafers of dental-grade porcelain that fit over the front surface of your teeth to correct color, shape, size, and minor alignment issues simultaneously. The results look completely natural because they are designed to.',
        benefits: [
          'Fully customized to your facial features',
          'Stain-resistant, high-gloss porcelain',
          'Minimal preparation of natural tooth',
          'Lasts 15–20 years with proper care',
        ],
        faqs: [
          {
            q: 'Will veneers look fake or "done"?',
            a: 'Not if they are crafted well. Dr. Quraishi takes time to match the shade, translucency, and shape to what looks natural for your specific face and skin tone.',
          },
          {
            q: 'How many veneers do I need?',
            a: 'Typically the teeth visible when you smile — often 6 to 8. We always discuss your goals first and recommend the minimum number needed to achieve them.',
          },
        ],
        featured: true,
        imageUrl:
          'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'whitening',
        categoryId: 'cosmetic',
        name: 'Teeth Whitening',
        shortDescription: 'Professional whitening — up to 8 shades brighter, safely.',
        description:
          'Over-the-counter whitening strips work slowly and inconsistently. Professional whitening uses prescription-strength gel in custom-fitted trays, delivering dramatically brighter results while protecting your gums. We also offer a sensitivity-reducing formula for patients with reactive teeth.',
        benefits: [
          'Up to 8 shades lighter in 2–4 weeks',
          'Custom-fitted trays for even, consistent results',
          'Sensitivity-reducing gel option',
          'Touch-up trays to maintain your results',
        ],
        faqs: [
          {
            q: 'Does whitening work on crowns or veneers?',
            a: 'Whitening gel only works on natural tooth enamel. If you have existing restorations, we will discuss realistic expectations beforehand.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=675&fit=crop&crop=faces&q=85',
      },
      {
        id: 'smile-makeover',
        categoryId: 'cosmetic',
        name: 'Smile Makeovers',
        shortDescription: 'A complete transformation, designed around you.',
        description:
          'A smile makeover combines multiple cosmetic and restorative treatments into a single, cohesive plan — built around your goals, your timeline, and your budget. Whether you want a subtle improvement or a complete reimagination, we create a roadmap that makes sense.',
        benefits: [
          'Fully customized, phased treatment plan',
          'Predictable digital previews before treatment begins',
          'Addresses multiple concerns at once for efficiency',
          'Financing options to fit any budget',
        ],
        faqs: [
          {
            q: 'How long does a smile makeover take?',
            a: 'It depends on the treatments involved. Some patients complete their transformation in 4–6 weeks; more complex cases may take 3–6 months.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=675&fit=crop&crop=faces&q=85',
      },
      {
        id: 'invisalign',
        categoryId: 'cosmetic',
        name: 'Invisalign® Clear Aligners',
        shortDescription: 'Straight teeth, discreetly — no brackets, no wires.',
        description:
          'Invisalign uses a series of custom-fit, virtually invisible aligners to shift your teeth into place. You wear each set for about two weeks, then move to the next. The aligners are removable for eating, brushing, and special occasions — so your life does not pause for treatment.',
        benefits: [
          'Virtually invisible during treatment',
          'Removable for eating and oral hygiene',
          'Digital treatment planning shows your results before you start',
          'Often faster than traditional braces',
        ],
        faqs: [
          {
            q: 'Am I a good candidate for Invisalign?',
            a: 'Invisalign treats most mild to moderate alignment and bite issues. A free consultation will tell us whether it is right for your specific case.',
          },
          {
            q: 'How much does Invisalign cost?',
            a: 'Costs vary based on case complexity, typically similar to traditional braces. We offer flexible payment plans and most dental insurance contributes toward the cost.',
          },
        ],
        featured: true,
        imageUrl:
          'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'bonding',
        categoryId: 'cosmetic',
        name: 'Dental Bonding',
        shortDescription: 'Fix chips, gaps, and discoloration in a single appointment.',
        description:
          'Dental bonding uses a tooth-colored composite resin to repair minor chips, cracks, gaps, and surface stains — applied and sculpted directly to your tooth in one visit, no lab required. It is one of the most affordable and versatile cosmetic treatments available.',
        benefits: [
          'Completed in a single appointment',
          'No removal of healthy tooth enamel',
          'Matched precisely to your natural tooth shade',
          'A cost-effective first step in cosmetic improvement',
        ],
        faqs: [
          {
            q: 'How long does dental bonding last?',
            a: 'With proper care, bonding typically lasts 5–10 years. Avoiding habits like biting nails or chewing ice will extend its life significantly.',
          },
          {
            q: 'Is bonding better than veneers?',
            a: 'Bonding is ideal for minor corrections and is more affordable. Veneers offer more durable, stain-resistant results for larger smile changes. We will recommend the right option for your goals.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&h=675&fit=crop&crop=faces&q=85',
      },
      {
        id: 'gum-contouring',
        categoryId: 'cosmetic',
        name: 'Gum Contouring',
        shortDescription: 'Reshape your gumline for a balanced, symmetrical smile.',
        description:
          'A "gummy" smile or uneven gumline can be just as impactful on your appearance as the teeth themselves. Gum contouring — also called a gum lift — uses a precise soft-tissue laser to gently reshape the gumline, revealing more of your teeth for a fuller, more symmetrical smile.',
        benefits: [
          'Immediate, visible improvement after one session',
          'Minimally invasive soft-tissue laser technique',
          'Little to no downtime — most patients return to normal activities the same day',
          'Often paired with veneers or smile makeovers for complete transformation',
        ],
        faqs: [
          {
            q: 'Is gum contouring painful?',
            a: 'The area is fully numbed before treatment. Mild tenderness for 1–2 days afterward is typical and manageable with over-the-counter relief.',
          },
          {
            q: 'Will my gums grow back after contouring?',
            a: 'In most cases, no — the results are permanent. We take care to remove only what is necessary so the outcome looks natural, not over-corrected.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=900&h=675&fit=crop&crop=faces&q=85',
      },
    ],
  },
  {
    id: 'restorative',
    name: 'Restorative Dentistry',
    description:
      'Rebuild what has been lost or damaged — restoring full function and a seamless, natural appearance.',
    services: [
      {
        id: 'implants',
        categoryId: 'restorative',
        name: 'Dental Implants',
        shortDescription: 'The permanent solution for missing teeth — looks, feels, functions like natural.',
        description:
          'A dental implant is a titanium post surgically placed in the jawbone, which fuses with the bone over time to create a permanent anchor. A custom ceramic crown attaches on top. The result is indistinguishable from a natural tooth and, with proper care, can last a lifetime.',
        benefits: [
          'Looks and feels identical to a natural tooth',
          'Preserves jawbone — prevents bone loss',
          'No impact on neighboring teeth',
          'Lifetime solution with proper care',
        ],
        faqs: [
          {
            q: 'How long does the implant process take?',
            a: 'From placement to final crown, typically 3–6 months. The healing period (osseointegration) takes 3–4 months; the final restoration takes 2–3 weeks after that.',
          },
          {
            q: 'Is the implant surgery painful?',
            a: 'The area is fully numbed during placement. Post-surgery discomfort is typically manageable with over-the-counter pain relief and resolves within a few days.',
          },
        ],
        featured: true,
        imageUrl:
          'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'crowns',
        categoryId: 'restorative',
        name: 'Crowns & Bridges',
        shortDescription: 'Full-coverage restorations that rebuild strength and beauty.',
        description:
          'A dental crown caps a damaged, cracked, or decayed tooth to restore its shape, size, and function. A bridge uses adjacent teeth as anchors to replace one or more missing teeth. Both are crafted in tooth-colored ceramic to blend seamlessly with your natural smile.',
        benefits: [
          'Fully restores tooth strength and function',
          'Ceramic matched precisely to your natural color',
          'Long-lasting — typically 10–15 years',
          'Same-day CEREC crowns available for eligible cases',
        ],
        faqs: [
          {
            q: 'Does getting a crown hurt?',
            a: 'The preparation is done under local anesthesia, so you will not feel pain during the procedure. Some sensitivity afterward is normal for 1–2 days.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'dentures',
        categoryId: 'restorative',
        name: 'Dentures & Partials',
        shortDescription: 'Modern, natural-looking dentures custom-fitted to you.',
        description:
          'Today\'s dentures bear no resemblance to the loose, uncomfortable appliances of the past. We design full and partial dentures that fit securely, look natural, and give you the confidence to smile, eat, and speak freely. Implant-supported options are available for the ultimate in stability.',
        benefits: [
          'Custom-crafted to your facial structure and skin tone',
          'Implant-supported options for improved stability',
          'Full smile and chewing function restored',
          'Adjustments always included at follow-up visits',
        ],
        faqs: [
          {
            q: 'How long does it take to get used to dentures?',
            a: 'Most patients adjust within 4–8 weeks. Speaking and eating will feel more natural over time as your muscles adapt.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'inlays-onlays',
        categoryId: 'restorative',
        name: 'Inlays & Onlays',
        shortDescription: 'Precision restorations for moderate damage — stronger than fillings, more conservative than crowns.',
        description:
          'When a tooth has too much damage for a filling but not enough to justify a full crown, an inlay or onlay is the ideal solution. Custom-crafted from tooth-colored porcelain or composite resin in a dental lab, these precision restorations fit perfectly into or over the damaged area — restoring full strength while preserving as much natural tooth structure as possible.',
        benefits: [
          'More durable than composite fillings for larger repairs',
          'Preserves significantly more natural tooth than a crown',
          'Matched precisely to your natural tooth color',
          'Long-lasting — typically 10–20 years with proper care',
        ],
        faqs: [
          {
            q: 'What is the difference between an inlay and an onlay?',
            a: 'An inlay fits within the cusps of the tooth (inside the chewing surface). An onlay covers one or more cusps — essentially a partial crown. Your dentist will recommend the appropriate type based on how much of the tooth is affected.',
          },
          {
            q: 'How many appointments does it take?',
            a: 'Typically two visits — one to prepare the tooth and take an impression, and one to place the final restoration once it returns from the lab.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'implant-dentures',
        categoryId: 'restorative',
        name: 'Implant-Supported Dentures',
        shortDescription: 'The stability of implants combined with the coverage of dentures.',
        description:
          'Traditional dentures can slip, restrict what you eat, and require messy adhesives. Implant-supported dentures snap onto a series of dental implants anchored in the jawbone — giving you a full arch of teeth that stay securely in place, feel more natural, and protect your jawbone from the bone loss that conventional dentures cannot prevent.',
        benefits: [
          'Eliminates slipping and adhesives for good',
          'Preserves jawbone and facial structure over time',
          'Eat virtually anything with confidence',
          'Removable for easy cleaning, secure when wearing',
        ],
        faqs: [
          {
            q: 'How many implants are needed to support a denture?',
            a: 'Typically 2–4 implants per arch, depending on the system used and your bone density. We will assess your bone structure and recommend the appropriate number during your consultation.',
          },
          {
            q: 'Am I a candidate if I currently wear traditional dentures?',
            a: 'Many current denture wearers are excellent candidates. However, if significant bone loss has occurred over time, a bone graft may be recommended first to create a stable foundation.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=675&fit=crop&crop=faces&q=85',
      },
      {
        id: 'full-mouth-reconstruction',
        categoryId: 'restorative',
        name: 'Full Mouth Reconstruction',
        shortDescription: 'A comprehensive, coordinated plan to rebuild your entire smile.',
        description:
          'Full mouth reconstruction is for patients whose teeth have been significantly damaged by decay, injury, acid erosion, or years of wear — requiring multiple restorative treatments to be planned and completed together. Rather than treating each problem in isolation, Dr. Quraishi creates a unified roadmap that addresses function, health, and aesthetics simultaneously.',
        benefits: [
          'Restores full chewing function and bite alignment',
          'Addresses all dental issues in a single coordinated plan',
          'Phased treatment options to fit your timeline and budget',
          'Combines restorative and cosmetic work for complete results',
        ],
        faqs: [
          {
            q: 'How long does full mouth reconstruction take?',
            a: 'It depends on the complexity and number of treatments involved. Some cases are completed in a few months; more complex reconstructions may be phased over 6–18 months to allow for healing.',
          },
          {
            q: 'Is full mouth reconstruction covered by insurance?',
            a: 'Restorative procedures are typically covered in part by dental insurance. Cosmetic components may not be. We will break down coverage clearly before treatment begins so there are no surprises.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&h=675&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'specialty',
    name: 'Specialty & Comfort Care',
    description:
      'Specialized expertise for complex needs — from jaw pain relief to pediatric firsts to same-day dental emergencies.',
    services: [
      {
        id: 'emergency',
        categoryId: 'specialty',
        name: 'Emergency Dentistry',
        shortDescription: 'Same-day appointments. Call us first — we move fast.',
        description:
          'Dental emergencies are painful, stressful, and happen at the worst possible times. We reserve same-day slots for urgent situations and do our best to see emergency patients the same day they call. Cracked tooth, lost crown, severe pain, dental trauma — call us before the ER.',
        benefits: [
          'Same-day emergency appointments available',
          'Immediate pain relief is always the first priority',
          'No after-hours emergency surcharge',
          'On-call guidance for after-hours situations',
        ],
        faqs: [
          {
            q: 'What counts as a dental emergency?',
            a: 'Severe toothache, cracked or broken tooth, knocked-out tooth, lost crown or filling causing pain, or any significant dental trauma. When in doubt, call us.',
          },
          {
            q: 'My tooth was knocked out — what do I do right now?',
            a: 'Keep it moist. Place it back in the socket if possible, or store it in milk or between your cheek and gum. Call us immediately — time is critical.',
          },
        ],
        featured: true,
        imageUrl:
          'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'tmj',
        categoryId: 'specialty',
        name: 'TMJ / TMD Treatment',
        shortDescription: 'Jaw pain, clicking, grinding — treated without surgery.',
        description:
          'Temporomandibular joint disorder (TMD) causes jaw pain, clicking, headaches, earaches, and worn-down teeth from nighttime grinding. We diagnose the root cause and treat it with custom night guards, bite adjustments, or other non-surgical approaches that bring real, lasting relief.',
        benefits: [
          'Accurate diagnosis — we find the cause, not just the symptom',
          'Custom-fabricated night guards for grinding',
          'Non-surgical, conservative approach first',
          'Relief from jaw pain, headaches, and ear pressure',
        ],
        faqs: [
          {
            q: 'How do I know if I have TMD?',
            a: 'Common signs include jaw pain or soreness, clicking or popping when you open your mouth, difficulty chewing, headaches, or a worn or cracked teeth from grinding.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=900&h=675&fit=crop&crop=faces&q=85',
      },
      {
        id: 'periodontal',
        categoryId: 'specialty',
        name: 'Periodontal (Gum) Care',
        shortDescription: 'Healthy gums are the foundation of every healthy smile.',
        description:
          'Gum disease affects nearly half of all adults and is the leading cause of tooth loss — yet early and moderate stages are highly treatable. We provide deep cleaning (scaling and root planing), maintenance therapy, and education to stop gum disease in its tracks.',
        benefits: [
          'Halts the progression of gum disease',
          'Deep cleaning removes bacteria below the gumline',
          'Ongoing maintenance keeps you in remission',
          'Linked to improved heart health and overall wellness',
        ],
        faqs: [
          {
            q: 'Is gum disease treatment painful?',
            a: 'Deep cleaning is performed under local anesthesia so you stay comfortable. The area may be tender for a day or two afterward, which is easily managed.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'pediatric',
        categoryId: 'specialty',
        name: 'Pediatric Dentistry',
        shortDescription: 'Gentle, fear-free care that kids actually enjoy.',
        description:
          'The habits and attitudes children develop toward dentistry in their early years last a lifetime. Our team is experienced at making children feel safe, in control, and even having fun at the dentist. We teach good habits while keeping visits positive — the way first dental experiences should be.',
        benefits: [
          'Child-friendly environment and communication style',
          'Preventive sealants and fluoride treatments',
          'Age-appropriate education for kids and parents',
          'Gentle approach that builds trust, not fear',
        ],
        faqs: [
          {
            q: 'When should my child first visit the dentist?',
            a: 'By age 1, or within 6 months of the first tooth appearing — whichever comes first. Early visits establish healthy habits and let us catch any concerns early.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&h=675&fit=crop&crop=faces&q=85',
      },
      {
        id: 'sedation',
        categoryId: 'specialty',
        name: 'Sedation Dentistry',
        shortDescription: 'Comfort-focused sedation for anxious or complex-care patients.',
        description:
          'For patients who experience dental anxiety, have a strong gag reflex, or need extensive work completed in fewer appointments, sedation dentistry is a safe, compassionate solution. We offer nitrous oxide (laughing gas), oral conscious sedation, and can coordinate IV sedation for appropriate cases — so you can receive the care you need in complete comfort.',
        benefits: [
          'Safe for patients of all anxiety levels',
          'Multiple sedation levels — from light relaxation to deeper sedation',
          'Allows complex treatment to be completed in fewer visits',
          'You remain comfortable and cooperative throughout',
        ],
        faqs: [
          {
            q: 'Will I be completely unconscious under sedation?',
            a: 'It depends on the level chosen. Nitrous oxide keeps you relaxed and aware. Oral conscious sedation puts you in a deeply drowsy but responsive state. We will recommend what is appropriate for your needs.',
          },
          {
            q: 'Do I need someone to drive me home?',
            a: 'For nitrous oxide only, you can drive yourself. For oral conscious sedation or deeper options, you will need a driver — plan for it in advance.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=900&h=675&fit=crop&q=85',
      },
      {
        id: 'oral-cancer-screening',
        categoryId: 'specialty',
        name: 'Oral Cancer Screening',
        shortDescription: 'Fast, painless screening included at every comprehensive exam.',
        description:
          'Oral cancer is one of the most survivable cancers when caught early — and one of the most dangerous when it is not. We perform a thorough oral cancer screening at every comprehensive exam at no additional charge, checking the lips, tongue, cheeks, gums, throat, and jaw for any signs of abnormal tissue.',
        benefits: [
          'Included at every comprehensive exam visit',
          'Takes only minutes — painless and non-invasive',
          'Early detection dramatically improves outcomes',
          'Covers lips, tongue, gums, cheeks, palate, and throat',
        ],
        faqs: [
          {
            q: 'Who is at risk for oral cancer?',
            a: 'Tobacco and alcohol use are the leading risk factors, but oral cancer also affects non-smokers and non-drinkers. HPV is an increasingly common cause. Everyone benefits from regular screening regardless of lifestyle.',
          },
          {
            q: 'What happens if something suspicious is found?',
            a: 'We will discuss the finding with you immediately, monitor it at a follow-up, or refer you to a specialist for a biopsy if warranted. Most findings turn out to be benign — but we never take chances.',
          },
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&h=675&fit=crop&crop=faces&q=85',
      },
    ],
  },
]

export const allServices = serviceCategories.flatMap((cat) => cat.services)

export function getServiceById(id: string): Service | undefined {
  return allServices.find((s) => s.id === id)
}
