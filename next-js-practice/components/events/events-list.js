import EventItem from "./event-item";

export default function EventsList(props) {
  return (
    <ul>
      {props.events.map((event) => {
        return <EventItem event={event} key={event.id} />;
      })}
    </ul>
  );
}
