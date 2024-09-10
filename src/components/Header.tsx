// react
import React, { useEffect } from "react"

// utils
import { format } from 'date-fns'
import { getSeason } from '@/utils/getSeason'

// config
import { mapSeasonEmoji } from "@/config/mapSeasons"

interface HeaderProps {
  setSeason: (text: string) => void
}

const Header = ({ setSeason }: HeaderProps) => {
  const date = new Date()
  const today = format(date, 'MMMM d, y')
  const season = getSeason(date)

  useEffect(() => {
    setSeason(season)
  }, []);

  const seasonDisplay = season
    ? `${season} ${mapSeasonEmoji[season]}`
    : 'N/A :('

  return (
    <header className="py-4 sm:py-6 lg:py-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-limelight font-semibold pb-2">
        What's in season right now?
      </h1>
      <h3 className="sm:text-lg lg:text-xl py-2 sm:py-4">
        Today is <span className="font-bold text-lg sm:text-xl lg:text-2xl">{ today }</span>, 
        so the current season is&nbsp;
        <span className="font-bold text-lg sm:text-xl lg:text-2xl capitalize">
          { seasonDisplay }
        </span>
      </h3> 
    </header>
  )
}

export default Header