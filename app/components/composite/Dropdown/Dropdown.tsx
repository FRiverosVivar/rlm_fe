import { useEffect, useRef, useState } from 'react'
export type DropdownProps = {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  align?: 'left' | 'right' | 'center'
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export function Dropdown({ trigger, children, className = '', align = 'left', isOpen, setIsOpen }: DropdownProps) {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2',
  }

  return (
    <div className='relative inline-block' ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div
          className={`
            absolute top-full mt-2 
            ${alignmentClasses[align]}
            bg-white border border-gray-200 rounded-lg shadow-lg 
            min-w-48 z-50 py-1
            ${className}
          `}
        >
          {children}
        </div>
      )}
    </div>
  )
}
