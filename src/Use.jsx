import { Suspense, use } from "react";

// The use API allows reading resources during render, enabling components to suspend until a promise resolves.
// Fetching live match scores and rendering them in real-time:

// eslint-disable-next-line react/prop-types
function LiveScores({ scoresPromise }) {
  const scores = use(scoresPromise);
  return (
    <ul>
      {scores?.map((score, idx) => (
        <li key={idx}>
          {score.match}: {score.score}
        </li>
      ))}
    </ul>
  );
}

// eslint-disable-next-line react/prop-types
function Page({ scoresPromise }) {
  return (
    <Suspense fallback={<div>Loading live scores...</div>}>
      <LiveScores scoresPromise={scoresPromise} />
    </Suspense>
  );
}

export default Page;
