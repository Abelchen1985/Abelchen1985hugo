/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  id: 'co',
  title: 'Colorado Parks Family Road Trip',
  subtitle: 'Austin → Great Sand Dunes → Black Canyon → Million Dollar Highway → Mesa Verde → Taos → Santa Fe → Austin · 10 days, family-paced loop',
  defaultStart: null,
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  roads: 'cotrip.org (Colorado) or nmroads.com (New Mexico)',
  snowMonths: [3, 4, 5, 10, 11],
  season: {
    summary: 'June and September. In June, Medano Creek flows at Great Sand Dunes; in September, the aspens turn gold and crowds thin out. Every road and tour is open in both.',
    months: ['off', 'off', 'fair', 'fair', 'good', 'best', 'good', 'good', 'best', 'good', 'fair', 'off'],
    labels: { off: 'Snowy' },
    notes: [
      'Medano Creek at Great Sand Dunes usually flows from late May to June, making a shallow “beach” kids can splash in. By July it is often dry, and the sand surface can reach 150°F on summer afternoons, so climb dunes early.',
      'Mesa Verde’s ranger-led cliff-dwelling tours, like Cliff Palace, run in the warm season (roughly May to October) and need tickets from recreation.gov.',
      'The Million Dollar Highway (Red Mountain Pass), Wolf Creek Pass and North Pass get snow from about October to May. Winter driving there is serious.',
      'July and August bring monsoon thunderstorms most afternoons in the mountains. Do high overlooks and hikes in the morning.',
      'The aspens usually peak from late September to early October around Ouray, Silverton and Durango.'
    ],
    sources: [
      { label: 'NPS: Great Sand Dunes', url: 'https://www.nps.gov/grsa/' },
      { label: 'NPS: Mesa Verde', url: 'https://www.nps.gov/meve/' },
      { label: 'NPS: Black Canyon of the Gunnison', url: 'https://www.nps.gov/blca/' }
    ]
  }
};

window.DAYS = [
  {
    n: 1, title: 'Austin to Amarillo', color: '#c2410c',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Amarillo', lat: 35.2220, lon: -101.8313, tz: 'America/Chicago' },
    route: [[30.2672, -97.7431], [31.4638, -100.4370], [33.5779, -101.8552], [35.2220, -101.8313]],
    plan: [
      ['Early', 'Leave Austin. Stop about every 2 hours.'],
      ['Afternoon', 'Optional: Palo Duro Canyon State Park, a 30-minute detour south of Amarillo.'],
      ['Before sunset', 'Spray-paint the cars at Cadillac Ranch.'],
      ['Dinner', 'The Big Texan Steak Ranch on old Route 66.']
    ],
    stops: [
      { name: 'Lubbock (rest stop)', lat: 33.5779, lon: -101.8552, kind: 'stretch' },
      { name: 'Palo Duro Canyon State Park', lat: 34.9842, lon: -101.7027, kind: 'optional', url: 'https://tpwd.texas.gov/state-parks/palo-duro-canyon' },
      { name: 'Cadillac Ranch', lat: 35.1872, lon: -101.9871, kind: 'main' }
    ],
    hotels: {
      area: 'Amarillo along I-40',
      options: [
        { name: 'Family hotels on I-40 West, Amarillo', q: 'family hotels I-40 West Amarillo TX' }
      ]
    },
    flags: []
  },
  {
    n: 2, title: 'Amarillo to Great Sand Dunes', color: '#b45309',
    drive: '~6.5 hrs', driveNote: 'est.', zones: ['TX', 'CO'],
    wx: { label: 'Great Sand Dunes', lat: 37.7326, lon: -105.5121, tz: 'America/Denver' },
    route: [[35.2220, -101.8313], [36.0595, -102.5163], [36.4517, -103.1841], [36.7820, -103.9700], [36.9034, -104.4391], [37.6247, -104.7803], [37.4228, -105.4272], [37.7326, -105.5121], [37.4695, -105.8700]],
    plan: [
      ['Morning', 'North on US-87 through Dalhart. You gain an hour entering Mountain Time.'],
      ['Late morning', 'Capulin Volcano National Monument: drive the spiral road to the rim of a cinder cone and walk the short Crater Rim Trail.'],
      ['Afternoon', 'Over La Veta Pass into the San Luis Valley.'],
      ['Sunset', 'Great Sand Dunes National Park: the tallest dunes in North America glow orange against the mountains at sunset.']
    ],
    stops: [
      { name: 'Capulin Volcano National Monument', lat: 36.7820, lon: -103.9700, kind: 'main', url: 'https://www.nps.gov/cavo/' },
      { name: 'Walsenburg (gas)', lat: 37.6247, lon: -104.7803, kind: 'stretch' },
      { name: 'Great Sand Dunes National Park', lat: 37.7326, lon: -105.5121, kind: 'main', url: 'https://www.nps.gov/grsa/' }
    ],
    hotels: {
      area: 'Alamosa, 35 minutes from the dunes (or the lodge at the park entrance)',
      options: [
        { name: 'Family hotels in Alamosa', q: 'family hotels Alamosa CO' },
        { name: 'Great Sand Dunes Lodge', q: 'Great Sand Dunes Lodge Mosca CO' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 3, title: 'Dunes morning, then to Gunnison', color: '#a16207',
    drive: '~3 hrs', driveNote: 'est.', zones: ['CO', 'CO'],
    wx: { label: 'Great Sand Dunes', lat: 37.7326, lon: -105.5121, tz: 'America/Denver' },
    route: [[37.4695, -105.8700], [37.7326, -105.5121], [37.6170, -105.5560], [37.4695, -105.8700], [38.0875, -106.1420], [38.5458, -106.9253]],
    plan: [
      ['Early', 'Back to the dunes while the sand is cool. Rent a sand sled or board in Alamosa or at the park entrance and slide down the slopes.'],
      ['Late morning', 'Splash in Medano Creek in late spring, or walk to Zapata Falls, hidden inside a rocky crevice (a short, steep trail).'],
      ['Afternoon', 'North over North Pass to Gunnison.'],
      ['Evening', 'Overnight in Gunnison.']
    ],
    stops: [
      { name: 'Medano Creek, Great Sand Dunes', lat: 37.7370, lon: -105.5080, kind: 'main' },
      { name: 'Zapata Falls', lat: 37.6170, lon: -105.5560, kind: 'optional', note: 'Expect to wade in cold water over slippery rocks to see the falls; water shoes help.' },
      { name: 'Colorado Gators Reptile Park', lat: 37.6520, lon: -105.8710, kind: 'optional' }
    ],
    hotels: {
      area: 'Gunnison',
      options: [
        { name: 'Family hotels in Gunnison', q: 'family hotels Gunnison CO' }
      ]
    },
    flags: ['medano', 'dunes', 'snow']
  },
  {
    n: 4, title: 'Blue Mesa to Black Canyon of the Gunnison', color: '#4d7c0f',
    drive: '~2 hrs + rim drive', driveNote: 'est.', zones: ['CO', 'CO'],
    wx: { label: 'Black Canyon South Rim', lat: 38.5545, lon: -107.6857, tz: 'America/Denver' },
    route: [[38.5458, -106.9253], [38.4630, -107.1700], [38.5545, -107.6857], [38.5590, -107.6900], [38.4783, -107.8762]],
    plan: [
      ['Morning', 'West along Blue Mesa Reservoir, Colorado’s largest lake, in Curecanti National Recreation Area.'],
      ['Midday', 'Black Canyon of the Gunnison National Park: some of the steepest cliffs and oldest rock in North America.'],
      ['Afternoon', 'Drive the South Rim Road, stopping at Gunnison Point, Chasm View and the Painted Wall. Most overlooks are short walks from the car.'],
      ['Evening', 'Overnight in Montrose.']
    ],
    stops: [
      { name: 'Curecanti National Recreation Area (Elk Creek Visitor Center)', lat: 38.4630, lon: -107.1700, kind: 'main', url: 'https://www.nps.gov/cure/' },
      { name: 'Black Canyon of the Gunnison National Park (South Rim Visitor Center)', lat: 38.5545, lon: -107.6857, kind: 'main', url: 'https://www.nps.gov/blca/',
        note: 'Sheer, 2,000-foot drops: stay behind the railings and hold little hands at every overlook.' },
      { name: 'Painted Wall View', lat: 38.5590, lon: -107.6900, kind: 'main' }
    ],
    hotels: {
      area: 'Montrose',
      options: [
        { name: 'Family hotels in Montrose', q: 'family hotels Montrose CO' }
      ]
    },
    flags: ['rim', 'monsoon', 'snow']
  },
  {
    n: 5, title: 'Ouray and the Million Dollar Highway to Durango', color: '#0f766e',
    drive: '~3 hrs', driveNote: 'est.', zones: ['CO', 'CO'],
    wx: { label: 'Ouray', lat: 38.0228, lon: -107.6714, tz: 'America/Denver' },
    route: [[38.4783, -107.8762], [38.1527, -107.7559], [38.0228, -107.6714], [37.8980, -107.7120], [37.8119, -107.6645], [37.2753, -107.8801]],
    plan: [
      ['Morning', 'South to Ouray, the “Switzerland of America.” Walk to Box Canyon Falls, roaring inside a narrow slot, or swim at the hot springs pool.'],
      ['Midday', 'The Million Dollar Highway (US-550) over Red Mountain Pass: one of the most dramatic mountain drives in the country.'],
      ['Afternoon', 'Wander the old mining town of Silverton and watch for the steam train.'],
      ['Evening', 'Down to Durango for 2 nights.']
    ],
    stops: [
      { name: 'Box Canyon Falls Park', lat: 38.0185, lon: -107.6745, kind: 'main' },
      { name: 'Ouray Hot Springs Pool', lat: 38.0300, lon: -107.6720, kind: 'optional' },
      { name: 'Red Mountain Pass', lat: 37.8980, lon: -107.7120, kind: 'stretch',
        note: 'Steep drop-offs with few guardrails. Take it slow, and use a low gear on the way down.' },
      { name: 'Silverton', lat: 37.8119, lon: -107.6645, kind: 'main' }
    ],
    hotels: {
      area: 'Durango, central to Mesa Verde',
      options: [
        { name: 'Family hotels in Durango', q: 'family hotels Durango CO' },
        { name: 'The Strater Hotel (historic)', q: 'Strater Hotel Durango' }
      ]
    },
    flags: ['alpine', 'aspen', 'monsoon', 'snow']
  },
  {
    n: 6, title: 'Mesa Verde National Park', color: '#0369a1',
    drive: '~2.5 hrs round trip + park roads', driveNote: 'est.', zones: ['CO', 'CO'],
    wx: { label: 'Mesa Verde', lat: 37.1840, lon: -108.4890, tz: 'America/Denver' },
    route: [[37.2753, -107.8801], [37.3453, -108.4060], [37.1840, -108.4890], [37.1677, -108.4730], [37.3453, -108.4060], [37.2753, -107.8801]],
    plan: [
      ['Morning', 'Mesa Verde National Park: the Visitor and Research Center first, then the long, winding drive up onto the mesa.'],
      ['Late morning', 'A ranger-led Cliff Palace tour into the largest cliff dwelling in North America, built by Ancestral Puebloans about 800 years ago.'],
      ['Afternoon', 'The Mesa Top Loop: short walks to pit houses and overlooks of cliff dwellings tucked under the canyon walls. Chapin Mesa Museum for the Junior Ranger booklet.'],
      ['Evening', 'Back to Durango.']
    ],
    stops: [
      { name: 'Mesa Verde Visitor and Research Center', lat: 37.3453, lon: -108.4060, kind: 'main', url: 'https://www.nps.gov/meve/' },
      { name: 'Cliff Palace', lat: 37.1677, lon: -108.4730, kind: 'main',
        note: 'Tours involve ladders and uneven steps at about 7,000 feet. Check the tour’s age and ability rules on recreation.gov.' },
      { name: 'Chapin Mesa Archeological Museum', lat: 37.1840, lon: -108.4890, kind: 'main' }
    ],
    hotels: {
      area: 'Same Durango base',
      options: [
        { name: 'Your Durango hotel', q: 'Durango CO' }
      ]
    },
    flags: ['mesaverde', 'monsoon']
  },
  {
    n: 7, title: 'Durango to Taos', color: '#7c3aed',
    drive: '~4.5 hrs', driveNote: 'est.', zones: ['CO', 'NM'],
    wx: { label: 'Taos', lat: 36.4072, lon: -105.5731, tz: 'America/Denver' },
    route: [[37.2753, -107.8801], [37.2694, -107.0098], [36.9028, -106.5795], [36.6540, -106.0450], [36.4760, -105.7330], [36.4072, -105.5731]],
    plan: [
      ['Morning', 'East to Pagosa Springs, with steaming hot springs along the San Juan River.'],
      ['Midday', 'South into New Mexico through Chama. You may see the narrow-gauge steam train of the Cumbres & Toltec railroad.'],
      ['Afternoon', 'The Rio Grande Gorge Bridge: walk out over a 650-foot-deep gorge in Rio Grande del Norte National Monument.'],
      ['Evening', 'Dinner and an evening stroll around Taos Plaza.']
    ],
    stops: [
      { name: 'Pagosa Springs', lat: 37.2694, lon: -107.0098, kind: 'stretch' },
      { name: 'Chama (lunch)', lat: 36.9028, lon: -106.5795, kind: 'stretch' },
      { name: 'Rio Grande Gorge Bridge', lat: 36.4760, lon: -105.7330, kind: 'main',
        note: 'Windy, with low railings: keep kids close on the walkway.' }
    ],
    hotels: {
      area: 'Taos',
      options: [
        { name: 'Family hotels in Taos', q: 'family hotels Taos NM' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 8, title: 'Taos Pueblo and the High Road to Santa Fe', color: '#be123c',
    drive: '~2 hrs', driveNote: 'est.', zones: ['NM', 'NM'],
    wx: { label: 'Santa Fe', lat: 35.6870, lon: -105.9378, tz: 'America/Denver' },
    route: [[36.4072, -105.5731], [36.4390, -105.5450], [36.4072, -105.5731], [36.1700, -105.6600], [35.9920, -105.9310], [35.6870, -105.9378]],
    plan: [
      ['Morning', 'Taos Pueblo: multistory adobe homes lived in for about 1,000 years, a UNESCO World Heritage Site. Guided walks share the pueblo’s history.'],
      ['Midday', 'The High Road to Taos through old Spanish mountain villages, stopping at the Santuario de Chimayó.'],
      ['Afternoon', 'Santa Fe Plaza and the Palace of the Governors, where Native artists sell jewelry under the portal.'],
      ['Optional', 'Bandelier National Monument (about 1 hour away): climb ladders into cliff dwellings on the Main Loop Trail. Or Meow Wolf, a walk-in art adventure kids love.']
    ],
    stops: [
      { name: 'Taos Pueblo', lat: 36.4390, lon: -105.5450, kind: 'main', url: 'https://taospueblo.com/',
        note: 'It closes for some ceremonial days and part of late winter. Check before you go, and ask before taking photos of people.' },
      { name: 'Santuario de Chimayó', lat: 35.9920, lon: -105.9310, kind: 'stretch' },
      { name: 'Santa Fe Plaza', lat: 35.6870, lon: -105.9378, kind: 'main' },
      { name: 'Bandelier National Monument', lat: 35.7790, lon: -106.2700, kind: 'optional', url: 'https://www.nps.gov/band/' },
      { name: 'Meow Wolf Santa Fe', lat: 35.6195, lon: -105.9989, kind: 'optional' }
    ],
    hotels: {
      area: 'Santa Fe, near the Plaza',
      options: [
        { name: 'Family hotels in Santa Fe', q: 'family hotels Santa Fe NM' }
      ]
    },
    flags: ['bandelier']
  },
  {
    n: 9, title: 'Santa Fe to Lubbock, by Pecos and the Blue Hole', color: '#15803d',
    drive: '~5.5 hrs', driveNote: 'est.', zones: ['NM', 'TX'],
    wx: { label: 'Santa Rosa', lat: 34.9387, lon: -104.6827, tz: 'America/Denver' },
    route: [[35.6870, -105.9378], [35.5500, -105.6870], [34.9387, -104.6827], [34.4048, -103.2052], [33.5779, -101.8552]],
    plan: [
      ['Morning', 'Pecos National Historical Park: walk the ruins of a large pueblo and a 1700s Spanish mission church.'],
      ['Midday', 'Santa Rosa’s Blue Hole, a crystal-clear, 80-foot-deep spring that stays about 62°F all year. Brave swimmers can jump in.'],
      ['Afternoon', 'East through Clovis into Texas: a new road home. You lose an hour entering Central Time.'],
      ['Evening', 'Overnight in Lubbock.']
    ],
    stops: [
      { name: 'Pecos National Historical Park', lat: 35.5500, lon: -105.6870, kind: 'main', url: 'https://www.nps.gov/peco/' },
      { name: 'Blue Hole, Santa Rosa', lat: 34.9406, lon: -104.6730, kind: 'main' },
      { name: 'Clovis (rest stop)', lat: 34.4048, lon: -103.2052, kind: 'stretch' }
    ],
    hotels: {
      area: 'Lubbock',
      options: [
        { name: 'Family hotels in Lubbock', q: 'family hotels Lubbock TX' }
      ]
    },
    flags: []
  },
  {
    n: 10, title: 'Lubbock to Austin', color: '#0e7490',
    drive: '~6 hrs', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Abilene', lat: 32.4487, lon: -99.7331, tz: 'America/Chicago' },
    route: [[33.5779, -101.8552], [33.1912, -101.3790], [32.7179, -100.9176], [32.4487, -99.7331], [31.7093, -98.9912], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'Southeast across the Caprock.'],
      ['Midday', 'Lunch in Abilene. Optional: Frontier Texas!, a hands-on museum about life on the old Texas frontier.'],
      ['Afternoon', 'South through Brownwood and the Hill Country.'],
      ['Evening', 'Arrive in Austin.']
    ],
    stops: [
      { name: 'Abilene (lunch)', lat: 32.4487, lon: -99.7331, kind: 'stretch' },
      { name: 'Frontier Texas!', lat: 32.4496, lon: -99.7330, kind: 'optional' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'mesaverde', text: 'Book a Mesa Verde Cliff Palace tour on recreation.gov for day 6. Tickets open in advance and sell out in summer.' },
  { id: 'durango', text: 'Book Durango (nights 5–6) and Great Sand Dunes / Alamosa (night 2) early in summer.' },
  { id: 'sand', text: 'Reserve sand sleds or boards in Alamosa for day 3 (they go fast on summer weekends).' },
  { id: 'pass', text: 'Buy an America the Beautiful annual pass: it covers Great Sand Dunes, Black Canyon, Mesa Verde entry, Capulin Volcano, Bandelier and Pecos. Mesa Verde tours are extra.' },
  { id: 'pueblo', text: 'Check that Taos Pueblo is open on day 8 (it closes for some ceremonies).' },
  { id: 'roads', text: 'Check cotrip.org for the Million Dollar Highway and the mountain passes the week before.' },
  { id: 'hotels-rest', text: 'Book the remaining hotels with free cancellation.' },
  { id: 'car', text: 'Car check: brakes and tires for the mountain passes, and wipers for afternoon storms.' }
];

window.PACKING = [
  'Warm layers and rain jackets: mountain mornings are cold, and afternoon storms are common in summer',
  'Water shoes for Medano Creek, Zapata Falls and the Blue Hole',
  'Swimsuits for the Ouray hot springs pool',
  'Sun hats, sunscreen and sunglasses: the sun is strong at high altitude',
  'Closed-toe shoes for hot dune sand and the Mesa Verde ladders',
  'A child carrier for overlooks, ladders and dune climbs',
  'Refillable water bottles: altitude dehydrates kids quickly',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Small first-aid kit, any medicines, and motion-sickness bands for the mountain roads'
];
