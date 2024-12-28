/* eslint-disable react/prop-types */
"use client";

// React 19 introduces directives like 'use client' and 'use server' to specify where components and functions should run, aiding in the distinction between client-side and server-side code.

// Rendering a client-side leaderboard:

import { useEffect } from "react";

function Leaderboard({ data }) {
  useEffect(() => {
    // Fetch leaderboard data
    fetch("/api/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        // Update the component with the new data
        // eslint-disable-next-line no-param-reassign
        data.sort((a, b) => b.points - a.points);
      });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {data?.map((player) => (
          <li key={player.id}>
            {player.name}: {player.points} points
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
