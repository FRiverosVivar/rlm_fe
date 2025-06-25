import { Filter } from '~/components/Icons/Filter/Filter'
import { Dropdown } from '../Dropdown/Dropdown'
import { DropdownItemCheckbox } from '../Dropdown/DropdownItemCheckbox'
import { useFiltersStore } from '~/store/filtersStore'
import { useState, useEffect } from 'react'

export function Filters() {
  const [isOpen, setIsOpen] = useState(false)
  const { rfpStatus, toggleRfpStatus, saveFilters } = useFiltersStore()
  const [tempFilters, setTempFilters] = useState(rfpStatus)

  // Reset temp filters when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTempFilters(rfpStatus)
    }
  }, [isOpen, rfpStatus])

  const handleStatusChange = (id: string, checked: boolean) => {
    setTempFilters((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const handlerSaveFilters = () => {
    // Apply only the changes that are different from current state
    Object.entries(tempFilters).forEach(([status, isChecked]) => {
      if (isChecked !== rfpStatus[status as keyof typeof rfpStatus]) {
        toggleRfpStatus(status as keyof typeof rfpStatus)
      }
    })
    saveFilters()
    setIsOpen(false)
  }

  return (
    <Dropdown
      className='p-4 py-3'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={
        <button
          className='bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-[3rem] w-[7rem]'
          onClick={() => setIsOpen(true)}
        >
          <div className='flex items-center gap-2'>
            <span className='text-gray-700 font-[14px]'>Filters</span>
            <Filter className='w-5 h-5 text-teal-500' />
          </div>
        </button>
      }
    >
      <span className='text-zinc-400 font-[14px]'>RFP Status</span>
      {Object.entries(tempFilters).map(([option, checked]) => (
        <DropdownItemCheckbox key={option} id={option} label={option} checked={checked} onChange={handleStatusChange} />
      ))}

      <button
        className='text-zinc-400 cursor-pointer mt-4 font-[14px] bg-[#4323FF] w-full h-8 text-white dark:text-white font-bold rounded-sm'
        onClick={handlerSaveFilters}
      >
        Save
      </button>
    </Dropdown>
  )
}
