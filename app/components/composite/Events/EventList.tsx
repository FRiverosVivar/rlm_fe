import { EventCard } from './EventCard'

export function EventList({ events }: { events: any[] }) {
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
