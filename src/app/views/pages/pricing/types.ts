export type PricingPlanType = {
  name: string
  description: string
  price: string
  priceNote: string
  usage: string
  features: {
    label: string
    included: boolean
  }[]
  buttonLabel: string
  buttonVariant: 'primary' | 'outline-primary' | 'dark' | 'outline-dark'
  badge?: {
    text: string
    color: string
    textColor: string
  }
  contactEmail?: string
}
