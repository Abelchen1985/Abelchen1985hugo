/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  id: 'de',
  title: 'Destin & Gulf Coast Family Road Trip',
  subtitle: 'Austin → New Orleans → Destin → 30A → Gulf Islands → Austin · 6 days, family-paced',
  defaultStart: null,
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  season: {
    summary: 'Late April–May and October: warm, sunny beach days, a comfortable Gulf, lower humidity and lighter crowds than summer.',
    months: ['fair', 'fair', 'good', 'best', 'best', 'good', 'fair', 'fair', 'good', 'best', 'good', 'fair'],
    notes: [
      'Hurricane season runs June 1 to November 30 and peaks August to October. Book refundable rooms and watch the National Hurricane Center the week before.',
      'June to August is peak season: the warmest water, but also the biggest crowds, highest prices, sticky humidity and near-daily afternoon thunderstorms.',
      'March brings spring-break crowds and higher prices.',
      'December to February is mild (highs around the 60s°F) and cheap, but the Gulf is too cold for most kids to swim.',
      'September is quieter and the water is still warm, but it falls in the peak of hurricane season.'
    ],
    sources: [
      { label: 'NOAA National Hurricane Center', url: 'https://www.nhc.noaa.gov/' },
      { label: 'Visit Destin: things to do', url: 'https://www.destinfwb.com/' }
    ]
  }
};

window.DAYS = [
  {
    n: 1, title: 'Austin to New Orleans', color: '#c2410c',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['TX', 'LA'],
    wx: { label: 'New Orleans', lat: 29.9511, lon: -90.0715, tz: 'America/Chicago' },
    route: [[30.2672, -97.7431], [29.7604, -95.3698], [30.2266, -93.2174], [30.2241, -92.0198], [30.4515, -91.1871], [29.9511, -90.0715]],
    plan: [
      ['Early', 'Leave Austin, east through Houston on I-10.'],
      ['Lunch', 'Cajun food in Lafayette: boudin, gumbo or crawfish.'],
      ['Afternoon', 'Cross the 18-mile Atchafalaya Basin Bridge over the swamp, then on to New Orleans.'],
      ['Evening', 'Stroll the French Quarter and Jackson Square while the street musicians play.']
    ],
    stops: [
      { name: 'Lafayette (lunch)', lat: 30.2241, lon: -92.0198, kind: 'stretch' },
      { name: 'Atchafalaya Basin Welcome Center', lat: 30.2838, lon: -91.6941, kind: 'optional', note: 'Rest stop on I-10 with swamp views.' },
      { name: 'Jackson Square', lat: 29.9574, lon: -90.0630, kind: 'main' }
    ],
    hotels: {
      area: 'French Quarter or the Warehouse District (quieter at night)',
      options: [
        { name: 'Family hotels in the Warehouse District', q: 'family hotels Warehouse District New Orleans' },
        { name: 'Hotel Monteleone (French Quarter)', q: 'Hotel Monteleone New Orleans' }
      ]
    },
    flags: []
  },
  {
    n: 2, title: 'New Orleans to Destin', color: '#b45309',
    drive: '~4.5 hrs', driveNote: 'est.', zones: ['LA', 'FLC'],
    wx: { label: 'Destin', lat: 30.3935, lon: -86.4958, tz: 'America/Chicago' },
    route: [[29.9511, -90.0715], [30.3960, -88.8853], [30.6818, -88.0145], [30.4213, -87.2169], [30.3935, -86.4958]],
    plan: [
      ['Breakfast', 'Beignets at Café du Monde. Next door, the Jean Lafitte National Historical Park visitor center on Decatur Street runs free ranger talks.'],
      ['Late morning', 'East on I-10 along the Mississippi coast.'],
      ['Midday', 'USS Alabama Battleship Memorial Park in Mobile: kids can climb through a WWII battleship and a submarine.'],
      ['Afternoon', 'Arrive in Destin and walk straight onto the sugar-white sand.']
    ],
    stops: [
      { name: 'Café du Monde', lat: 29.9575, lon: -90.0618, kind: 'main', note: 'The line moves fast; go early.' },
      { name: 'Jean Lafitte National Historical Park (French Quarter Visitor Center)', lat: 29.9568, lon: -90.0634, kind: 'optional', url: 'https://www.nps.gov/jela/' },
      { name: 'USS Alabama Battleship Memorial Park', lat: 30.6818, lon: -88.0145, kind: 'main', url: 'https://www.ussalabama.com/' }
    ],
    hotels: {
      area: 'Destin, near the beach (book a condo with a kitchen for 3 nights)',
      options: [
        { name: 'Beachfront condos in Destin', q: 'beachfront condo Destin FL' },
        { name: 'Family resorts in Miramar Beach', q: 'family resort Miramar Beach FL' }
      ]
    },
    flags: ['beach', 'hurricane']
  },
  {
    n: 3, title: 'Destin beach day and Crab Island', color: '#0f766e',
    drive: 'Short local drives', driveNote: 'est.', zones: ['FLC', 'FLC'],
    wx: { label: 'Destin', lat: 30.3935, lon: -86.4958, tz: 'America/Chicago' },
    route: [[30.3935, -86.4958], [30.3855, -86.4459], [30.3937, -86.5129], [30.3960, -86.5110], [30.3935, -86.4958]],
    plan: [
      ['Morning', 'Henderson Beach State Park: dunes, calm water and boardwalk access with restrooms.'],
      ['Midday', 'Lunch and a nap.'],
      ['Afternoon', 'Crab Island, a shallow, clear sandbar you can only reach by boat. Rent a pontoon or join a tour, and wade in water that is often waist-deep. Life jackets for the kids.'],
      ['Evening', 'HarborWalk Village for dinner, the fishing fleet and sunset (fireworks some summer nights).']
    ],
    stops: [
      { name: 'Henderson Beach State Park', lat: 30.3855, lon: -86.4459, kind: 'main', url: 'https://www.floridastateparks.org/parks-and-trails/henderson-beach-state-park' },
      { name: 'Crab Island', lat: 30.3960, lon: -86.5110, kind: 'main', note: 'Boat access only; best at high tide on a calm day.' },
      { name: 'HarborWalk Village', lat: 30.3937, lon: -86.5129, kind: 'main' }
    ],
    hotels: {
      area: 'Same Destin base',
      options: [
        { name: 'Your Destin condo', q: 'Destin FL' }
      ]
    },
    flags: ['beach', 'boat', 'hurricane', 'gulf-cold', 'spring-break']
  },
  {
    n: 4, title: 'Scenic 30A beach towns', color: '#0369a1',
    drive: '~1.5 hrs round trip', driveNote: 'est.', zones: ['FLC', 'FLC'],
    wx: { label: 'Santa Rosa Beach (30A)', lat: 30.3299, lon: -86.1590, tz: 'America/Chicago' },
    route: [[30.3935, -86.4958], [30.3700, -86.2700], [30.3299, -86.1590], [30.3217, -86.1408], [30.2797, -86.0122], [30.3935, -86.4958]],
    plan: [
      ['Morning', 'Grayton Beach State Park: one of the top-rated beaches in the U.S., with a coastal dune lake behind it.'],
      ['Midday', 'Seaside: pastel cottages, food trucks at Airstream Row and an easy, car-free town to wander.'],
      ['Afternoon', 'Bike or stroll Rosemary Beach, then relax at the beach.'],
      ['Optional', 'Topsail Hill Preserve State Park for tall dunes and quiet sand.']
    ],
    stops: [
      { name: 'Topsail Hill Preserve State Park', lat: 30.3700, lon: -86.2700, kind: 'optional' },
      { name: 'Grayton Beach State Park', lat: 30.3299, lon: -86.1590, kind: 'main', url: 'https://www.floridastateparks.org/parks-and-trails/grayton-beach-state-park' },
      { name: 'Seaside', lat: 30.3217, lon: -86.1408, kind: 'main' },
      { name: 'Rosemary Beach', lat: 30.2797, lon: -86.0122, kind: 'main' }
    ],
    hotels: {
      area: 'Same Destin base',
      options: [
        { name: 'Your Destin condo', q: 'Destin FL' }
      ]
    },
    flags: ['beach', 'hurricane', 'gulf-cold']
  },
  {
    n: 5, title: 'Gulf Islands National Seashore to Lake Charles', color: '#7c3aed',
    drive: '~6 hrs', driveNote: 'est.', zones: ['FLC', 'LA'],
    wx: { label: 'Pensacola Beach / Fort Pickens', lat: 30.3271, lon: -87.2903, tz: 'America/Chicago' },
    route: [[30.3935, -86.4958], [30.4064, -86.8638], [30.3271, -87.2903], [30.4213, -87.2169], [30.6818, -88.0145], [30.2266, -93.2174]],
    plan: [
      ['Early', 'West along the coast past Navarre Beach.'],
      ['Morning', 'Fort Pickens in Gulf Islands National Seashore: explore a brick fort from the 1830s, then a last beach swim.'],
      ['Midday', 'Lunch in Pensacola, then west on I-10 through Mobile and Biloxi.'],
      ['Evening', 'Overnight in Lake Charles.']
    ],
    stops: [
      { name: 'Navarre Beach Pier', lat: 30.3770, lon: -86.8640, kind: 'stretch' },
      { name: 'Fort Pickens, Gulf Islands National Seashore', lat: 30.3271, lon: -87.2903, kind: 'main', url: 'https://www.nps.gov/guis/',
        note: 'Entrance fee (covered by the national park pass). The road can close after storms.' },
      { name: 'Pensacola (lunch)', lat: 30.4213, lon: -87.2169, kind: 'stretch' }
    ],
    hotels: {
      area: 'Lake Charles, right on I-10',
      options: [
        { name: 'Family hotels in Lake Charles', q: 'family hotels Lake Charles LA' }
      ]
    },
    flags: ['beach', 'hurricane']
  },
  {
    n: 6, title: 'Lake Charles to Space Center Houston to Austin', color: '#be123c',
    drive: '~4.5 hrs + detour', driveNote: 'est.', zones: ['LA', 'TX'],
    wx: { label: 'Houston', lat: 29.7604, lon: -95.3698, tz: 'America/Chicago' },
    route: [[30.2266, -93.2174], [30.0802, -94.1266], [29.5519, -95.0981], [29.7604, -95.3698], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'West into Texas.'],
      ['Midday', 'Space Center Houston, NASA’s official visitor center: see real rockets, and take the tram tour to Mission Control.'],
      ['Afternoon', 'On to Austin (about 3 hours).'],
      ['Evening', 'Arrive in Austin.']
    ],
    stops: [
      { name: 'Space Center Houston', lat: 29.5519, lon: -95.0981, kind: 'main', url: 'https://spacecenter.org/',
        note: 'Plan 3–4 hours. Buy tickets online.' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'condo', text: 'Book the Destin condo (nights 2–4) with a kitchen, and check its storm-cancellation policy.' },
  { id: 'crab', text: 'Reserve a pontoon boat or Crab Island tour for day 3.' },
  { id: 'nola', text: 'Book the New Orleans hotel (night 1), and check parking costs.' },
  { id: 'space', text: 'Buy Space Center Houston tickets for day 6.' },
  { id: 'pass', text: 'Bring the America the Beautiful pass if you have one (it covers Gulf Islands National Seashore).' },
  { id: 'hurricane', text: 'Check nhc.noaa.gov the week before if you are traveling June to November.' },
  { id: 'hotels-rest', text: 'Book Lake Charles (night 5) with free cancellation.' },
  { id: 'car', text: 'Car check: tires, A/C, wipers, and a cooler for beach days.' }
];

window.PACKING = [
  'Swimsuits, rash guards and water shoes',
  'Reef-safe sunscreen, sun hats and sunglasses: the white sand reflects a lot of sun',
  'Beach tent or umbrella, and sand toys',
  'Life jackets sized for the kids (for the boat day)',
  'Stroller with big wheels, or a beach wagon',
  'Light rain jackets for afternoon thunderstorms',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Small first-aid kit, any medicines, and after-sun gel',
  'Cooler, refillable water bottles and car snacks'
];
