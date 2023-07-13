
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";


TimeAgo.addDefaultLocale(es);

// eslint-disable-next-line react/prop-types
export default function LastSeen({ date }) {
  return (
    <div>
      Last seen: <ReactTimeAgo date={date} locale="es-ES" timeStyle='twitter' />
    </div>
  );
}
