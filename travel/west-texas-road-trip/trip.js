/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  id: 'wt',
  title: 'Big Bend & West Texas Parks Family Road Trip',
  subtitle: 'Austin → Big Bend → Fort Davis → White Sands → Carlsbad Caverns → Guadalupe Mountains → Austin · 8 days, family-paced loop',
  defaultStart: null,
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  roads: 'drivetexas.org (Texas) or nmroads.com (New Mexico)',
  season: {
    summary: 'October–November and February–April: warm days and cool nights in the desert. Avoid June to August, when Big Bend’s lowlands pass 100°F.',
    months: ['good', 'best', 'best', 'best', 'fair', 'off', 'off', 'off', 'fair', 'best', 'best', 'good'],
    labels: { off: 'Too hot' },
    notes: [
      'Summer is dangerously hot on Big Bend’s desert and river trails (often over 100°F). White Sands averages about 97°F in summer. Only the higher Chisos Basin and Davis Mountains stay pleasant.',
      'Monsoon season (about July to mid-October) brings afternoon thunderstorms and flash floods in canyons and washes.',
      'Spring break (mid-March) is Big Bend’s busiest week of the year: book park lodging and campsites months ahead.',
      'Carlsbad Caverns’ sunset Bat Flight program runs from about late May to October, while the bats are home from Mexico.',
      'Winter is mild by day but can freeze at night in the Chisos and Guadalupe Mountains, and Guadalupe Peak is known for very strong winds.'
    ],
    sources: [
      { label: 'NPS: Big Bend weather', url: 'https://www.nps.gov/bibe/planyourvisit/weather.htm' },
      { label: 'NPS: White Sands basic info', url: 'https://www.nps.gov/whsa/planyourvisit/basicinfo.htm' },
      { label: 'NPS: Carlsbad Caverns', url: 'https://www.nps.gov/cave/' }
    ]
  }
};

window.DAYS = [
  {
    n: 1, title: 'Austin to Big Bend National Park', color: '#c2410c',
    drive: '~7 hrs', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Panther Junction (Big Bend)', lat: 29.3277, lon: -103.2063, tz: 'America/Chicago' },
    route: [[30.2672, -97.7431], [30.2752, -98.8720], [30.4894, -99.7720], [30.5669, -100.6434], [30.8940, -102.8793], [30.2066, -103.2420], [29.3277, -103.2063]],
    plan: [
      ['Early', 'West through Fredericksburg and the Hill Country on I-10.'],
      ['Late morning', 'Optional: Caverns of Sonora, one of the most decorated show caves in the world, right off I-10.'],
      ['Afternoon', 'South from Fort Stockton through Marathon into Big Bend. Fill the tank in Marathon or Fort Stockton.'],
      ['Sunset', 'Into the park. Stop at the Panther Junction visitor center for Junior Ranger booklets.']
    ],
    stops: [
      { name: 'Fredericksburg (rest stop)', lat: 30.2752, lon: -98.8720, kind: 'stretch' },
      { name: 'Caverns of Sonora', lat: 30.5546, lon: -100.8128, kind: 'optional', url: 'https://cavernsofsonora.com/' },
      { name: 'Fort Stockton (lunch, gas)', lat: 30.8940, lon: -102.8793, kind: 'stretch' },
      { name: 'Big Bend National Park (Panther Junction)', lat: 29.3277, lon: -103.2063, kind: 'main', url: 'https://www.nps.gov/bibe/',
        note: 'Cell service is spotty to none in most of the park. Download offline maps before you arrive.' }
    ],
    hotels: {
      area: 'Big Bend (3 nights): in-park lodging in the Chisos Basin if available, or Terlingua / Study Butte just outside the west entrance',
      options: [
        { name: 'Lodging in the Chisos Basin', q: 'Chisos Mountains Lodge Big Bend' },
        { name: 'Family lodging in Terlingua and Study Butte', q: 'family lodging Terlingua TX' }
      ]
    },
    flags: ['desert-heat', 'spring-break']
  },
  {
    n: 2, title: 'Big Bend: Chisos Basin and Santa Elena Canyon', color: '#b45309',
    drive: '~2.5 hrs of park roads', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Chisos Basin', lat: 29.2700, lon: -103.3000, tz: 'America/Chicago' },
    route: [[29.3216, -103.5577], [29.2700, -103.3000], [29.2140, -103.4650], [29.1340, -103.5150], [29.1670, -103.6100], [29.3216, -103.5577]],
    plan: [
      ['Morning', 'Up into the cooler Chisos Basin. The Window View Trail is a flat, paved, 0.3-mile loop with mountain views.'],
      ['Midday', 'Ross Maxwell Scenic Drive past Sotol Vista and Castolon.'],
      ['Afternoon', 'Santa Elena Canyon: a short trail into a 1,500-foot-deep canyon on the Rio Grande, with Mexico on the far wall. You may need to wade a shallow creek at the start.'],
      ['Sunset', 'Watch the sun set through “the Window” notch from the Chisos Basin, then look up: Big Bend has some of the darkest skies in the country.']
    ],
    stops: [
      { name: 'Window View Trail, Chisos Basin', lat: 29.2700, lon: -103.3000, kind: 'main' },
      { name: 'Sotol Vista Overlook', lat: 29.2140, lon: -103.4650, kind: 'stretch' },
      { name: 'Santa Elena Canyon', lat: 29.1670, lon: -103.6100, kind: 'main',
        note: 'Skip the canyon if storms are around: flash floods come fast.' }
    ],
    hotels: {
      area: 'Same Big Bend base',
      options: [
        { name: 'Your Big Bend lodging', q: 'Terlingua TX' }
      ]
    },
    flags: ['desert-heat', 'monsoon']
  },
  {
    n: 3, title: 'Big Bend: hot springs, fossils and Boquillas', color: '#a16207',
    drive: '~2.5 hrs of park roads', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Rio Grande Village', lat: 29.1830, lon: -102.9560, tz: 'America/Chicago' },
    route: [[29.3216, -103.5577], [29.3277, -103.2063], [29.4617, -103.1561], [29.3277, -103.2063], [29.1778, -102.9989], [29.1830, -102.9560], [29.1960, -102.9230], [29.3216, -103.5577]],
    plan: [
      ['Morning', 'Fossil Discovery Exhibit: dinosaur and early mammal fossils from this area, with hands-on exhibits for kids.'],
      ['Late morning', 'Hot Springs Historic Trail: a short walk to a 105°F spring right on the bank of the Rio Grande. Soak your feet (or more).'],
      ['Afternoon', 'Boquillas Canyon overlook and trail. Optional: with passports, cross by rowboat to the village of Boquillas, Mexico, through the official port of entry.'],
      ['Evening', 'Back to your Big Bend base for stargazing.']
    ],
    stops: [
      { name: 'Fossil Discovery Exhibit', lat: 29.4617, lon: -103.1561, kind: 'main' },
      { name: 'Hot Springs Historic Trail', lat: 29.1778, lon: -102.9989, kind: 'main',
        note: 'Hold onto kids: the river current next to the spring is strong.' },
      { name: 'Boquillas Canyon', lat: 29.1960, lon: -102.9230, kind: 'main' },
      { name: 'Boquillas Crossing Port of Entry', lat: 29.1880, lon: -102.9700, kind: 'optional',
        note: 'Passports required for everyone, including kids. Check the days and hours it is open before you go.' }
    ],
    hotels: {
      area: 'Same Big Bend base',
      options: [
        { name: 'Your Big Bend lodging', q: 'Terlingua TX' }
      ]
    },
    flags: ['desert-heat', 'monsoon']
  },
  {
    n: 4, title: 'River Road to Marfa and Fort Davis', color: '#4d7c0f',
    drive: '~3.5 hrs', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Fort Davis', lat: 30.5882, lon: -103.8946, tz: 'America/Chicago' },
    route: [[29.3216, -103.5577], [29.2621, -103.7766], [29.5607, -104.3721], [30.3094, -104.0206], [30.5882, -103.8946]],
    plan: [
      ['Morning', 'The River Road (FM 170) through Big Bend Ranch State Park: one of the most scenic drives in Texas, hugging the Rio Grande with steep hills and canyon views.'],
      ['Midday', 'Lunch in Marfa, the quirky West Texas art town.'],
      ['Afternoon', 'Fort Davis National Historic Site, a well-preserved 1850s frontier army fort.'],
      ['Evening', 'A Star Party at McDonald Observatory: look through big telescopes under one of the darkest skies in the U.S. Book ahead.']
    ],
    stops: [
      { name: 'Big Bend Ranch State Park (Barton Warnock Visitor Center)', lat: 29.2700, lon: -103.7600, kind: 'main', url: 'https://tpwd.texas.gov/state-parks/big-bend-ranch' },
      { name: 'Marfa (lunch)', lat: 30.3094, lon: -104.0206, kind: 'stretch' },
      { name: 'Fort Davis National Historic Site', lat: 30.5985, lon: -103.8915, kind: 'main', url: 'https://www.nps.gov/foda/' },
      { name: 'McDonald Observatory', lat: 30.6797, lon: -104.0220, kind: 'main', url: 'https://mcdonaldobservatory.org/',
        note: 'Star Parties run on set nights and sell out. Bring warm layers: it gets cold on the mountain after dark.' }
    ],
    hotels: {
      area: 'Fort Davis, in the cool Davis Mountains',
      options: [
        { name: 'Hotel Limpia (historic)', q: 'Hotel Limpia Fort Davis' },
        { name: 'Lodging in Fort Davis', q: 'lodging Fort Davis TX' }
      ]
    },
    flags: ['monsoon']
  },
  {
    n: 5, title: 'Fort Davis to White Sands National Park', color: '#0f766e',
    drive: '~5 hrs', driveNote: 'est.', zones: ['TX', 'NM'],
    wx: { label: 'White Sands', lat: 32.7797, lon: -106.1717, tz: 'America/Denver' },
    route: [[30.5882, -103.8946], [31.0393, -104.8307], [31.7619, -106.4850], [32.3199, -106.7637], [32.7797, -106.1717], [32.8995, -105.9603]],
    plan: [
      ['Morning', 'North to I-10 at Van Horn, then west to El Paso. You gain an hour entering Mountain Time.'],
      ['Midday', 'Lunch in El Paso. Optional: Chamizal National Memorial, a free NPS site on the U.S.–Mexico border.'],
      ['Afternoon', 'White Sands National Park: buy plastic sleds at the visitor center and slide down the brilliant white gypsum dunes.'],
      ['Sunset', 'Stay for sunset on the dunes, when the sand glows pink. Then overnight in Alamogordo.']
    ],
    stops: [
      { name: 'Van Horn (gas)', lat: 31.0393, lon: -104.8307, kind: 'stretch' },
      { name: 'Chamizal National Memorial', lat: 31.7680, lon: -106.4480, kind: 'optional', url: 'https://www.nps.gov/cham/' },
      { name: 'White Sands National Park', lat: 32.7797, lon: -106.1717, kind: 'main', url: 'https://www.nps.gov/whsa/planyourvisit/park-closures.htm',
        note: 'Missile tests can close the park and US-70 for a few hours. Check the closure page the day before.' }
    ],
    hotels: {
      area: 'Alamogordo, 15 minutes from the dunes',
      options: [
        { name: 'Family hotels in Alamogordo', q: 'family hotels Alamogordo NM' }
      ]
    },
    flags: ['dunes', 'desert-heat', 'monsoon']
  },
  {
    n: 6, title: 'Over the mountains to Carlsbad', color: '#0369a1',
    drive: '~3 hrs', driveNote: 'est.', zones: ['NM', 'NM'],
    wx: { label: 'Cloudcroft', lat: 32.9573, lon: -105.7425, tz: 'America/Denver' },
    route: [[32.8995, -105.9603], [32.9573, -105.7425], [32.8423, -104.4033], [32.4207, -104.2288]],
    plan: [
      ['Morning', 'Optional: back to White Sands at opening for an early sled run and the Interdune Boardwalk.'],
      ['Midday', 'Up to Cloudcroft, a pine-forest mountain town at 8,600 feet, with the old railroad trestle overlook.'],
      ['Afternoon', 'Down to Carlsbad. Optional: Living Desert Zoo and Gardens State Park, with desert animals native to the region.'],
      ['Evening', 'Overnight in Carlsbad (2 nights).']
    ],
    stops: [
      { name: 'White Sands Interdune Boardwalk', lat: 32.8090, lon: -106.2230, kind: 'optional' },
      { name: 'Cloudcroft (lunch)', lat: 32.9573, lon: -105.7425, kind: 'stretch' },
      { name: 'Living Desert Zoo and Gardens State Park', lat: 32.4400, lon: -104.2600, kind: 'optional' }
    ],
    hotels: {
      area: 'Carlsbad, or Whites City right at the park entrance',
      options: [
        { name: 'Family hotels in Carlsbad', q: 'family hotels Carlsbad NM' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 7, title: 'Carlsbad Caverns and Guadalupe Mountains', color: '#7c3aed',
    drive: '~2.5 hrs round trip', driveNote: 'est.', zones: ['NM', 'NM'],
    wx: { label: 'Carlsbad Caverns', lat: 32.1753, lon: -104.4436, tz: 'America/Denver' },
    route: [[32.4207, -104.2288], [32.1753, -104.4436], [31.8941, -104.8217], [32.1753, -104.4436], [32.4207, -104.2288]],
    plan: [
      ['Morning', 'Carlsbad Caverns National Park: take the elevator down 750 feet and walk the Big Room, a 1.25-mile, mostly flat loop through one of the largest cave chambers in North America.'],
      ['Midday', 'Picnic, then 30 minutes south into Texas to Guadalupe Mountains National Park.'],
      ['Afternoon', 'The easy Smith Spring loop from Frijole Ranch, or the start of McKittrick Canyon, below the highest peak in Texas.'],
      ['Sunset', 'In summer, back to Carlsbad Caverns for the Bat Flight program as hundreds of thousands of bats spiral out of the cave.']
    ],
    stops: [
      { name: 'Carlsbad Caverns National Park', lat: 32.1753, lon: -104.4436, kind: 'main', url: 'https://www.nps.gov/cave/',
        note: 'Needs a timed-entry ticket from recreation.gov. The cave stays about 56°F; bring a light jacket. No strollers in the cave.' },
      { name: 'Guadalupe Mountains National Park (Pine Springs Visitor Center)', lat: 31.8941, lon: -104.8217, kind: 'main', url: 'https://www.nps.gov/gumo/' },
      { name: 'Smith Spring Trail, Frijole Ranch', lat: 31.9083, lon: -104.8019, kind: 'main' }
    ],
    hotels: {
      area: 'Same Carlsbad base',
      options: [
        { name: 'Your Carlsbad hotel', q: 'Carlsbad NM' }
      ]
    },
    flags: ['bats', 'wind']
  },
  {
    n: 8, title: 'Carlsbad to Austin, by Midland and San Angelo', color: '#be123c',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['NM', 'TX'],
    wx: { label: 'Midland', lat: 31.9973, lon: -102.0779, tz: 'America/Chicago' },
    route: [[32.4207, -104.2288], [31.4229, -103.4932], [31.6167, -102.8167], [31.8457, -102.3676], [31.9973, -102.0779], [31.4638, -100.4370], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'Southeast to Pecos. You lose an hour entering Central Time.'],
      ['Optional', 'Monahans Sandhills State Park: rent a sand disk and surf one more set of dunes.'],
      ['Midday', 'Lunch in Midland, then southeast to San Angelo: a different road home than the way out.'],
      ['Evening', 'Arrive in Austin.']
    ],
    stops: [
      { name: 'Monahans Sandhills State Park', lat: 31.6167, lon: -102.8167, kind: 'optional', url: 'https://tpwd.texas.gov/state-parks/monahans-sandhills' },
      { name: 'Midland (lunch)', lat: 31.9973, lon: -102.0779, kind: 'stretch' },
      { name: 'San Angelo (rest stop)', lat: 31.4638, lon: -100.4370, kind: 'stretch' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'bibe-lodging', text: 'Book Big Bend lodging first (nights 1–3): in-park rooms and campsites sell out months ahead, especially around spring break and Thanksgiving.' },
  { id: 'cave', text: 'Get a Carlsbad Caverns timed-entry ticket on recreation.gov for day 7.' },
  { id: 'stars', text: 'Book McDonald Observatory Star Party tickets for day 4.' },
  { id: 'pass', text: 'Buy an America the Beautiful annual pass: it covers Big Bend, Fort Davis, White Sands, Carlsbad Caverns and Guadalupe Mountains. Texas state parks are separate.' },
  { id: 'passport', text: 'If you want to cross to Boquillas, Mexico, bring passports for everyone.' },
  { id: 'whitesands', text: 'Check the White Sands closure page the day before day 5 for missile-test closures.' },
  { id: 'gas', text: 'Fill the tank whenever you can: gas stations are 50–100 miles apart in Big Bend country.' },
  { id: 'offline', text: 'Download offline maps and the NPS app park guides: there is little or no cell service in Big Bend.' },
  { id: 'hotels-rest', text: 'Book the remaining hotels with free cancellation.' },
  { id: 'car', text: 'Car check: tires (including the spare), A/C, and a gallon of water per person in the car.' }
];

window.PACKING = [
  'Wide-brim sun hats, sunscreen and sunglasses: there is little shade in the desert',
  'Plenty of water: at least a gallon per person per day on hiking days',
  'Warm layers for cold desert nights, the observatory and the caves',
  'Water shoes for the hot springs and creek crossings',
  'Plastic sleds for White Sands (or buy them at the visitor center)',
  'A child carrier for trails and the cave (no strollers in Carlsbad Caverns)',
  'Binoculars and a red-light flashlight for stargazing',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Small first-aid kit, any medicines, tweezers for cactus spines, and passports if crossing to Boquillas'
];
