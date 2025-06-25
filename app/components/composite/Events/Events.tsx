import { useEffect, useState } from 'react'
import { EventList } from './EventList'
import useDebounce from '~/hooks/useDebounce/useDebounce'

export function Events({ handleSearch }: { handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  const [events, setEvents] = useState<any[]>([])

  const fetchEvents = async () => {
    const response = await fetch(process.env.API_URL + '/v1/events')
    const data = await response.json()
    console.log(data)
  }
  const debouncedSearch = useDebounce(handleSearch, 300)
  const handlerSearch
  useEffect(() => {
    fetchEvents()
  }, [])
  return (
    <>
      <EventList events={events} />
    </>
  )
}
