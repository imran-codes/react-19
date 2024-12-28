// New static APIs in React DOM provide more control over server-side rendering and hydration, allowing for more efficient rendering strategies.

// Streaming live data for a sports commentary app:

import { renderToPipeableStream } from "react-dom/server";

const LiveCommentary = () => {
  return (
    <div>
      <h2>Live Commentary</h2>
      <p>Player 1 scores!</p>
      <p>Player 2 scores!</p>
      <p>Player 1 scores again!</p>
    </div>
  );
};

export default LiveCommentary;

export function handleLiveRequest(request, response) {
  const { pipe } = renderToPipeableStream(<LiveCommentary />, {
    onShellReady() {
      response.statusCode = 200;
      pipe(response);
    },
    onError(err) {
      console.error(err);
      response.statusCode = 500;
      response.end("Internal Server Error");
    },
  });
}
