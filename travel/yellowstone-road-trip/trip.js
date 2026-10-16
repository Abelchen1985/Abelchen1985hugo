/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  id: 'ys',
  title: 'Yellowstone & Grand Teton Family Road Trip',
  subtitle: 'Austin → Grand Teton → Yellowstone → Cody → Cheyenne → Austin · 10 days, family-paced',
  defaultStart: null,
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  roads: 'cotrip.org (Colorado) and wyoroad.info (Wyoming)',
  snowMonths: [3, 4, 5, 10, 11],
  season: {
    summary: 'Mid-June to mid-July and September. Every park road is open then; September brings thinner crowds, cool days and the elk rut.',
    months: ['off', 'off', 'off', 'fair', 'good', 'best', 'good', 'good', 'best', 'fair', 'off', 'off'],
    labels: { off: 'Closed' },
    notes: [
      'Yellowstone roads open to cars in stages: the first in mid-April, the South and East entrances in May, and Dunraven Pass around late May. Most roads close around Oct 31 (Dunraven Pass around Oct 12).',
      'November to mid-April, only the North–Northeast entrance road is open to cars, so this route doesn’t work.',
      'July and August are the most crowded months: book in-park lodging as far ahead as you can (often up to a year).',
      'Snow can fall in any month at Yellowstone’s elevation (7,000–8,000 ft). Pack layers even in July.'
    ],
    sources: [
      { label: 'NPS: Yellowstone park roads', url: 'https://www.nps.gov/yell/planyourvisit/parkroads.htm' },
      { label: 'NPS: Grand Teton', url: 'https://www.nps.gov/grte/' }
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
      ['Afternoon', 'Optional: Palo Duro Canyon State Park, the second-largest canyon in the U.S., is a 30-minute detour south of Amarillo. Drive the scenic road to the canyon floor.'],
      ['Before sunset', 'Let the kids stretch and spray-paint at Cadillac Ranch.'],
      ['Dinner', 'The Big Texan Steak Ranch on old Route 66.']
    ],
    stops: [
      { name: 'Lubbock (rest stop)', lat: 33.5779, lon: -101.8552, kind: 'stretch' },
      { name: 'Palo Duro Canyon State Park', lat: 34.9842, lon: -101.7027, kind: 'optional', url: 'https://tpwd.texas.gov/state-parks/palo-duro-canyon',
        note: 'Day-pass reservations are recommended on busy weekends.' },
      { name: 'Cadillac Ranch', lat: 35.1872, lon: -101.9871, kind: 'main' },
      { name: 'The Big Texan Steak Ranch', lat: 35.1925, lon: -101.7536, kind: 'main', url: 'https://bigtexan.com/pages/restaurant' }
    ],
    hotels: {
      area: 'Amarillo along I-40',
      options: [
        { name: 'Family hotels on I-40 West, Amarillo', q: 'family hotels I-40 West Amarillo TX' },
        { name: 'Big Texan Motel (next to the restaurant)', q: 'Big Texan Motel Amarillo' }
      ]
    },
    flags: []
  },
  {
    n: 2, title: 'Amarillo to Colorado Springs', color: '#b45309',
    drive: '~5.5 hrs', driveNote: 'est.', zones: ['TX', 'CO'],
    wx: { label: 'Colorado Springs', lat: 38.8339, lon: -104.8214, tz: 'America/Denver' },
    route: [[35.2220, -101.8313], [36.0595, -102.5163], [36.4517, -103.1841], [36.7820, -103.9700], [36.9034, -104.4391], [38.2544, -104.6091], [38.8339, -104.8214]],
    plan: [
      ['Morning', 'North on US-87 through Dalhart. You gain an hour entering Mountain Time.'],
      ['Late morning', 'Capulin Volcano National Monument, right on the way: drive the spiral road to the rim of a 60,000-year-old cinder cone and walk the short Crater Rim Trail.'],
      ['Afternoon', 'North on I-25 past Raton Pass and Pueblo.'],
      ['Late afternoon', 'Garden of the Gods: free, with paved, flat trails among towering red rocks.']
    ],
    stops: [
      { name: 'Capulin Volcano National Monument', lat: 36.7820, lon: -103.9700, kind: 'main', url: 'https://www.nps.gov/cavo/',
        note: 'The rim road can close in snow or high wind. The Crater Rim Trail is a 1-mile paved loop with steep drop-offs: hold hands.' },
      { name: 'Raton (gas, stretch)', lat: 36.9034, lon: -104.4391, kind: 'stretch' },
      { name: 'Great Sand Dunes National Park', lat: 37.7326, lon: -105.5121, kind: 'optional', url: 'https://www.nps.gov/grsa/',
        note: 'The tallest dunes in North America, with a creek kids can splash in (late May–June). About 1 hour each way off I-25 at Walsenburg: adds 3+ hours, so it is best as an extra night in Alamosa.' },
      { name: 'Garden of the Gods', lat: 38.8784, lon: -104.8698, kind: 'main', url: 'https://gardenofgods.com/' }
    ],
    hotels: {
      area: 'Colorado Springs, near Garden of the Gods or Old Colorado City',
      options: [
        { name: 'Family hotels near Garden of the Gods', q: 'family hotels near Garden of the Gods Colorado Springs' },
        { name: 'Hotels in Old Colorado City', q: 'hotels Old Colorado City Colorado Springs' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 3, title: 'Colorado Springs to Rawlins', color: '#a16207',
    drive: '~5.5 hrs', driveNote: 'est.', zones: ['CO', 'WY'],
    wx: { label: 'Laramie', lat: 41.3114, lon: -105.5911, tz: 'America/Denver' },
    route: [[38.8339, -104.8214], [39.7392, -104.9903], [40.5853, -105.0844], [41.1586, -105.3780], [41.3114, -105.5911], [41.7911, -107.2387]],
    plan: [
      ['Morning', 'Optional: drive or take the cog railway up Pikes Peak (14,115 ft) before you leave. Book the railway ahead.'],
      ['Midday', 'North past Denver and Fort Collins into Wyoming.'],
      ['Afternoon', 'Vedauwoo, just off I-80: giant granite boulders kids can scramble on, with picnic tables.'],
      ['Evening', 'West across the Laramie plains to Rawlins.']
    ],
    stops: [
      { name: 'Pikes Peak', lat: 38.8409, lon: -105.0442, kind: 'optional', url: 'https://www.cograilway.com/',
        note: 'Cold and windy at the top even in summer; altitude can bother little ones.' },
      { name: 'Fort Collins (lunch)', lat: 40.5853, lon: -105.0844, kind: 'stretch' },
      { name: 'Vedauwoo Recreation Area', lat: 41.1586, lon: -105.3780, kind: 'main' }
    ],
    hotels: {
      area: 'Rawlins, right on I-80',
      options: [
        { name: 'Hotels in Rawlins', q: 'hotels Rawlins WY' }
      ]
    },
    flags: ['alpine', 'snow']
  },
  {
    n: 4, title: 'Rawlins to Grand Teton and Jackson', color: '#0f766e',
    drive: '~5 hrs', driveNote: 'est.', zones: ['WY', 'WY'],
    wx: { label: 'Grand Teton / Jenny Lake', lat: 43.7516, lon: -110.7224, tz: 'America/Denver' },
    route: [[41.7911, -107.2387], [42.8330, -108.7307], [43.5333, -109.6304], [43.8406, -110.5100], [43.7516, -110.7224], [43.4799, -110.7624]],
    plan: [
      ['Morning', 'North through Lander and Dubois, then over Togwotee Pass.'],
      ['Early afternoon', 'Enter Grand Teton National Park at Moran: the first view of the Tetons across the valley is unforgettable.'],
      ['Afternoon', 'Jenny Lake: take the shuttle boat across and walk about half a mile up to Hidden Falls.'],
      ['Evening', 'Dinner in Jackson and photos under the elk-antler arches on Town Square.']
    ],
    stops: [
      { name: 'Lander (lunch)', lat: 42.8330, lon: -108.7307, kind: 'stretch' },
      { name: 'Jenny Lake, Grand Teton National Park', lat: 43.7516, lon: -110.7224, kind: 'main', url: 'https://www.nps.gov/grte/',
        note: 'The trail to Hidden Falls is rocky and uphill in places: carry little ones rather than push a stroller.' },
      { name: 'Jackson Town Square', lat: 43.4799, lon: -110.7624, kind: 'main' }
    ],
    hotels: {
      area: 'Jackson, or the quieter Teton Village',
      options: [
        { name: 'Family hotels in Jackson', q: 'family hotels Jackson WY' },
        { name: 'Teton Village lodging', q: 'Teton Village lodging Wyoming' }
      ]
    },
    flags: ['teton-boat', 'snow']
  },
  {
    n: 5, title: 'Grand Teton to Old Faithful', color: '#0369a1',
    drive: '~2.5 hrs + stops', driveNote: 'est.', zones: ['WY', 'WY'],
    wx: { label: 'Old Faithful', lat: 44.4605, lon: -110.8281, tz: 'America/Denver' },
    route: [[43.4799, -110.7624], [43.6633, -110.6627], [43.8662, -110.5492], [44.1338, -110.6655], [44.4168, -110.5739], [44.4605, -110.8281]],
    plan: [
      ['Sunrise', 'Optional: the old barns of Mormon Row with the Tetons behind them.'],
      ['Morning', 'Oxbow Bend for moose and reflections, then north to Yellowstone’s South Entrance.'],
      ['Midday', 'West Thumb Geyser Basin: a short boardwalk with hot pools right on Yellowstone Lake.'],
      ['Afternoon', 'Old Faithful. Check the predicted eruption times at the visitor center, then walk the Upper Geyser Basin boardwalks between shows.']
    ],
    stops: [
      { name: 'Mormon Row', lat: 43.6633, lon: -110.6627, kind: 'optional' },
      { name: 'Oxbow Bend', lat: 43.8662, lon: -110.5492, kind: 'main' },
      { name: 'West Thumb Geyser Basin', lat: 44.4168, lon: -110.5739, kind: 'main' },
      { name: 'Old Faithful', lat: 44.4605, lon: -110.8281, kind: 'main', url: 'https://www.nps.gov/yell/planyourvisit/geyser-activity.htm',
        note: 'Eruptions come roughly every 60–110 minutes. Never step off the boardwalks: the ground and water are scalding.' }
    ],
    hotels: {
      area: 'Old Faithful area (in park), or West Yellowstone (about 30 miles away)',
      options: [
        { name: 'Old Faithful Inn', q: 'Old Faithful Inn Yellowstone', note: 'Historic log lodge; books up far ahead.' },
        { name: 'Old Faithful Snow Lodge', q: 'Old Faithful Snow Lodge' },
        { name: 'Family hotels in West Yellowstone', q: 'family hotels West Yellowstone MT' }
      ]
    },
    flags: ['yell-roads', 'geyser', 'snow']
  },
  {
    n: 6, title: 'Grand Prismatic to Canyon Village', color: '#7c3aed',
    drive: '~1.5 hrs + stops', driveNote: 'est.', zones: ['WY', 'WY'],
    wx: { label: 'Canyon Village', lat: 44.7350, lon: -110.4880, tz: 'America/Denver' },
    route: [[44.4605, -110.8281], [44.5251, -110.8381], [44.6455, -110.8613], [44.7262, -110.7036], [44.7350, -110.4880]],
    plan: [
      ['Morning', 'Grand Prismatic Spring: walk the Midway boardwalk, then the Fairy Falls trail to the overlook for the famous rainbow view (about 1.2 miles round trip).'],
      ['Midday', 'Picnic along the Firehole River. Optional: Norris Geyser Basin, the hottest in the park.'],
      ['Afternoon', 'Grand Canyon of the Yellowstone: Artist Point for the classic view of the Lower Falls.'],
      ['Evening', 'Overnight at Canyon. Ask at the visitor center for the Junior Ranger booklet.']
    ],
    stops: [
      { name: 'Grand Prismatic Spring', lat: 44.5251, lon: -110.8381, kind: 'main',
        note: 'Go before 10 AM: the parking lot fills, and the colors show best once the morning steam lifts.' },
      { name: 'Norris Geyser Basin', lat: 44.7262, lon: -110.7036, kind: 'optional' },
      { name: 'Artist Point', lat: 44.7203, lon: -110.4794, kind: 'main' }
    ],
    hotels: {
      area: 'Canyon Village (in park), central to the whole loop',
      options: [
        { name: 'Canyon Lodge & Cabins', q: 'Canyon Lodge and Cabins Yellowstone' },
        { name: 'Canyon Campground', q: 'Canyon Campground Yellowstone' }
      ]
    },
    flags: ['yell-roads', 'geyser', 'snow']
  },
  {
    n: 7, title: 'Hayden Valley to Cody', color: '#be123c',
    drive: '~3 hrs + wildlife stops', driveNote: 'est.', zones: ['WY', 'WY'],
    wx: { label: 'Cody', lat: 44.5263, lon: -109.0565, tz: 'America/Denver' },
    route: [[44.7350, -110.4880], [44.6600, -110.4700], [44.5640, -110.3800], [44.4888, -110.0047], [44.5000, -109.1800], [44.5263, -109.0565]],
    plan: [
      ['Early', 'Hayden Valley at dawn: bison herds, and sometimes wolves and bears (bring binoculars). Stay in the car or at least 100 yards from bears and wolves, 25 yards from bison.'],
      ['Late morning', 'Mud Volcano and Yellowstone Lake, then leave by the East Entrance over Sylvan Pass.'],
      ['Afternoon', 'Down the Wapiti Valley past Buffalo Bill Dam into Cody.'],
      ['Evening', 'Buffalo Bill Center of the West (five museums in one), then the Cody Nite Rodeo in summer.']
    ],
    stops: [
      { name: 'Hayden Valley', lat: 44.6600, lon: -110.4700, kind: 'main' },
      { name: 'Mud Volcano', lat: 44.6247, lon: -110.4327, kind: 'stretch' },
      { name: 'Buffalo Bill Dam Visitor Center', lat: 44.5013, lon: -109.1830, kind: 'stretch' },
      { name: 'Buffalo Bill Center of the West', lat: 44.5250, lon: -109.0610, kind: 'main', url: 'https://centerofthewest.org/' }
    ],
    hotels: {
      area: 'Cody',
      options: [
        { name: 'The Irma Hotel (built by Buffalo Bill)', q: 'The Irma Hotel Cody WY' },
        { name: 'Family hotels in Cody', q: 'family hotels Cody WY' }
      ]
    },
    flags: ['yell-roads', 'rodeo', 'snow']
  },
  {
    n: 8, title: 'Cody to Cheyenne', color: '#15803d',
    drive: '~6.5 hrs', driveNote: 'est.', zones: ['WY', 'WY'],
    wx: { label: 'Thermopolis', lat: 43.6461, lon: -108.2121, tz: 'America/Denver' },
    route: [[44.5263, -109.0565], [43.6461, -108.2121], [43.4200, -108.1700], [42.8666, -106.3131], [42.0625, -104.1844], [41.1400, -104.8202]],
    plan: [
      ['Morning', 'South to Thermopolis: soak in the free state bathhouse at Hot Springs State Park and walk the swinging bridge over the steaming terraces.'],
      ['Late morning', 'Through Wind River Canyon, with cliffs over the river and signs naming each rock layer by age.'],
      ['Midday', 'Lunch in Casper.'],
      ['Afternoon', 'Optional: Fort Laramie National Historic Site, a restored 1800s fur-trade and army fort on the Oregon Trail (about a 1-hour detour). Then on to Cheyenne.']
    ],
    stops: [
      { name: 'Hot Springs State Park, Thermopolis', lat: 43.6540, lon: -108.1970, kind: 'main', url: 'https://wyoparks.wyo.gov/index.php/places-to-go/hot-springs',
        note: 'The State Bath House is free (time limit applies). Keep kids on the boardwalks around the terraces.' },
      { name: 'Wind River Canyon', lat: 43.4200, lon: -108.1700, kind: 'main' },
      { name: 'Casper (lunch)', lat: 42.8666, lon: -106.3131, kind: 'stretch' },
      { name: 'Fort Laramie National Historic Site', lat: 42.2030, lon: -104.5570, kind: 'optional', url: 'https://www.nps.gov/fola/' }
    ],
    hotels: {
      area: 'Cheyenne, right on I-25',
      options: [
        { name: 'Family hotels in Cheyenne', q: 'family hotels Cheyenne WY' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 9, title: 'Cheyenne to Amarillo', color: '#9333ea',
    drive: '~8.5 hrs', driveNote: 'est.', zones: ['WY', 'TX'],
    wx: { label: 'Lamar, CO', lat: 38.0872, lon: -102.6208, tz: 'America/Denver' },
    route: [[41.1400, -104.8202], [39.7392, -104.9903], [39.2639, -103.6922], [38.0872, -102.6208], [36.7295, -102.5132], [35.8656, -101.9732], [35.2220, -101.8313]],
    plan: [
      ['Early', 'South past Denver, then southeast on US-287 across the plains: a new road home rather than repeating I-25.'],
      ['Midday', 'Lunch in Lamar. Optional: Bent’s Old Fort National Historic Site near La Junta, a rebuilt 1830s adobe trading post (about a 1-hour detour).'],
      ['Afternoon', 'Through the Oklahoma Panhandle into Texas. You lose an hour entering Central Time.'],
      ['Evening', 'Overnight in Amarillo. This is the longest day, so keep the evening easy.']
    ],
    stops: [
      { name: 'Limon (rest stop)', lat: 39.2639, lon: -103.6922, kind: 'stretch' },
      { name: 'Bent’s Old Fort National Historic Site', lat: 38.0403, lon: -103.4297, kind: 'optional', url: 'https://www.nps.gov/beol/' },
      { name: 'Lamar (lunch)', lat: 38.0872, lon: -102.6208, kind: 'stretch' }
    ],
    hotels: {
      area: 'Amarillo along I-40',
      options: [
        { name: 'Family hotels on I-40 West, Amarillo', q: 'family hotels I-40 West Amarillo TX' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 10, title: 'Amarillo to Austin', color: '#0e7490',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Lubbock', lat: 33.5779, lon: -101.8552, tz: 'America/Chicago' },
    route: [[35.2220, -101.8313], [33.5779, -101.8552], [31.4638, -100.4370], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'If you skipped it on day 1, Palo Duro Canyon is a 30-minute detour for an early walk.'],
      ['Midday', 'South through Lubbock.'],
      ['Afternoon', 'Through San Angelo and the Hill Country.'],
      ['Evening', 'Arrive in Austin.']
    ],
    stops: [
      { name: 'Palo Duro Canyon State Park', lat: 34.9842, lon: -101.7027, kind: 'optional', url: 'https://tpwd.texas.gov/state-parks/palo-duro-canyon' },
      { name: 'Lubbock (lunch)', lat: 33.5779, lon: -101.8552, kind: 'stretch' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'ys-lodging', text: 'Book Yellowstone lodging first (nights 5 and 6): in-park rooms open about 13 months ahead and sell out.' },
  { id: 'teton', text: 'Book Jackson or Teton Village (night 4). Summer prices climb fast.' },
  { id: 'pass', text: 'Buy an America the Beautiful annual pass: it covers Grand Teton, Yellowstone, Capulin Volcano and the historic sites on this route.' },
  { id: 'roads', text: 'Check the NPS Yellowstone park roads page the week before you leave.' },
  { id: 'bear', text: 'Buy bear spray in Jackson or at the park stores (you can’t fly with it, but you can drive with it).' },
  { id: 'hotels-rest', text: 'Book the remaining hotels with free cancellation.' },
  { id: 'car', text: 'Car check: tires, brakes for the mountain passes, wipers, and a full-size spare. Some Wyoming stretches have 70+ miles between gas stations.' }
];

window.PACKING = [
  'Warm layers, hats and gloves: mornings can be near freezing in Yellowstone, even in July',
  'Rain jackets for afternoon mountain thunderstorms',
  'Binoculars for Hayden Valley and Grand Teton wildlife',
  'Stroller for the geyser boardwalks; a child carrier for the Hidden Falls trail',
  'Sunscreen and sunglasses: the sun is strong at high altitude',
  'Refillable water bottles and car snacks; services are far apart in Wyoming and eastern Colorado',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Swimsuits for the free hot springs bathhouse in Thermopolis',
  'Small first-aid kit, any medicines, and motion-sickness bands for mountain roads',
  'National park pass, and a Junior Ranger booklet for each park'
];
