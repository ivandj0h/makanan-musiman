// react
import React from "react"

// hooks
import { useSiteMetadata } from "@/hooks/useSiteMetadata"

const SEO = () => {
  const { title, description, siteUrl } = useSiteMetadata()

  const seo = {
    title,
    description,
    url: siteUrl
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  )
}

export default SEO