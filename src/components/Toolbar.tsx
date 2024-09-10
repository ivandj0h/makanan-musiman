// react
import React from "react"

interface ToolbarProps {
  kind: string
  searchText: string
  season: string
  setKind: (text: string) => void
  setSearchText: (text: string) => void
  setSeason: (text: string) => void
}

const Toolbar = ({ 
  kind,
  searchText, 
  season,
  setKind,
  setSearchText,
  setSeason
}: ToolbarProps) => {
  const kindOptions = [
    {
      label: '🍎 Fruit',
      value: 'fruit'
    }, 
    {
      label: '🥬 Vegetable',
      value: 'vegetable'
    },
    {
      label: '☑️ All Kinds',
      value: 'all'
    }
  ]

  const seasonOptions = [
    {
      label: '❄️ Winter',
      value: 'winter'
    },
    {
      label: '🌸 Spring',
      value: 'spring'
    },
    {
      label: '☀️ Summer',
      value: 'summer'
    },
    {
      label: '🍂 Fall',
      value: 'fall'
    },
    {
      label: '☑️ All Seasons',
      value: 'all'
    }
  ]

  return (
    <div className="flex flex-col md:flex-row pb-8 lg:pb-14 sm:pb-12 gap-3 lg:gap-4">
        <input 
          value={searchText}
          className="w-full md:w-1/2 lg:w-3/5 2xl:w-2/3 p-3 border border-black"
          type="text"
          id="name"
          name="name"
          placeholder="Search for a food..."
          onChange={e => setSearchText(e.target.value)}
        />
        <div className="flex gap-3 w-full md:w-1/2 lg:w-2/5 2xl:w-1/3">
          <select 
            value={kind}
            className="w-1/2 p-3 border border-black"
            onChange={e => setKind(e.target.value)}
          >
            <option 
              value=""
              disabled
              selected
            >
              Kind
            </option>
            {
              kindOptions.map(option => (
                <option value={option.value}>
                  {option.label}
                </option>
              ))
            }
          </select>
          <select 
            value={season}
            className="w-1/2 p-3 border border-black"
            onChange={e => setSeason(e.target.value)}
          >
            <option 
              value=""
              disabled
              selected
            >
              Season
            </option>
            {
              seasonOptions.map(option => (
                <option value={option.value}>
                  {option.label}
                </option>
              ))
            }
          </select>
          </div>
    </div>
  )
}

export default Toolbar