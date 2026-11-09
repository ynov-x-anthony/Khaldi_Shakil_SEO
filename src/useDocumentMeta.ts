import { useEffect } from 'react'

type MetaOptions = {
  title: string
  description?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
}

// Fourni, pas buggé : à toi de l'APPELER avec le bon contenu sur chaque page.

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useDocumentMeta(opts: MetaOptions) {
  useEffect(() => {
    document.title = opts.title
    if (opts.description) setMetaTag('name', 'description', opts.description)
    if (opts.canonical) setCanonical(opts.canonical)
    if (opts.ogTitle) setMetaTag('property', 'og:title', opts.ogTitle)
    if (opts.ogDescription) setMetaTag('property', 'og:description', opts.ogDescription)
  }, [opts.title, opts.description, opts.canonical, opts.ogTitle, opts.ogDescription])
}
