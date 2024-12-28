import { useOptimistic } from "react";

// Manages optimistic updates, allowing the UI to reflect changes immediately before receiving server confirmation.

// Allows sports apps to show immediate updates, such as team lineup changes or scores, while awaiting backend confirmation.

// In a fantasy league app, users can update their team lineup optimistically while waiting for server confirmation.

// eslint-disable-next-line react/prop-types
function UpdateLineup({ currentLineup, onLineupChange }) {
  const [optimisticLineup, setOptimisticLineup] = useOptimistic(currentLineup);

  const updateLineup = async (newLineup) => {
    const response = await fetch("/api/updateLineup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineup: newLineup }),
    });
    if (!response.ok) {
      throw new Error("Failed to update lineup");
    }
    return newLineup;
  };

  const submitAction = async (formData) => {
    const newLineup = formData.get("lineup");
    setOptimisticLineup(newLineup);
    const updatedLineup = await updateLineup(newLineup);
    onLineupChange(updatedLineup);
  };

  return (
    <form action={submitAction}>
      <p>Current Lineup: {optimisticLineup}</p>
      <input type="text" name="lineup" defaultValue={currentLineup} />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default UpdateLineup;
