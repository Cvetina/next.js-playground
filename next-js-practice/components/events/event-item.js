export default function EventItem(props) {
  const { title, image, description, date, lication, id } = props.event;
  const eventDate = new Date(date).toLocaleTimeString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li>
      <img width="90%" src={image} />
      <div>{eventDate}</div>
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
    </li>
  );
}
