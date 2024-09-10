// react
import React, { useState, useEffect } from "react"

// gatsby
import type { HeadFC, PageProps } from "gatsby"

// firebase
import { db } from "@/config/firebase"
import { collection, getDocs, type DocumentData } from "firebase/firestore"

// components
import FoodCard from "@/components/FoodCard"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SEO from "@/components/Seo"
import Toolbar from "@/components/Toolbar"

const IndexPage: React.FC<PageProps> = () => {
  /**
   * data fetching
   */
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "seasonal-foods"))
      setData(querySnapshot.docs.map(doc => doc.data()))
    }

    fetchData()
  }, [])

  /**
   * searching + filtering
   */
  const [searchText, setSearchText] = useState('')
  const [kind, setKind] = useState('')
  const [season, setSeason] = useState('')

  const filteredData = data.filter(document => {
    const matchSearchText = document.name.toLowerCase()
      .startsWith(searchText.toLowerCase())
  
    let matchKind
    if (kind && kind !== 'all') {
      matchKind = document.kind === kind
    } else {
      matchKind = true
    }
    
    let matchSeason
    if (season && season !== 'all') {
      matchSeason = document.seasonality.includes(season)
    } else {
      matchSeason = true
    }

    return (
      matchSearchText &&
      matchKind &&
      matchSeason
    )
  })

  return (
    <main>
      <div className="pt-6 sm:pt-12 lg:pt-20 pb-10 px-12 sm:px-20 lg:px-36 xl:px-52 2xl:px-64 min-h-[calc(100vh-58px)]">
        <Header setSeason={setSeason} />
        <Toolbar
          kind={kind}
          searchText={searchText}
          season={season}
          setKind={setKind}
          setSearchText={setSearchText}
          setSeason={setSeason}
        />
        {
          filteredData.length
            ? (
                <div className="w-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
                  {
                    filteredData.map((food) => <FoodCard food={food} />)
                  }
                </div>
              )
            : 'No results :('
        }
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
