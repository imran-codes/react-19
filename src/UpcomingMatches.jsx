// 5. Server Components

// Server Components enable rendering components on the server, improving performance and SEO by reducing the amount of JavaScript sent to the client.

// Rendering a list of upcoming matches:

// Server Component

export default async function UpcomingMatches() {
  const res = await fetch("https://api.sportsdata.com/upcoming-matches");
  const matches = await res.json();
  return (
    <div>
      <h1>Upcoming Matches</h1>
      <ul>
        {matches?.map((match) => (
          <li key={match.id}>
            {match.team1} vs {match.team2} - {match.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
