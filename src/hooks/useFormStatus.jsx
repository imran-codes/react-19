import { useFormStatus } from "react-dom";

// Tracks the status of form submissions, including pending states and errors, and provides actionable feedback.
// Ideal for handling submission states in forms, such as player registration or score submission.
// Displaying form submission progress:

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      Submit
    </button>
  );
}

export default SubmitButton;
