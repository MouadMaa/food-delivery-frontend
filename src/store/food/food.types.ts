export interface Food {
  id: string
  name: string
  desc?: string
  price: number
  image?: string
  order: number
  choices: Choice[]
  dishId?: string
}

export interface Choice {
  id: string
  title: string
  type: 'single' | 'multiple'
  order: number
  options: Option[]
}

export interface Option {
  id: string
  name: string
  price?: number
}
