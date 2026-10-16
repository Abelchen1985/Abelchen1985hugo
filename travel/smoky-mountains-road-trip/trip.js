/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  id: 'gs',
  title: 'Great Smoky Mountains Family Road Trip',
  subtitle: 'Austin → Hot Springs → Memphis → Nashville → Mammoth Cave → Smokies → Chattanooga → Vicksburg → Austin · 9 days, family-paced loop',
  defaultStart: null,
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  roads: 'the Smokies’ Closures & Alerts page (nps.gov/grsm) and tn511.com',
  snowMonths: [3],
  season: {
    summary: 'Mid-to-late October for fall colors and May for wildflowers and waterfalls. Both are mild, but October weekends are the busiest days of the year.',
    months: ['fair', 'fair', 'fair', 'good', 'best', 'good', 'fair', 'fair', 'good', 'best', 'good', 'fair'],
    notes: [
      'Fall colors usually peak at the high elevations in early October and in the lower valleys from mid-October into early November. Go on weekdays if you can.',
      'Kuwohi Road (to the old Clingmans Dome, the park’s highest point) is closed to cars from December 1 through March 31, longer if there is snow or ice.',
      'Spring (April–May) brings wildflowers and full waterfalls. The famous synchronous fireflies near Elkmont light up for about two weeks in late May to mid-June, by lottery only.',
      'July and August are hot and humid on the drive, with crowds in Gatlinburg and afternoon storms in the mountains.',
      'Entry to the Smokies is free, but any car parked more than 15 minutes needs a parking tag ($5 a day, $15 a week). The America the Beautiful pass doesn’t cover it.'
    ],
    sources: [
      { label: 'NPS: Smokies fees and parking tags', url: 'https://www.nps.gov/grsm/planyourvisit/fees.htm' },
      { label: 'NPS: Cades Cove', url: 'https://www.nps.gov/grsm/planyourvisit/cadescove.htm' },
      { label: 'NPS: Smokies closures', url: 'https://www.nps.gov/grsm/planyourvisit/conditions.htm' }
    ]
  }
};

window.DAYS = [
  {
    n: 1, title: 'Austin to Hot Springs National Park', color: '#c2410c',
    drive: '~7 hrs', driveNote: 'est.', zones: ['TX', 'AR'],
    wx: { label: 'Hot Springs', lat: 34.5037, lon: -93.0552, tz: 'America/Chicago' },
    route: [[30.2672, -97.7431], [31.5493, -97.1467], [32.7767, -96.7970], [33.4251, -94.0477], [34.1209, -93.0538], [34.5037, -93.0552]],
    plan: [
      ['Early', 'North on I-35 to Dallas, then east on I-30.'],
      ['Midday', 'Lunch in Texarkana, where the post office straddles the Texas–Arkansas line: stand in two states at once.'],
      ['Late afternoon', 'Hot Springs National Park: walk Bathhouse Row and the Grand Promenade, and touch the steaming 143°F spring water at the display springs.'],
      ['Evening', 'Fill water bottles for free at the thermal fountains downtown.']
    ],
    stops: [
      { name: 'Texarkana (lunch)', lat: 33.4251, lon: -94.0477, kind: 'stretch' },
      { name: 'Hot Springs National Park (Fordyce Bathhouse Visitor Center)', lat: 34.5131, lon: -93.0538, kind: 'main', url: 'https://www.nps.gov/hosp/',
        note: 'Free to visit. The visitor center is a restored 1915 bathhouse, and kids can earn a Junior Ranger badge.' },
      { name: 'Hot Springs Mountain Tower', lat: 34.5161, lon: -93.0490, kind: 'optional', note: 'A 216-foot tower with views over the Ouachita Mountains.' }
    ],
    hotels: {
      area: 'Downtown Hot Springs, walking distance to Bathhouse Row',
      options: [
        { name: 'The Arlington Resort Hotel & Spa (historic)', q: 'The Arlington Resort Hotel Hot Springs' },
        { name: 'Family hotels in Hot Springs', q: 'family hotels Hot Springs AR' }
      ]
    },
    flags: []
  },
  {
    n: 2, title: 'Hot Springs to Memphis', color: '#b45309',
    drive: '~3.5 hrs', driveNote: 'est.', zones: ['AR', 'TNW'],
    wx: { label: 'Memphis', lat: 35.1495, lon: -90.0490, tz: 'America/Chicago' },
    route: [[34.5037, -93.0552], [34.7465, -92.2896], [35.1495, -90.0490]],
    plan: [
      ['Morning', 'Ride up the Hot Springs Mountain Tower, or walk part of the Grand Promenade.'],
      ['Midday', 'East through Little Rock and across the Mississippi River into Memphis.'],
      ['5:00 PM', 'The Peabody Duck March: the hotel’s ducks parade down a red carpet to the lobby fountain at 11 AM and back out at 5 PM. Kids love it.'],
      ['Evening', 'Barbecue for dinner, then a walk on Beale Street while it is still family-friendly early in the evening.']
    ],
    stops: [
      { name: 'Little Rock (rest stop)', lat: 34.7465, lon: -92.2896, kind: 'stretch' },
      { name: 'The Peabody Memphis (Duck March)', lat: 35.1427, lon: -90.0520, kind: 'main' },
      { name: 'National Civil Rights Museum', lat: 35.1347, lon: -90.0577, kind: 'optional', url: 'https://www.civilrightsmuseum.org/',
        note: 'Best for school-age kids and up.' }
    ],
    hotels: {
      area: 'Downtown Memphis',
      options: [
        { name: 'The Peabody Memphis', q: 'The Peabody Memphis' },
        { name: 'Family hotels in downtown Memphis', q: 'family hotels downtown Memphis TN' }
      ]
    },
    flags: []
  },
  {
    n: 3, title: 'Memphis to Nashville', color: '#a16207',
    drive: '~3.5 hrs', driveNote: 'est.', zones: ['TNW', 'TNW'],
    wx: { label: 'Nashville', lat: 36.1627, lon: -86.7816, tz: 'America/Chicago' },
    route: [[35.1495, -90.0490], [35.6145, -88.8139], [36.1627, -86.7816]],
    plan: [
      ['Morning', 'Optional: Graceland, Elvis’s home, before you leave Memphis.'],
      ['Midday', 'East on I-40 to Nashville.'],
      ['Afternoon', 'Country Music Hall of Fame and Museum, then the full-size Parthenon replica in Centennial Park.'],
      ['Evening', 'Live music drifting out of the honky-tonks on Broadway (go early in the evening with kids).']
    ],
    stops: [
      { name: 'Graceland', lat: 35.0477, lon: -90.0260, kind: 'optional', url: 'https://www.graceland.com/' },
      { name: 'Country Music Hall of Fame and Museum', lat: 36.1584, lon: -86.7760, kind: 'main', url: 'https://www.countrymusichalloffame.org/' },
      { name: 'The Parthenon, Centennial Park', lat: 36.1497, lon: -86.8133, kind: 'main' }
    ],
    hotels: {
      area: 'Nashville, near downtown or West End',
      options: [
        { name: 'Family hotels in Nashville', q: 'family hotels downtown Nashville TN' }
      ]
    },
    flags: []
  },
  {
    n: 4, title: 'Nashville to Mammoth Cave National Park', color: '#4d7c0f',
    drive: '~1.5 hrs', driveNote: 'est.', zones: ['TNW', 'KY'],
    wx: { label: 'Mammoth Cave', lat: 37.1870, lon: -86.1010, tz: 'America/Chicago' },
    route: [[36.1627, -86.7816], [36.9685, -86.4808], [37.1870, -86.1010], [37.1367, -85.9569]],
    plan: [
      ['Morning', 'North on I-65 into Kentucky.'],
      ['Late morning', 'Optional: Lost River Cave in Bowling Green, a short boat ride into a cave, or the National Corvette Museum.'],
      ['Afternoon', 'Mammoth Cave National Park, the longest known cave system in the world. The Frozen Niagara tour is short and easy for kids.'],
      ['Evening', 'Overnight in the park or in Cave City.']
    ],
    stops: [
      { name: 'Lost River Cave', lat: 36.9550, lon: -86.4740, kind: 'optional', url: 'https://lostrivercave.org/' },
      { name: 'National Corvette Museum', lat: 37.0002, lon: -86.3758, kind: 'optional' },
      { name: 'Mammoth Cave National Park Visitor Center', lat: 37.1870, lon: -86.1010, kind: 'main', url: 'https://www.nps.gov/maca/',
        note: 'Cave tours sell out: reserve on recreation.gov. The cave stays about 54°F all year, so bring a jacket. Strollers are not allowed on tours.' }
    ],
    hotels: {
      area: 'Inside the park, or Cave City just outside it',
      options: [
        { name: 'The Lodge at Mammoth Cave', q: 'The Lodge at Mammoth Cave' },
        { name: 'Family hotels in Cave City', q: 'family hotels Cave City KY' }
      ]
    },
    flags: []
  },
  {
    n: 5, title: 'Mammoth Cave to Gatlinburg and the Smokies', color: '#0f766e',
    drive: '~4.5 hrs', driveNote: 'est.', zones: ['KY', 'TNE'],
    wx: { label: 'Gatlinburg', lat: 35.7143, lon: -83.5102, tz: 'America/New_York' },
    route: [[37.1367, -85.9569], [37.0920, -84.6041], [36.8381, -84.3442], [35.9606, -83.9207], [35.7884, -83.5543], [35.7143, -83.5102]],
    plan: [
      ['Morning', 'East on the Cumberland Parkway. You lose an hour entering Eastern Time.'],
      ['Optional', 'Cumberland Falls State Resort Park, the “Niagara of the South.” On clear full-moon nights it can show a rare moonbow.'],
      ['Afternoon', 'Through Knoxville and Pigeon Forge to Gatlinburg.'],
      ['Late afternoon', 'Sugarlands Visitor Center, then the flat Gatlinburg Trail along the river (one of only two trails in the park that allow strollers and dogs).']
    ],
    stops: [
      { name: 'Cumberland Falls State Resort Park', lat: 36.8381, lon: -84.3442, kind: 'optional', url: 'https://parks.ky.gov/corbin/parks/resort/cumberland-falls-state-resort-park' },
      { name: 'Knoxville (lunch)', lat: 35.9606, lon: -83.9207, kind: 'stretch' },
      { name: 'Sugarlands Visitor Center, Great Smoky Mountains National Park', lat: 35.6852, lon: -83.5370, kind: 'main', url: 'https://www.nps.gov/grsm/',
        note: 'Buy your parking tag here or online before you park anywhere in the park.' }
    ],
    hotels: {
      area: 'Gatlinburg (2 nights), right at the park entrance',
      options: [
        { name: 'Family hotels in Gatlinburg', q: 'family hotels Gatlinburg TN' },
        { name: 'Cabin rentals near Gatlinburg', q: 'family cabin rental Gatlinburg TN' }
      ]
    },
    flags: ['fall-color']
  },
  {
    n: 6, title: 'Newfound Gap Road and Kuwohi', color: '#0369a1',
    drive: '~2.5 hrs round trip + stops', driveNote: 'est.', zones: ['TNE', 'TNE'],
    wx: { label: 'Kuwohi (6,643 ft)', lat: 35.5628, lon: -83.4985, tz: 'America/New_York' },
    route: [[35.7143, -83.5102], [35.6852, -83.5370], [35.6111, -83.4250], [35.5628, -83.4985], [35.6111, -83.4250], [35.5136, -83.3066], [35.6111, -83.4250], [35.7143, -83.5102]],
    plan: [
      ['Morning', 'Drive Newfound Gap Road over the crest of the Smokies. Stand with one foot in Tennessee and one in North Carolina at Newfound Gap, on the Appalachian Trail.'],
      ['Late morning', 'Kuwohi, the highest point in the park: a half-mile paved but steep walk to the observation tower, often above the clouds.'],
      ['Afternoon', 'Optional: down the North Carolina side to the Oconaluftee Visitor Center, where elk often graze in the fields beside the Mountain Farm Museum.'],
      ['Evening', 'Back to Gatlinburg.']
    ],
    stops: [
      { name: 'Newfound Gap', lat: 35.6111, lon: -83.4250, kind: 'main' },
      { name: 'Kuwohi (Clingmans Dome)', lat: 35.5628, lon: -83.4985, kind: 'main',
        note: 'Usually 10–20°F colder than Gatlinburg and often foggy. Bring jackets.' },
      { name: 'Oconaluftee Visitor Center and Mountain Farm Museum', lat: 35.5136, lon: -83.3066, kind: 'optional',
        note: 'Elk are best at dawn and dusk. Stay at least 50 yards away.' }
    ],
    hotels: {
      area: 'Same Gatlinburg base',
      options: [
        { name: 'Your Gatlinburg hotel', q: 'Gatlinburg TN' }
      ]
    },
    flags: ['kuwohi', 'alpine', 'fall-color', 'fireflies', 'snow']
  },
  {
    n: 7, title: 'Cades Cove to Chattanooga', color: '#7c3aed',
    drive: '~3.5 hrs + the loop', driveNote: 'est.', zones: ['TNE', 'TNE'],
    wx: { label: 'Cades Cove', lat: 35.5840, lon: -83.8410, tz: 'America/New_York' },
    route: [[35.7143, -83.5102], [35.6600, -83.7100], [35.6010, -83.7750], [35.5840, -83.8410], [35.6010, -83.7750], [35.7565, -83.9705], [35.0456, -85.3097]],
    plan: [
      ['Early', 'Cades Cove: an 11-mile, one-way loop through a valley of old log cabins, churches and a working grist mill. Go at sunrise for deer, turkeys and sometimes black bears. Allow 2–4 hours.'],
      ['Midday', 'Picnic, then out through Townsend.'],
      ['Afternoon', 'Southwest to Chattanooga.'],
      ['Evening', 'Tennessee Aquarium on the riverfront, or the view from Point Park on Lookout Mountain.']
    ],
    stops: [
      { name: 'Cades Cove Loop Road', lat: 35.6010, lon: -83.7750, kind: 'main', url: 'https://www.nps.gov/grsm/planyourvisit/cadescove.htm',
        note: 'Traffic crawls in summer, fall and on weekends. Pull fully off the road in the paved pullouts to watch wildlife.' },
      { name: 'Cades Cove Visitor Center and Cable Mill', lat: 35.5840, lon: -83.8410, kind: 'stretch' },
      { name: 'Tennessee Aquarium', lat: 35.0558, lon: -85.3110, kind: 'main', url: 'https://tnaqua.org/' },
      { name: 'Point Park, Chickamauga & Chattanooga National Military Park', lat: 35.0090, lon: -85.3440, kind: 'optional', url: 'https://www.nps.gov/chch/' }
    ],
    hotels: {
      area: 'Downtown Chattanooga, near the riverfront',
      options: [
        { name: 'Chattanooga Choo Choo hotel (historic train station)', q: 'Chattanooga Choo Choo hotel' },
        { name: 'Family hotels in downtown Chattanooga', q: 'family hotels downtown Chattanooga TN' }
      ]
    },
    flags: ['cades', 'fall-color']
  },
  {
    n: 8, title: 'Chattanooga to Vicksburg', color: '#be123c',
    drive: '~6.5 hrs', driveNote: 'est.', zones: ['TNE', 'MS'],
    wx: { label: 'Vicksburg', lat: 32.3526, lon: -90.8779, tz: 'America/Chicago' },
    route: [[35.0456, -85.3097], [34.4446, -85.7197], [33.5186, -86.8104], [33.2098, -87.5692], [32.3643, -88.7037], [32.2988, -90.1848], [32.3526, -90.8779]],
    plan: [
      ['Morning', 'Southwest on I-59 into Alabama. You gain an hour entering Central Time.'],
      ['Optional', 'Little River Canyon National Preserve near Fort Payne: a scenic rim drive and waterfall, just off the interstate.'],
      ['Midday', 'Lunch in Birmingham, then west across Mississippi.'],
      ['Afternoon', 'Vicksburg National Military Park: drive the 16-mile tour road past the Civil War siege lines, and see the raised ironclad gunboat USS Cairo.']
    ],
    stops: [
      { name: 'Little River Canyon National Preserve', lat: 34.3890, lon: -85.6300, kind: 'optional', url: 'https://www.nps.gov/liri/' },
      { name: 'Birmingham (lunch)', lat: 33.5186, lon: -86.8104, kind: 'stretch' },
      { name: 'Vicksburg National Military Park', lat: 32.3446, lon: -90.8510, kind: 'main', url: 'https://www.nps.gov/vick/' },
      { name: 'USS Cairo Gunboat and Museum', lat: 32.3723, lon: -90.8697, kind: 'main' }
    ],
    hotels: {
      area: 'Vicksburg, near I-20',
      options: [
        { name: 'Family hotels in Vicksburg', q: 'family hotels Vicksburg MS' }
      ]
    },
    flags: []
  },
  {
    n: 9, title: 'Vicksburg to Austin', color: '#15803d',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['MS', 'TX'],
    wx: { label: 'Shreveport', lat: 32.5252, lon: -93.7502, tz: 'America/Chicago' },
    route: [[32.3526, -90.8779], [32.5093, -92.1193], [32.5252, -93.7502], [31.7621, -95.6308], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'West on I-20 across Louisiana.'],
      ['Optional', 'Poverty Point World Heritage Site, 3,000-year-old earthworks built by early Native Americans (about a 1-hour detour north of I-20).'],
      ['Lunch', 'Shreveport.'],
      ['Evening', 'Southwest through East Texas, and arrive in Austin.']
    ],
    stops: [
      { name: 'Poverty Point World Heritage Site', lat: 32.6360, lon: -91.4080, kind: 'optional', url: 'https://www.nps.gov/popo/' },
      { name: 'Shreveport (lunch)', lat: 32.5252, lon: -93.7502, kind: 'stretch' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'gatlinburg', text: 'Book Gatlinburg (nights 5–6) early, especially for October weekends.' },
  { id: 'tag', text: 'Buy a Smokies parking tag (a weekly tag covers days 5–7) on recreation.gov or at a visitor center, and print it: digital copies don’t count.' },
  { id: 'mammoth', text: 'Reserve a Mammoth Cave tour on recreation.gov for day 4 (Frozen Niagara is easiest for young kids).' },
  { id: 'pass', text: 'Bring an America the Beautiful pass if you have one: it covers Vicksburg’s entrance fee. Hot Springs and the Smokies are free to enter; Mammoth Cave tours and Smokies parking tags are paid separately.' },
  { id: 'cades', text: 'Check the day of the week for Cades Cove: from May to September it is closed to cars on Wednesdays.' },
  { id: 'closures', text: 'Check the Smokies Closures & Alerts page the week before you leave.' },
  { id: 'peabody', text: 'Plan to be in the Peabody lobby by about 4:45 PM on day 2 for the Duck March.' },
  { id: 'hotels-rest', text: 'Book the remaining hotels with free cancellation.' },
  { id: 'car', text: 'Car check: brakes for the mountain roads, tires and wipers. Use a low gear coming down Newfound Gap Road.' }
];

window.PACKING = [
  'Layers and rain jackets: it is often 10–20°F colder at Kuwohi than in Gatlinburg, and mountain showers come fast',
  'A warm jacket for Mammoth Cave, which stays about 54°F all year',
  'Sturdy shoes for wet rocks near waterfalls and streams',
  'Stroller for the Gatlinburg Trail and city days; a child carrier for cave tours and steeper trails',
  'Binoculars for elk, deer and bears in Cades Cove and Oconaluftee',
  'Picnic supplies and a cooler: food is limited inside the Smokies',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Small first-aid kit, any medicines, and motion-sickness bands for the curvy mountain roads',
  'Printed parking tag, national park pass, and Junior Ranger booklets'
];
