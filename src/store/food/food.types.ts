export interface Food {
  id: string
  name: string
  desc?: string
  price: number
  image?: string
  choices: Choice[]
}

export interface Choice {
  title: string
  type: 'single' | 'multiple'
  options: Option[]
}

export interface Option {
  name: string
  price?: number
}
