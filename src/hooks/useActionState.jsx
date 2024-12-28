import { useActionState } from "react";

// Simplifies managing asynchronous updates by tracking the state of actions and handling errors.
// Streamlines the process of submitting forms or data, such as player stats or match results, in sports management apps.
// Updating player performance statistics:

// eslint-disable-next-line react/prop-types
function UpdatePlayerPerformance({ stats, onStatsUpdate }) {
  const updateStats = async (newStats) => {
    const response = await fetch("/api/updateStats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stats: newStats }),
    });
    if (!response.ok) {
      throw new Error("Failed to update stats");
    }
    return newStats;
  };
  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const newStats = formData.get("stats");
      const updatedStats = await updateStats(newStats);
      onStatsUpdate(updatedStats);
      return null;
    },
    null
  );
  return (
    <form action={submitAction}>
      <input type="text" name="stats" defaultValue={stats} />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default UpdatePlayerPerformance;
