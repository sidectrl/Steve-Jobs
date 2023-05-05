export type Data = {
  results: Result[]
}

export type Result ={
  gender: string
  name: Name
  location: Location
  email: string
  dob: Dob
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

export type Name ={
  title: string
  first: string
  last: string
}

export type Location ={
  street: Street
  city: string
  state: string
  country: string
  postcode: any
  coordinates: Coordinates
  timezone: Timezone
}

export type Street ={
  number: number
  name: string
}

export type Coordinates ={
  latitude: string
  longitude: string
}

export type Timezone ={
  offset: string
  description: string
}

export type Dob ={
  date: string
  age: number
}

export type Id ={
  name: string
  value: string
}

export type Picture ={
  large: string
  medium: string
  thumbnail: string
}

