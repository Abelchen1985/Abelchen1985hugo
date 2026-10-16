/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  id: 'ys',
  title: 'Yellowstone & Rockies Family Road Trip',
  subtitle: 'Austin → Rocky Mountain → Grand Teton → Yellowstone → Black Hills → Badlands → Austin · 13 days, family-paced',
  defaultStart: null,
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 },
  roads: 'cotrip.org (Colorado), wyoroad.info (Wyoming) and sd511.org (South Dakota)',
  snowMonths: [3, 4, 5, 10, 11],
  season: {
    summary: 'Mid-June to mid-July and September. Every park road is open then; September brings thinner crowds, cool days and the elk rut.',
    months: ['off', 'off', 'off', 'fair', 'good', 'best', 'good', 'good', 'best', 'fair', 'off', 'off'],
    labels: { off: 'Closed' },
    notes: [
      'Yellowstone roads open to cars in stages: the first in mid-April, the South and East entrances in May, and Dunraven Pass around late May. Most roads close around Oct 31 (Dunraven Pass around Oct 12).',
      'November to mid-April, only the North–Northeast entrance road is open to cars, so this route doesn’t work.',
      'Trail Ridge Road in Rocky Mountain National Park usually runs from about Memorial Day to mid-October, and the park needs timed-entry reservations in that window.',
      'July and August are the most crowded months: book in-park lodging as far ahead as you can (often up to a year).',
      'Snow can fall in any month at Yellowstone’s elevation (7,000–8,000 ft). Pack layers even in July.'
    ],
    sources: [
      { label: 'NPS: Yellowstone park roads', url: 'https://www.nps.gov/yell/planyourvisit/parkroads.htm' },
      { label: 'NPS: Rocky Mountain timed entry', url: 'https://www.nps.gov/romo/planyourvisit/timed-entry-permit-system.htm' }
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
    n: 3, title: 'Colorado Springs to Rocky Mountain National Park', color: '#a16207',
    drive: '~2.5 hrs', driveNote: 'est.', zones: ['CO', 'CO'],
    wx: { label: 'Estes Park', lat: 40.3772, lon: -105.5217, tz: 'America/Denver' },
    route: [[38.8339, -104.8214], [39.7392, -104.9903], [40.1672, -105.1019], [40.3772, -105.5217], [40.3123, -105.6450]],
    plan: [
      ['Morning', 'Optional: drive or take the cog railway up Pikes Peak (14,115 ft) before you leave. Book the railway ahead.'],
      ['Midday', 'North past Denver to Estes Park.'],
      ['Afternoon', 'Rocky Mountain National Park: Bear Lake (a flat, half-mile loop) and elk grazing in Moraine Park. Use your timed-entry slot.'],
      ['Evening', 'Stroll the Estes Park riverwalk. Elk often wander through town at dusk.']
    ],
    stops: [
      { name: 'Pikes Peak', lat: 38.8409, lon: -105.0442, kind: 'optional', url: 'https://www.cograilway.com/',
        note: 'Cold and windy at the top even in summer; altitude can bother little ones.' },
      { name: 'Bear Lake, Rocky Mountain National Park', lat: 40.3123, lon: -105.6450, kind: 'main', url: 'https://www.nps.gov/romo/',
        note: 'Parking fills early. The park shuttle from the Park & Ride is easier.' },
      { name: 'Moraine Park', lat: 40.3555, lon: -105.5900, kind: 'main' }
    ],
    hotels: {
      area: 'Estes Park, right outside the Beaver Meadows entrance',
      options: [
        { name: 'Family hotels and cabins in Estes Park', q: 'family hotels cabins Estes Park CO' },
        { name: 'The Stanley Hotel', q: 'The Stanley Hotel Estes Park' }
      ]
    },
    flags: ['rmnp', 'alpine', 'snow']
  },
  {
    n: 4, title: 'Trail Ridge Road, then on to Rawlins', color: '#4d7c0f',
    drive: '~5 hrs + park time', driveNote: 'est.', zones: ['CO', 'WY'],
    wx: { label: 'Alpine Visitor Center (Trail Ridge)', lat: 40.4415, lon: -105.7535, tz: 'America/Denver' },
    route: [[40.3772, -105.5217], [40.4415, -105.7535], [40.3772, -105.5217], [40.5853, -105.0844], [41.3114, -105.5911], [41.7911, -107.2387]],
    plan: [
      ['Early', 'Drive Trail Ridge Road, the highest continuous paved road in the U.S. (12,183 ft), to the Alpine Visitor Center and back. Watch for elk and marmots above the tree line.'],
      ['Late morning', 'Back down to Estes Park, then north through Fort Collins.'],
      ['Afternoon', 'West on I-80 over the Laramie plains. Optional stop at Vedauwoo for kid-friendly granite boulders.'],
      ['Evening', 'Overnight in Rawlins.']
    ],
    stops: [
      { name: 'Alpine Visitor Center', lat: 40.4415, lon: -105.7535, kind: 'main',
        note: 'At 11,796 ft it is often 20–30°F colder than Estes Park, with thin air. Take it slow with kids.' },
      { name: 'Vedauwoo Recreation Area', lat: 41.1586, lon: -105.3780, kind: 'optional' },
      { name: 'Laramie (lunch)', lat: 41.3114, lon: -105.5911, kind: 'stretch' }
    ],
    hotels: {
      area: 'Rawlins, right on I-80',
      options: [
        { name: 'Hotels in Rawlins', q: 'hotels Rawlins WY' }
      ]
    },
    flags: ['trail-ridge', 'rmnp', 'alpine', 'snow']
  },
  {
    n: 5, title: 'Rawlins to Grand Teton and Jackson', color: '#0f766e',
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
    n: 6, title: 'Grand Teton to Old Faithful', color: '#0369a1',
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
    n: 7, title: 'Grand Prismatic to Canyon Village', color: '#7c3aed',
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
    n: 8, title: 'Hayden Valley to Cody', color: '#be123c',
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
    n: 9, title: 'Cody to Devils Tower and the Black Hills', color: '#15803d',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['WY', 'SDW'],
    wx: { label: 'Devils Tower', lat: 44.5902, lon: -104.7146, tz: 'America/Denver' },
    route: [[44.5263, -109.0565], [44.4889, -108.0565], [44.5876, -107.6217], [44.7972, -106.9562], [44.2911, -105.5022], [44.5902, -104.7146], [44.4908, -103.8594], [44.0805, -103.2310]],
    plan: [
      ['Early', 'East over the Bighorn Mountains on US-14. Stop at Shell Falls to stretch.'],
      ['Midday', 'Lunch in Sheridan, then on through Gillette.'],
      ['Afternoon', 'Devils Tower National Monument, the first U.S. national monument. Walk the paved 1.3-mile Tower Trail and look for climbers. Prairie dogs line the entrance road.'],
      ['Evening', 'Through Spearfish to Rapid City. This is the longest day, so keep the evening easy.']
    ],
    stops: [
      { name: 'Shell Falls', lat: 44.5876, lon: -107.6217, kind: 'stretch' },
      { name: 'Sheridan (lunch)', lat: 44.7972, lon: -106.9562, kind: 'stretch' },
      { name: 'Devils Tower National Monument', lat: 44.5902, lon: -104.7146, kind: 'main', url: 'https://www.nps.gov/deto/' }
    ],
    hotels: {
      area: 'Rapid City, the gateway to the Black Hills',
      options: [
        { name: 'Family hotels in Rapid City', q: 'family hotels Rapid City SD' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 10, title: 'Mount Rushmore, Custer State Park and Wind Cave', color: '#9333ea',
    drive: '~2 hrs + stops', driveNote: 'est.', zones: ['SDW', 'SDW'],
    wx: { label: 'Custer State Park', lat: 43.7230, lon: -103.4000, tz: 'America/Denver' },
    route: [[44.0805, -103.2310], [43.8791, -103.4591], [43.8100, -103.4000], [43.7230, -103.4000], [43.5560, -103.4780], [43.7666, -103.5988]],
    plan: [
      ['Morning', 'Mount Rushmore National Memorial: walk the Presidential Trail for close-up views of the faces.'],
      ['Late morning', 'Iron Mountain Road, with its pigtail bridges and tunnels framing Rushmore.'],
      ['Afternoon', 'Custer State Park Wildlife Loop: bison, pronghorn and the famous “begging burros.” Then a ranger-led tour at Wind Cave National Park, one of the longest caves in the world.'],
      ['Evening', 'Overnight in Custer or Hill City.']
    ],
    stops: [
      { name: 'Mount Rushmore National Memorial', lat: 43.8791, lon: -103.4591, kind: 'main', url: 'https://www.nps.gov/moru/',
        note: 'No entry fee, but parking is paid. In summer there is an evening lighting ceremony.' },
      { name: 'Custer State Park Wildlife Loop', lat: 43.7230, lon: -103.4000, kind: 'main', url: 'https://gfp.sd.gov/parks/detail/custer-state-park/',
        note: 'Needs a state park entrance license. Never feed or pet the burros or bison.' },
      { name: 'Wind Cave National Park', lat: 43.5560, lon: -103.4780, kind: 'main', url: 'https://www.nps.gov/wica/',
        note: 'Cave tours are ranger-led only; buy tickets on recreation.gov or early at the visitor center. Strollers are not allowed in the cave.' },
      { name: 'Crazy Horse Memorial', lat: 43.8366, lon: -103.6236, kind: 'optional' }
    ],
    hotels: {
      area: 'Custer or Hill City, in the middle of the Black Hills',
      options: [
        { name: 'Lodges inside Custer State Park', q: 'Custer State Park Resort lodges' },
        { name: 'Family hotels in Custer', q: 'family hotels Custer SD' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 11, title: 'Badlands National Park to North Platte', color: '#db2777',
    drive: '~6.5 hrs', driveNote: 'est.', zones: ['SDW', 'NEC'],
    wx: { label: 'Badlands', lat: 43.7497, lon: -101.9405, tz: 'America/Denver' },
    route: [[43.7666, -103.5988], [43.9925, -102.2416], [43.8800, -102.2300], [43.7497, -101.9405], [43.1700, -101.7300], [42.8728, -100.5510], [41.1239, -100.7654]],
    plan: [
      ['Morning', 'Drive the Badlands Loop Road through Badlands National Park: striped buttes, bighorn sheep and prairie dog towns. The boardwalk Fossil Exhibit Trail is perfect for kids.'],
      ['Midday', 'Optional: Wall Drug for free ice water and a giant jackalope, or the Minuteman Missile site.'],
      ['Afternoon', 'South through the Nebraska Sandhills via Valentine. You lose an hour entering Central Time.'],
      ['Evening', 'Overnight in North Platte.']
    ],
    stops: [
      { name: 'Badlands National Park (Ben Reifel Visitor Center)', lat: 43.7497, lon: -101.9405, kind: 'main', url: 'https://www.nps.gov/badl/',
        note: 'Little shade and big drop-offs: bring water and hats, and keep kids close at overlooks.' },
      { name: 'Wall Drug', lat: 43.9925, lon: -102.2416, kind: 'optional' },
      { name: 'Minuteman Missile National Historic Site', lat: 43.8800, lon: -101.9600, kind: 'optional', url: 'https://www.nps.gov/mimi/' },
      { name: 'Valentine (lunch)', lat: 42.8728, lon: -100.5510, kind: 'stretch' }
    ],
    hotels: {
      area: 'North Platte, on I-80',
      options: [
        { name: 'Hotels in North Platte', q: 'hotels North Platte NE' }
      ]
    },
    flags: []
  },
  {
    n: 12, title: 'North Platte to Wichita', color: '#1d4ed8',
    drive: '~6 hrs', driveNote: 'est.', zones: ['NEC', 'KS'],
    wx: { label: 'Wichita', lat: 37.6872, lon: -97.3301, tz: 'America/Chicago' },
    route: [[41.1239, -100.7654], [40.2022, -100.6254], [38.8792, -99.3268], [38.0650, -97.9180], [37.6872, -97.3301]],
    plan: [
      ['Morning', 'South across the Kansas plains.'],
      ['Optional', 'Monument Rocks, 70-foot chalk pyramids rising out of the prairie (a gravel-road detour of about 1.5 hours).'],
      ['Afternoon', 'Cosmosphere in Hutchinson: real spacecraft, including Apollo 13’s command module.'],
      ['Evening', 'On to Wichita.']
    ],
    stops: [
      { name: 'Monument Rocks', lat: 38.7939, lon: -100.7631, kind: 'optional', note: 'On private land open to visitors. Respect the fences, and skip it after heavy rain.' },
      { name: 'Hays (lunch)', lat: 38.8792, lon: -99.3268, kind: 'stretch' },
      { name: 'Cosmosphere', lat: 38.0650, lon: -97.9180, kind: 'main', url: 'https://cosmo.org/' }
    ],
    hotels: {
      area: 'Wichita',
      options: [
        { name: 'Family hotels in Wichita', q: 'family hotels Wichita KS' }
      ]
    },
    flags: []
  },
  {
    n: 13, title: 'Wichita to Austin', color: '#0e7490',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['KS', 'TX'],
    wx: { label: 'Waco', lat: 31.5493, lon: -97.1467, tz: 'America/Chicago' },
    route: [[37.6872, -97.3301], [35.4676, -97.5164], [34.1743, -97.1436], [32.7555, -97.3308], [31.6066, -97.1764], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'South on I-35 into Oklahoma.'],
      ['Optional', 'Oklahoma City National Memorial, or Turner Falls in the Arbuckle Mountains, for a stretch.'],
      ['Afternoon', 'Waco Mammoth National Monument: a dig site with Columbian mammoths still in the ground.'],
      ['Evening', 'Arrive in Austin.']
    ],
    stops: [
      { name: 'Oklahoma City National Memorial', lat: 35.4731, lon: -97.5171, kind: 'optional' },
      { name: 'Turner Falls Park', lat: 34.4243, lon: -97.1467, kind: 'optional' },
      { name: 'Waco Mammoth National Monument', lat: 31.6066, lon: -97.1764, kind: 'main', url: 'https://www.nps.gov/waco/',
        note: 'Guided tours of the dig shelter run about every 30 minutes.' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'ys-lodging', text: 'Book Yellowstone lodging first (nights 6 and 7): in-park rooms open about 13 months ahead and sell out.' },
  { id: 'rmnp-entry', text: 'Get a Rocky Mountain National Park timed-entry reservation on recreation.gov for days 3 and 4.' },
  { id: 'teton', text: 'Book Jackson or Teton Village (night 5). Summer prices climb fast.' },
  { id: 'pass', text: 'Buy an America the Beautiful annual pass: it covers Rocky Mountain, Grand Teton, Yellowstone, Badlands and the national monuments on this route.' },
  { id: 'windcave', text: 'Reserve a Wind Cave tour on recreation.gov for day 10.' },
  { id: 'custer', text: 'Buy a Custer State Park entrance license (state parks are not covered by the national pass).' },
  { id: 'roads', text: 'Check the NPS Yellowstone park roads page the week before you leave.' },
  { id: 'bear', text: 'Buy bear spray in Jackson or at the park stores (you can’t fly with it, but you can drive with it).' },
  { id: 'hotels-rest', text: 'Book the remaining hotels with free cancellation.' },
  { id: 'car', text: 'Car check: tires, brakes for the mountain passes, wipers, and a full-size spare. Some Wyoming stretches have 70+ miles between gas stations.' }
];

window.PACKING = [
  'Warm layers, hats and gloves: mornings can be near freezing in Yellowstone and on Trail Ridge Road, even in July',
  'Rain jackets for afternoon mountain thunderstorms',
  'Binoculars for Hayden Valley and Custer State Park wildlife',
  'Stroller for the geyser boardwalks; a child carrier for Hidden Falls and the Wind Cave tour (no strollers)',
  'Sunscreen and sunglasses: the sun is strong at high altitude',
  'Refillable water bottles and car snacks; services are far apart in Wyoming and Nebraska',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Small first-aid kit, any medicines, and motion-sickness bands for mountain roads',
  'National park pass, and a Junior Ranger booklet for each park'
];
