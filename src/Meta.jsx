import { Meta } from "react";

// React 19 introduces features for better asset loading and simplified management of document metadata. This helps improve performance and SEO.

// Adding metadata for a sports event page:

function EventPage() {
  return (
    <>
      <Meta
        name="events"
        content="Live updates for the championship game."
      />
      <h1>Championship Game Live</h1>
    </>
  );
}

export default EventPage;
