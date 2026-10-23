import "./extra.css";
import { person } from "./data";

// If you add src/assets/profile.jpg (or .png / .jpeg / .webp), it is used automatically.
const photos = import.meta.glob("./assets/profile.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const photo = Object.values(photos)[0];

const Profile = () => (
  <div className="profile">
    {photo ? (
      <img src={photo} alt={`${person.firstName} ${person.lastName}`} />
    ) : (
      <div className="profile-ph" aria-label={`${person.firstName} ${person.lastName}`}>
        AS
      </div>
    )}
  </div>
);

export default Profile;
