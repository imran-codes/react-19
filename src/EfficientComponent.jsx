// The new React Compiler optimizes code by transforming React components into highly efficient JavaScript, reducing the need for manual optimizations like useCallback and useMemo.

// import React from "react";

// Optimizing the display of player statistics:

/* eslint-disable react/prop-types */
function PlayerStats({ stats }) {
  return (
    <div>
      <h2>Player Statistics</h2>
      <p>Points: {stats?.points}</p>
      <p>Assists: {stats?.assists}</p>
      <p>Rebounds: {stats?.rebounds}</p>
    </div>
  );
}

export default PlayerStats;

// export default React.memo(PlayerStats);