import { useState } from 'react'
import { Check } from '~/components/Icons/Check/Check'

export type DropdownItemCheckboxProps = {
  id: string
  label: string
  checked: boolean
  onChange: (id: string, checked: boolean) => void
}
export function DropdownItemCheckbox({ id, label, checked, onChange }: DropdownItemCheckboxProps) {
  return (
    <label htmlFor={id} className='flex items-center space-x-3 py-2 hover:bg-gray-50 cursor-pointer'>
      <div className='relative'>
        <input
          type='checkbox'
          id={id}
          checked={checked}
          onChange={(e) => onChange(id, e.target.checked)}
          className='sr-only'
        />
        <div
          className={`
            w-4 h-4 border-2 rounded flex items-center justify-center transition-colors
            ${checked ? 'bg-[#00C2A6] border-[#00C2A6]' : 'border-gray-300 bg-white hover:border-gray-400'}
          `}
        >
          {checked && <Check className='w-3 h-3 text-[#00C2A6]' />}
        </div>
      </div>
      <div className='flex-1 flex items-center justify-between'>
        <span className={`text-sm font-bold font-[14px] ${checked ? 'text-gray-900' : 'text-gray-700'}`}>{label}</span>
      </div>
    </label>
  )
}
