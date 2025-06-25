export type DropdownItemProps = {
  children: React.ReactNode
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  danger?: boolean
}
export function DropdownItem({ children, onClick, icon: Icon, disabled = false, danger = false }: DropdownItemProps) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
          w-full px-4 py-2 text-left flex items-center space-x-3
          transition-colors duration-150
          ${
            disabled
              ? 'text-gray-400 cursor-not-allowed'
              : danger
                ? 'text-red-600 hover:bg-red-50'
                : 'text-gray-700 hover:bg-gray-100'
          }
        `}
    >
      {Icon}
      <span>{children}</span>
    </button>
  )
}
