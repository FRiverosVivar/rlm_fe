import { Input } from '~/components/atomic/Input/Input'
import { Filters } from '~/components/composite/FiltersButton/FiltersButton'
import { SearchBar } from '~/components/composite/SearchBar/SearchBar'
import { Filter } from '~/components/Icons/Filter/Filter'
import { Magnifier } from '~/components/Icons/Magnifier/Magnifier'
import { useState } from 'react'
import useDebounce from '~/hooks/useDebounce/useDebounce'
import { Events } from '~/components/composite/Events/Events'

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
  }
  return (
    <div className='min-h-screen bg-[#F9FBFF] p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Rooming List Management: Events</h1>

        <div className='flex gap-4 items-center mb-8'>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Filters />
        </div>
        <div className='flex gap-4 items-center mb-8'>
          <Events handleSearch={handleSearch} />
        </div>
      </div>
    </div>
  )
}
