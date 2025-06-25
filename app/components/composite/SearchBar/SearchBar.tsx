import { Magnifier } from '~/components/Icons/Magnifier/Magnifier'
import { Input } from '~/components/atomic/Input/Input'

export function SearchBar({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string
  setSearchQuery: (query: string) => void
}) {
  return (
    <Input
      startSlot={<Magnifier className='text-zinc-400 dark:text-zinc-400' />}
      className='relative bg-transparent dark:bg-white rounded-lg border border-gray-400 dark:border-[#E4ECF2] dark:focus:border-[#E4ECF2] dark:text-zinc-900 shadow-sm h-[3rem] w-[17.5rem] hover:shadow-md transition-shadow'
      placeholder='Search'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}
