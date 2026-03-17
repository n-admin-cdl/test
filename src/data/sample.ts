export const summary = {
  dateLabel: 'Today',
  readiness: 82,
  steps: 9842,
  stepsDelta: 12,
  stepsProgress: 82,
  sleepHours: 7.3,
  sleepQuality: 'Fair',
  sleepDeep: 1.7,
  sleepRem: 1.9,
  sleepAwake: 28,
  restingHr: 58,
  avgHr: 76,
  maxHr: 142,
  hrv: 48,
  hrZone: 2,
  calories: 2140,
  protein: 122,
  carbs: 238,
  fat: 71,
  fiber: 28,
} as const

export const dailyTrends = [
  { day: 'Mon', stepsK: 8.2, avgHr: 74, waterL: 1.8 },
  { day: 'Tue', stepsK: 9.1, avgHr: 77, waterL: 2.1 },
  { day: 'Wed', stepsK: 7.6, avgHr: 72, waterL: 1.6 },
  { day: 'Thu', stepsK: 10.4, avgHr: 80, waterL: 2.4 },
  { day: 'Fri', stepsK: 11.2, avgHr: 83, waterL: 2.0 },
  { day: 'Sat', stepsK: 9.7, avgHr: 78, waterL: 2.6 },
  { day: 'Sun', stepsK: 9.8, avgHr: 76, waterL: 2.2 },
] as const

export const goals = {
  steps: { current: 49210, target: 60000, progress: 82 },
  hydration: { current: 12.4, target: 15.0, progress: 83 },
  sleep: { current: 46.2, target: 56.0, progress: 83 },
} as const

export const recentActivity = [
  { id: 'a1', type: 'workout', tone: 'tone--accent', title: 'Zone 2 run', time: '08:12', value: '32 min' },
  { id: 'a2', type: 'hydration', tone: 'tone--info', title: 'Hydration', time: '10:03', value: '0.5 L' },
  { id: 'a3', type: 'recovery', tone: 'tone--danger', title: 'Breathwork', time: '12:40', value: '10 min' },
  { id: 'a4', type: 'workout', tone: 'tone--accent', title: 'Strength session', time: '18:05', value: '45 min' },
] as const

export const insights = {
  focus: 'Get 15 minutes of daylight before noon.',
} as const

