import { create } from 'zustand'

export interface FilterState {
  rfpStatus: {
    Active: boolean
    Closed: boolean
    Cancelled: boolean
  }
}

interface FilterActions {
  toggleRfpStatus: (status: keyof FilterState['rfpStatus']) => void
  resetFilters: () => void
  saveFilters: () => void
}

const initialState: FilterState = {
  rfpStatus: {
    Active: false,
    Closed: false,
    Cancelled: false,
  },
}

export const useFiltersStore = create<FilterState & FilterActions>((set, get) => ({
  ...initialState,

  toggleRfpStatus: (status) => {
    set((state) => ({
      rfpStatus: {
        ...state.rfpStatus,
        [status]: !state.rfpStatus[status],
      },
    }))
  },

  resetFilters: () => {
    set(initialState)
  },

  saveFilters: () => {
    // Here you could implement logic to save filters to localStorage
    // or send them to an API
    console.log('Saving filters:', get())
  },
}))
