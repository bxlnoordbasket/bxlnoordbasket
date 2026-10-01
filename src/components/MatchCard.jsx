import { CalendarDays, Clock3, MapPin } from 'lucide-react';

export default function MatchCard({ date, time, team, opponent, location, compact = false }) {
  return (
    <article className={`match-card ${compact ? 'compact' : ''}`}>
      <div className="match-date">
        <CalendarDays size={18} />
        <span>{date}</span>
      </div>
      <div className="match-teams">
        <div className="match-team home-team">
          <img src="/assets/bnb-logo-white.png" alt="Brussel Noord Basket" />
          <span>{team}</span>
        </div>
        <span className="vs">VS</span>
        <div className="match-team opponent-team">
          <div className="opponent-placeholder">{opponent.slice(0, 2).toUpperCase()}</div>
          <span>{opponent}</span>
        </div>
      </div>
      <div className="match-meta">
        <span><Clock3 size={17} /> {time}</span>
        <span><MapPin size={17} /> {location}</span>
      </div>
    </article>
  );
}
