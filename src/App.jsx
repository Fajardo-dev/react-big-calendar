import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2023-12-25T12:00:00").toDate(),
      end: dayjs("2023-12-25T12:00:00").toDate(),
      title: "Event test",
    },
  ];

  return (
    <article className="Calendar">
      <Calendar localizer={localizer} events={events} />
    </article>
  );
}

export default App;
