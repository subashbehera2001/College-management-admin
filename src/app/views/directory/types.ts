export type ContactType = {
  name: string
  avatar: string
  country: {
    name: string
    flag: string
  }
  jobTitle: string
  about: string
  verified?: boolean
  rating: number
  campaigns: number
  contacts: number
  engagement: string
}
