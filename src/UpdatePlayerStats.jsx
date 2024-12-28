import { useState, useTransition } from "react";

function UpdatePlayerStats() {
  const [stats, setStats] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const updateStats = async (stats) => {
    try {
      const response = await fetch("/api/updateStats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stats }),
      });
      if (!response.ok) {
        throw new Error("Failed to update stats");
      }
      return null;
    } catch (error) {
      return error?.message;
    }
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateStats(stats);
      if (error) {
        setError(error);
        return;
      }
      // Handle successful update, e.g., notify user
    });
  };

  return (
    <div>
      <input value={stats} onChange={(e) => setStats(e.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update Stats
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default UpdatePlayerStats;
