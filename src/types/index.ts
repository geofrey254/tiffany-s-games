export interface Category {
  id: string
  title: string
  description: string
  image: string | { url: string } | null
  trending?: boolean
  popularity?: boolean
}

export interface Topic {
  id: string
  title: string
  slug: string
  description?: string
  image?: string | { url: string } | null
}
