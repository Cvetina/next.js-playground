import EventsList from "../components/events/events-list";
import { DUMMY_EVENTS } from "../dummy-data";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const featuredEvents = DUMMY_EVENTS.filter((event) => event.isFeatured);

  return (
    <div className={styles.container}>
      <EventsList events={featuredEvents} />
    </div>
  );
}
