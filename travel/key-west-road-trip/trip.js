/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  id: 'kw',
  title: 'Key West & Everglades Family Road Trip',
  subtitle: 'Austin → New Orleans → Gulf Coast springs → Everglades → Florida Keys → Key West → Austin · 11 days, family-paced',
  defaultStart: null,
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  season: {
    summary: 'December to April, the dry season: sunny, warm and low humidity, with the best wildlife in the Everglades. March–April is the sweet spot; winter is the priciest.',
    months: ['best', 'best', 'best', 'best', 'good', 'fair', 'fair', 'off', 'off', 'fair', 'good', 'good'],
    labels: { off: 'Risky' },
    notes: [
      'Hurricane season runs June 1 to November 30 and peaks August to October. The Overseas Highway is the only road in and out of the Keys, and visitors are evacuated first when a storm threatens.',
      'June to September is hot, humid and rainy (short daily downpours), with lots of mosquitoes in the Everglades, but it is the cheapest time to go.',
      'Everglades wildlife is easiest to see in the dry season (December–April), when animals gather at the remaining water.',
      'Manatees crowd Crystal River’s warm springs from about November to March.',
      'Winter and spring break (March) are the busiest and most expensive months in Key West. Book rooms and the Dry Tortugas ferry months ahead.'
    ],
    sources: [
      { label: 'NOAA National Hurricane Center', url: 'https://www.nhc.noaa.gov/' },
      { label: 'NPS: Everglades', url: 'https://www.nps.gov/ever/' },
      { label: 'NPS: Dry Tortugas', url: 'https://www.nps.gov/drto/' }
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
      ['Lunch', 'Cajun food in Lafayette.'],
      ['Afternoon', 'Cross the Atchafalaya Basin Bridge over the swamp.'],
      ['Evening', 'Beignets at Café du Monde and a stroll around Jackson Square.']
    ],
    stops: [
      { name: 'Lafayette (lunch)', lat: 30.2241, lon: -92.0198, kind: 'stretch' },
      { name: 'Café du Monde', lat: 29.9575, lon: -90.0618, kind: 'main' },
      { name: 'Jean Lafitte National Historical Park (French Quarter Visitor Center)', lat: 29.9568, lon: -90.0634, kind: 'optional', url: 'https://www.nps.gov/jela/' }
    ],
    hotels: {
      area: 'French Quarter or the Warehouse District',
      options: [
        { name: 'Family hotels in the Warehouse District', q: 'family hotels Warehouse District New Orleans' }
      ]
    },
    flags: []
  },
  {
    n: 2, title: 'New Orleans to Tallahassee', color: '#b45309',
    drive: '~6 hrs', driveNote: 'est.', zones: ['LA', 'FL'],
    wx: { label: 'Tallahassee', lat: 30.4383, lon: -84.2807, tz: 'America/New_York' },
    route: [[29.9511, -90.0715], [30.6818, -88.0145], [30.4213, -87.2169], [30.7210, -86.1080], [30.4383, -84.2807]],
    plan: [
      ['Morning', 'East on I-10.'],
      ['Late morning', 'USS Alabama Battleship Memorial Park in Mobile: climb through a WWII battleship and a submarine.'],
      ['Afternoon', 'Across the Florida Panhandle. You lose an hour at the Apalachicola River, entering Eastern Time.'],
      ['Evening', 'Overnight in Tallahassee.']
    ],
    stops: [
      { name: 'USS Alabama Battleship Memorial Park', lat: 30.6818, lon: -88.0145, kind: 'main', url: 'https://www.ussalabama.com/' },
      { name: 'Pensacola (lunch)', lat: 30.4213, lon: -87.2169, kind: 'stretch' },
      { name: 'Wakulla Springs State Park', lat: 30.2350, lon: -84.3020, kind: 'optional',
        note: 'Riverboat tours past alligators and manatees, 30 minutes south of Tallahassee.' }
    ],
    hotels: {
      area: 'Tallahassee, near I-10',
      options: [
        { name: 'Family hotels in Tallahassee', q: 'family hotels Tallahassee FL' }
      ]
    },
    flags: ['hurricane']
  },
  {
    n: 3, title: 'Crystal River manatees and Weeki Wachee to St. Petersburg', color: '#a16207',
    drive: '~4.5 hrs', driveNote: 'est.', zones: ['FL', 'FL'],
    wx: { label: 'Crystal River', lat: 28.8880, lon: -82.5940, tz: 'America/New_York' },
    route: [[30.4383, -84.2807], [30.1100, -83.5800], [28.8880, -82.5940], [28.5167, -82.5734], [27.7676, -82.6403]],
    plan: [
      ['Early', 'South on US-19 down Florida’s quiet Nature Coast.'],
      ['Morning', 'Three Sisters Springs in Crystal River: watch manatees from the boardwalk (best on cold winter mornings).'],
      ['Afternoon', 'Weeki Wachee Springs State Park: the famous live mermaid show, then a swim at Buccaneer Bay in summer.'],
      ['Evening', 'Sunset at St. Pete Beach or Fort De Soto Park.']
    ],
    stops: [
      { name: 'Three Sisters Springs', lat: 28.8880, lon: -82.5940, kind: 'main', url: 'https://www.fws.gov/refuge/crystal-river',
        note: 'Boardwalk viewing needs a timed ticket in manatee season; the shuttle leaves from downtown Crystal River.' },
      { name: 'Weeki Wachee Springs State Park', lat: 28.5167, lon: -82.5734, kind: 'main', url: 'https://www.floridastateparks.org/parks-and-trails/weeki-wachee-springs-state-park' },
      { name: 'Fort De Soto Park', lat: 27.6250, lon: -82.7360, kind: 'optional', note: 'Wide beaches and a historic fort; a great sunset spot.' }
    ],
    hotels: {
      area: 'St. Pete Beach or Clearwater Beach',
      options: [
        { name: 'Family resorts on St. Pete Beach', q: 'family resort St Pete Beach FL' },
        { name: 'Family hotels on Clearwater Beach', q: 'family hotels Clearwater Beach FL' }
      ]
    },
    flags: ['manatee', 'beach', 'hurricane', 'spring-break']
  },
  {
    n: 4, title: 'Tamiami Trail through Big Cypress and the Everglades', color: '#4d7c0f',
    drive: '~5 hrs + tram tour', driveNote: 'est.', zones: ['FL', 'FL'],
    wx: { label: 'Shark Valley (Everglades)', lat: 25.7576, lon: -80.7660, tz: 'America/New_York' },
    route: [[27.7676, -82.6403], [26.6406, -81.8723], [26.1420, -81.7948], [25.8578, -81.0336], [25.7576, -80.7660], [25.4479, -80.4776]],
    plan: [
      ['Early', 'South on I-75 past Fort Myers and Naples.'],
      ['Late morning', 'East on the Tamiami Trail (US-41). Big Cypress Oasis Visitor Center has alligators right below the boardwalk.'],
      ['Afternoon', 'Shark Valley in Everglades National Park: the 2-hour open-air tram tour to a 45-foot observation tower over the sawgrass. Gators everywhere.'],
      ['Evening', 'On to Homestead or Florida City, the gateway to the Keys.']
    ],
    stops: [
      { name: 'Naples (lunch)', lat: 26.1420, lon: -81.7948, kind: 'stretch' },
      { name: 'Big Cypress Oasis Visitor Center', lat: 25.8578, lon: -81.0336, kind: 'main', url: 'https://www.nps.gov/bicy/' },
      { name: 'Shark Valley, Everglades National Park', lat: 25.7576, lon: -80.7660, kind: 'main', url: 'https://www.nps.gov/ever/planyourvisit/svdirections.htm',
        note: 'Book the tram tour ahead in winter. Keep kids well back from the canal edges: alligators are wild.' }
    ],
    hotels: {
      area: 'Homestead or Florida City',
      options: [
        { name: 'Family hotels in Florida City', q: 'family hotels Florida City FL' }
      ]
    },
    flags: ['hurricane']
  },
  {
    n: 5, title: 'Everglades, Biscayne and the Upper Keys to Marathon', color: '#0f766e',
    drive: '~2.5 hrs + stops', driveNote: 'est.', zones: ['FL', 'FL'],
    wx: { label: 'Key Largo', lat: 25.1250, lon: -80.4064, tz: 'America/New_York' },
    route: [[25.4479, -80.4776], [25.3830, -80.6090], [25.4479, -80.4776], [25.1250, -80.4064], [24.8800, -80.6650], [24.7136, -81.0904]],
    plan: [
      ['Early', 'Anhinga Trail at Royal Palm in Everglades National Park: a short boardwalk with alligators, turtles and wading birds, best in the early morning.'],
      ['Optional', 'Biscayne National Park’s visitor center at Convoy Point, a short drive away, has a glass-bottom boat or paddling trip on many days.'],
      ['Late morning', 'Down the Overseas Highway to Key Largo: a glass-bottom boat over the coral reef at John Pennekamp Coral Reef State Park.'],
      ['Afternoon', 'Feed the giant tarpon at Robbie’s of Islamorada, then the Turtle Hospital in Marathon.']
    ],
    stops: [
      { name: 'Anhinga Trail, Everglades National Park', lat: 25.3830, lon: -80.6090, kind: 'main', url: 'https://www.nps.gov/ever/',
        note: 'Vultures here peck at car rubber: the park lends tarps at the lot to cover your car.' },
      { name: 'Biscayne National Park (Dante Fascell Visitor Center)', lat: 25.4636, lon: -80.3352, kind: 'optional', url: 'https://www.nps.gov/bisc/' },
      { name: 'John Pennekamp Coral Reef State Park', lat: 25.1250, lon: -80.4064, kind: 'main', url: 'https://www.floridastateparks.org/parks-and-trails/john-pennekamp-coral-reef-state-park' },
      { name: 'Robbie’s of Islamorada', lat: 24.8800, lon: -80.6650, kind: 'main' },
      { name: 'The Turtle Hospital', lat: 24.7110, lon: -81.0945, kind: 'main', url: 'https://www.turtlehospital.org/',
        note: 'Guided tours only; book ahead.' }
    ],
    hotels: {
      area: 'Marathon, in the Middle Keys',
      options: [
        { name: 'Family resorts in Marathon', q: 'family resort Marathon FL Keys' }
      ]
    },
    flags: ['boat', 'hurricane']
  },
  {
    n: 6, title: 'Seven Mile Bridge and Bahia Honda to Key West', color: '#0369a1',
    drive: '~1.5 hrs + stops', driveNote: 'est.', zones: ['FL', 'FL'],
    wx: { label: 'Key West', lat: 24.5551, lon: -81.7800, tz: 'America/New_York' },
    route: [[24.7136, -81.0904], [24.7000, -81.1600], [24.6563, -81.2788], [24.6700, -81.3540], [24.5551, -81.7800]],
    plan: [
      ['Morning', 'Drive the Seven Mile Bridge, with open water on both sides.'],
      ['Late morning', 'Bahia Honda State Park: calm, shallow beaches and a walk out onto the old railroad bridge.'],
      ['Midday', 'Look for tiny Key deer on Big Pine Key (drive slowly; they are endangered).'],
      ['Sunset', 'The nightly Sunset Celebration at Mallory Square in Key West: jugglers, music and street performers.']
    ],
    stops: [
      { name: 'Seven Mile Bridge', lat: 24.7000, lon: -81.1600, kind: 'main' },
      { name: 'Bahia Honda State Park', lat: 24.6563, lon: -81.2788, kind: 'main', url: 'https://www.floridastateparks.org/parks-and-trails/bahia-honda-state-park' },
      { name: 'National Key Deer Refuge (Big Pine Key)', lat: 24.6700, lon: -81.3540, kind: 'optional', url: 'https://www.fws.gov/refuge/national-key-deer' },
      { name: 'Mallory Square', lat: 24.5600, lon: -81.8070, kind: 'main' }
    ],
    hotels: {
      area: 'Key West (2 nights). Old Town is walkable; New Town is cheaper with parking.',
      options: [
        { name: 'Family hotels in Key West', q: 'family hotels Key West FL' },
        { name: 'Casa Marina Key West (beachfront)', q: 'Casa Marina Key West' }
      ]
    },
    flags: ['beach', 'hurricane']
  },
  {
    n: 7, title: 'Key West, or Dry Tortugas National Park', color: '#7c3aed',
    drive: 'No driving', driveNote: 'est.', zones: ['FL', 'FL'],
    wx: { label: 'Key West', lat: 24.5551, lon: -81.7800, tz: 'America/New_York' },
    route: [[24.5551, -81.7800], [24.5465, -81.7975], [24.5459, -81.8107], [24.5551, -81.7800]],
    plan: [
      ['Option A', 'Dry Tortugas National Park: an all-day ferry (about 2 hours 15 minutes each way) to Fort Jefferson, a huge 1800s brick fort in the open sea, with snorkeling off the beach. Book months ahead.'],
      ['Option B', 'Explore Key West: the Southernmost Point buoy, the six-toed cats at the Hemingway Home, and the Butterfly & Nature Conservatory.'],
      ['Afternoon', 'Swim and snorkel at Fort Zachary Taylor Historic State Park.'],
      ['Evening', 'Key lime pie and another sunset.']
    ],
    stops: [
      { name: 'Dry Tortugas National Park (Yankee Freedom ferry)', lat: 24.6285, lon: -82.8732, kind: 'optional', url: 'https://www.nps.gov/drto/',
        note: 'The ferry includes breakfast, lunch and snorkel gear. Seas can be rough; check the kids’ age rules and motion-sickness plans.' },
      { name: 'Southernmost Point', lat: 24.5465, lon: -81.7975, kind: 'main' },
      { name: 'Fort Zachary Taylor Historic State Park', lat: 24.5459, lon: -81.8107, kind: 'main', url: 'https://www.floridastateparks.org/parks-and-trails/fort-zachary-taylor-historic-state-park' },
      { name: 'Key West Butterfly & Nature Conservatory', lat: 24.5502, lon: -81.7978, kind: 'optional' }
    ],
    hotels: {
      area: 'Same Key West base',
      options: [
        { name: 'Your Key West hotel', q: 'Key West FL' }
      ]
    },
    flags: ['beach', 'boat', 'hurricane']
  },
  {
    n: 8, title: 'Key West to Naples', color: '#be123c',
    drive: '~5.5 hrs', driveNote: 'est.', zones: ['FL', 'FL'],
    wx: { label: 'Naples', lat: 26.1420, lon: -81.7948, tz: 'America/New_York' },
    route: [[24.5551, -81.7800], [24.7136, -81.0904], [25.1250, -80.4064], [25.4479, -80.4776], [25.7600, -80.8000], [26.1420, -81.7948]],
    plan: [
      ['Morning', 'Back up the Overseas Highway. Leave by 9 AM to beat the traffic.'],
      ['Lunch', 'Key Largo, or Florida City.'],
      ['Afternoon', 'West on the Tamiami Trail. Optional: Everglades City and the Gulf Coast Visitor Center for a mangrove boat tour.'],
      ['Sunset', 'Naples Pier, where dolphins often swim by.']
    ],
    stops: [
      { name: 'Key Largo (lunch)', lat: 25.0865, lon: -80.4473, kind: 'stretch' },
      { name: 'Everglades City (Gulf Coast area)', lat: 25.8573, lon: -81.3851, kind: 'optional', url: 'https://www.nps.gov/ever/planyourvisit/gcdirections.htm' },
      { name: 'Naples Pier', lat: 26.1317, lon: -81.8070, kind: 'main' }
    ],
    hotels: {
      area: 'Naples',
      options: [
        { name: 'Family hotels in Naples', q: 'family hotels Naples FL' }
      ]
    },
    flags: ['beach', 'hurricane']
  },
  {
    n: 9, title: 'Naples to Tallahassee', color: '#15803d',
    drive: '~6.5 hrs', driveNote: 'est.', zones: ['FL', 'FL'],
    wx: { label: 'Gainesville', lat: 29.6516, lon: -82.3248, tz: 'America/New_York' },
    route: [[26.1420, -81.7948], [27.3364, -82.5307], [27.9506, -82.4572], [29.6038, -82.2966], [30.1897, -82.6393], [30.4383, -84.2807]],
    plan: [
      ['Morning', 'North on I-75 past Sarasota and Tampa.'],
      ['Midday', 'Lunch in Gainesville. Optional: Paynes Prairie Preserve State Park, where wild bison and horses roam, seen from an observation tower off US-441.'],
      ['Afternoon', 'West on I-10 to Tallahassee.'],
      ['Evening', 'Overnight in Tallahassee.']
    ],
    stops: [
      { name: 'Tampa (rest stop)', lat: 27.9506, lon: -82.4572, kind: 'stretch' },
      { name: 'Paynes Prairie Preserve State Park', lat: 29.6038, lon: -82.2966, kind: 'optional', url: 'https://www.floridastateparks.org/parks-and-trails/paynes-prairie-preserve-state-park' },
      { name: 'Gainesville (lunch)', lat: 29.6516, lon: -82.3248, kind: 'stretch' }
    ],
    hotels: {
      area: 'Tallahassee, near I-10',
      options: [
        { name: 'Family hotels in Tallahassee', q: 'family hotels Tallahassee FL' }
      ]
    },
    flags: ['hurricane']
  },
  {
    n: 10, title: 'Tallahassee to Baton Rouge', color: '#9333ea',
    drive: '~6 hrs', driveNote: 'est.', zones: ['FL', 'LA'],
    wx: { label: 'Baton Rouge', lat: 30.4515, lon: -91.1871, tz: 'America/Chicago' },
    route: [[30.4383, -84.2807], [30.7210, -86.1080], [30.4213, -87.2169], [30.6818, -88.0145], [30.3960, -88.8853], [30.4515, -91.1871]],
    plan: [
      ['Morning', 'West on I-10. You gain an hour back at the Apalachicola River.'],
      ['Optional', 'Gulf Islands National Seashore at Pensacola Beach for a last beach stop (about a 30-minute detour).'],
      ['Afternoon', 'Through Mobile and along the Mississippi coast.'],
      ['Evening', 'Overnight in Baton Rouge.']
    ],
    stops: [
      { name: 'Gulf Islands National Seashore (Pensacola Beach)', lat: 30.3271, lon: -87.2903, kind: 'optional', url: 'https://www.nps.gov/guis/' },
      { name: 'Biloxi (rest stop)', lat: 30.3960, lon: -88.8853, kind: 'stretch' }
    ],
    hotels: {
      area: 'Baton Rouge',
      options: [
        { name: 'Family hotels in Baton Rouge', q: 'family hotels Baton Rouge LA' }
      ]
    },
    flags: ['hurricane']
  },
  {
    n: 11, title: 'Baton Rouge to Austin', color: '#0e7490',
    drive: '~6.5 hrs', driveNote: 'est.', zones: ['LA', 'TX'],
    wx: { label: 'Houston', lat: 29.7604, lon: -95.3698, tz: 'America/Chicago' },
    route: [[30.4515, -91.1871], [30.2241, -92.0198], [30.2266, -93.2174], [29.7604, -95.3698], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'West on I-10.'],
      ['Lunch', 'One last Cajun lunch in Lafayette.'],
      ['Afternoon', 'Through Houston.'],
      ['Evening', 'Arrive in Austin.']
    ],
    stops: [
      { name: 'Lafayette (lunch)', lat: 30.2241, lon: -92.0198, kind: 'stretch' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'kw-hotel', text: 'Book Key West rooms first (nights 6–7): they are the most expensive and sell out in winter.' },
  { id: 'tortugas', text: 'Book the Dry Tortugas ferry for day 7 (it often sells out months ahead).' },
  { id: 'shark', text: 'Book the Shark Valley tram tour for day 4.' },
  { id: 'turtle', text: 'Book a Turtle Hospital tour and the Pennekamp glass-bottom boat for day 5.' },
  { id: 'manatee', text: 'In manatee season, get Three Sisters Springs boardwalk tickets for day 3.' },
  { id: 'pass', text: 'Buy an America the Beautiful annual pass: it covers Everglades, Biscayne, Big Cypress, Dry Tortugas and Gulf Islands (the ferry fare is separate).' },
  { id: 'hurricane', text: 'Check nhc.noaa.gov the week before if you are traveling June to November, and book refundable rooms.' },
  { id: 'hotels-rest', text: 'Book the remaining hotels with free cancellation.' },
  { id: 'car', text: 'Car check: tires, A/C, wipers. Get a toll transponder, or know the rental’s toll policy: many Florida roads are cashless.' }
];

window.PACKING = [
  'Swimsuits, rash guards and water shoes',
  'Reef-safe sunscreen (required to protect the coral), sun hats and sunglasses',
  'Snorkel masks that fit the kids',
  'Insect repellent for the Everglades, especially at dawn and dusk',
  'Life jackets sized for the kids, and motion-sickness bands for boat days',
  'Light rain jackets for afternoon showers',
  'Stroller for the boardwalks; a child carrier for the ferry and the fort',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Small first-aid kit, any medicines, and after-sun gel'
];
