import './App.css'
import {
  Activity,
  Apple,
  BedDouble,
  Calendar,
  ChevronRight,
  Droplets,
  HeartPulse,
  LineChart,
  MessagesSquare,
  Sparkles,
  Target,
} from 'lucide-react'
import { ResponsiveContainer, Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts'
import { formatNumber } from './lib/format'
import { dailyTrends, goals, insights, recentActivity, summary } from './data/sample'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark" aria-hidden="true">
            <Sparkles size={18} />
          </div>
          <div className="brandText">
            <div className="brandName">PulseBoard</div>
            <div className="brandSub">Health dashboard</div>
          </div>
        </div>

        <nav className="nav">
          <a className="navItem isActive" href="#">
            <LineChart size={18} /> Dashboard
          </a>
          <a className="navItem" href="#">
            <Activity size={18} /> Activity
          </a>
          <a className="navItem" href="#">
            <Target size={18} /> Goals
          </a>
          <a className="navItem" href="#">
            <MessagesSquare size={18} /> Coach
          </a>
        </nav>

        <div className="sidebarFooter">
          <div className="tip">
            <div className="tipTitle">Today’s focus</div>
            <div className="tipBody">{insights.focus}</div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="headline">
            <div className="title">Your Health</div>
            <div className="subtitle">
              <Calendar size={16} /> {summary.dateLabel}
            </div>
          </div>
          <div className="pill">
            <HeartPulse size={16} />
            <span>
              Readiness <strong>{summary.readiness}/100</strong>
            </span>
          </div>
        </header>

        <section className="grid">
          <article className="card card--stat">
            <div className="cardHeader">
              <div className="cardTitle">Steps</div>
              <div className="cardIcon cardIcon--steps" aria-hidden="true">
                <Activity size={18} />
              </div>
            </div>
            <div className="statValue">{formatNumber(summary.steps)}</div>
            <div className="statMeta">
              <span className="badge badge--good">+{summary.stepsDelta}%</span>
              <span className="muted">vs yesterday</span>
            </div>
            <div className="progress">
              <div className="progressBar" style={{ width: `${summary.stepsProgress}%` }} />
            </div>
            <div className="progressMeta">
              <span className="muted">Goal {formatNumber(goals.steps.target)}</span>
              <span className="muted">{summary.stepsProgress}%</span>
            </div>
          </article>

          <article className="card card--stat">
            <div className="cardHeader">
              <div className="cardTitle">Sleep</div>
              <div className="cardIcon cardIcon--sleep" aria-hidden="true">
                <BedDouble size={18} />
              </div>
            </div>
            <div className="statValue">{summary.sleepHours}h</div>
            <div className="statMeta">
              <span className="badge badge--warn">{summary.sleepQuality}</span>
              <span className="muted">quality</span>
            </div>
            <div className="split">
              <div className="splitItem">
                <div className="splitLabel muted">Deep</div>
                <div className="splitValue">{summary.sleepDeep}h</div>
              </div>
              <div className="splitItem">
                <div className="splitLabel muted">REM</div>
                <div className="splitValue">{summary.sleepRem}h</div>
              </div>
              <div className="splitItem">
                <div className="splitLabel muted">Awake</div>
                <div className="splitValue">{summary.sleepAwake}m</div>
              </div>
            </div>
          </article>

          <article className="card card--stat">
            <div className="cardHeader">
              <div className="cardTitle">Heart rate</div>
              <div className="cardIcon cardIcon--heart" aria-hidden="true">
                <HeartPulse size={18} />
              </div>
            </div>
            <div className="statValue">{summary.restingHr} bpm</div>
            <div className="statMeta">
              <span className="badge badge--good">Resting</span>
              <span className="muted">Zone {summary.hrZone}</span>
            </div>
            <div className="miniRow">
              <div className="mini">
                <div className="miniLabel muted">Avg</div>
                <div className="miniValue">{summary.avgHr} bpm</div>
              </div>
              <div className="mini">
                <div className="miniLabel muted">Max</div>
                <div className="miniValue">{summary.maxHr} bpm</div>
              </div>
              <div className="mini">
                <div className="miniLabel muted">HRV</div>
                <div className="miniValue">{summary.hrv} ms</div>
              </div>
            </div>
          </article>

          <article className="card card--stat">
            <div className="cardHeader">
              <div className="cardTitle">Nutrition</div>
              <div className="cardIcon cardIcon--nutrition" aria-hidden="true">
                <Apple size={18} />
              </div>
            </div>
            <div className="statValue">{formatNumber(summary.calories)} kcal</div>
            <div className="statMeta">
              <span className="badge badge--neutral">{summary.protein}g protein</span>
              <span className="muted">today</span>
            </div>
            <div className="miniRow">
              <div className="mini">
                <div className="miniLabel muted">Carbs</div>
                <div className="miniValue">{summary.carbs}g</div>
              </div>
              <div className="mini">
                <div className="miniLabel muted">Fat</div>
                <div className="miniValue">{summary.fat}g</div>
              </div>
              <div className="mini">
                <div className="miniLabel muted">Fiber</div>
                <div className="miniValue">{summary.fiber}g</div>
              </div>
            </div>
          </article>

          <article className="card card--wide">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">Daily trends</div>
                <div className="muted">Steps, heart rate, and hydration (last 7 days)</div>
              </div>
              <a className="link" href="#">
                Details <ChevronRight size={16} />
              </a>
            </div>

            <div className="chartWrap" role="img" aria-label="Health trends chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyTrends} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="stepsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.28} />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="hrFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--danger)" stopOpacity={0.18} />
                      <stop offset="100%" stopColor="var(--danger)" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="waterFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--info)" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="var(--info)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: 'var(--muted)', fontSize: 12 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: 'var(--muted)', fontSize: 12 }} width={36} />
                  <Tooltip
                    cursor={{ stroke: 'var(--border)', strokeDasharray: '4 4' }}
                    contentStyle={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      boxShadow: 'var(--shadow)',
                      color: 'var(--text)',
                    }}
                    labelStyle={{ color: 'var(--muted)' }}
                  />
                  <Area type="monotone" dataKey="stepsK" name="Steps (k)" stroke="var(--accent)" strokeWidth={2} fill="url(#stepsFill)" />
                  <Area type="monotone" dataKey="avgHr" name="Avg HR" stroke="var(--danger)" strokeWidth={2} fill="url(#hrFill)" />
                  <Area type="monotone" dataKey="waterL" name="Water (L)" stroke="var(--info)" strokeWidth={2} fill="url(#waterFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="legend">
              <div className="legendItem">
                <span className="dot dot--accent" /> Steps
              </div>
              <div className="legendItem">
                <span className="dot dot--danger" /> Heart rate
              </div>
              <div className="legendItem">
                <span className="dot dot--info" /> Hydration
              </div>
            </div>
          </article>

          <article className="card">
            <div className="cardHeader">
              <div className="cardTitle">Goals</div>
              <span className="muted">This week</span>
            </div>
            <div className="stack">
              <GoalRow icon={<Activity size={16} />} label="Steps" value={`${formatNumber(goals.steps.current)}/${formatNumber(goals.steps.target)}`} progress={goals.steps.progress} />
              <GoalRow icon={<Droplets size={16} />} label="Hydration" value={`${goals.hydration.current.toFixed(1)}L/${goals.hydration.target.toFixed(1)}L`} progress={goals.hydration.progress} />
              <GoalRow icon={<BedDouble size={16} />} label="Sleep" value={`${goals.sleep.current.toFixed(1)}h/${goals.sleep.target.toFixed(1)}h`} progress={goals.sleep.progress} />
            </div>
          </article>

          <article className="card">
            <div className="cardHeader">
              <div className="cardTitle">Recent activity</div>
              <a className="link" href="#">
                View all <ChevronRight size={16} />
              </a>
            </div>
            <div className="activityList">
              {recentActivity.map((a) => (
                <div key={a.id} className="activityItem">
                  <div className={`activityIcon ${a.tone}`}>
                    {a.type === 'workout' ? <Activity size={16} /> : a.type === 'hydration' ? <Droplets size={16} /> : <HeartPulse size={16} />}
                  </div>
                  <div className="activityMain">
                    <div className="activityTitle">{a.title}</div>
                    <div className="activityMeta muted">{a.time}</div>
                  </div>
                  <div className="activityValue">{a.value}</div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <footer className="footer">
          <div className="footerNote muted">
            Sample data for demo purposes. Connect your wearable API later.
          </div>
        </footer>
      </main>
    </div>
  )
}

function GoalRow(props: {
  icon: React.ReactNode
  label: string
  value: string
  progress: number
}) {
  return (
    <div className="goalRow">
      <div className="goalLeft">
        <div className="goalIcon" aria-hidden="true">
          {props.icon}
        </div>
        <div>
          <div className="goalLabel">{props.label}</div>
          <div className="muted">{props.value}</div>
        </div>
      </div>
      <div className="goalRight">
        <div className="progress progress--thin">
          <div className="progressBar" style={{ width: `${Math.min(100, Math.max(0, props.progress))}%` }} />
        </div>
        <div className="muted">{Math.round(props.progress)}%</div>
      </div>
    </div>
  )
}

export default App
