import { lazy, Suspense } from "react";

// // Lazy load ProfileDetails
const ProfileDetails = lazy(() => import("./helpers/ProfileDetails"));

const Review = () => {
  return (
    <div>
      <h2>Review Component</h2>
      <Suspense fallback={<p>Loading Profile Details...</p>}>
        <ProfileDetails />
      </Suspense>
    </div>
  );
};

export default Review;
