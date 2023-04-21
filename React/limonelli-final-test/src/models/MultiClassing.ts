export type MultiClassing ={
  prerequisites: Prerequisite[]
  proficiencies: Proficiency[]
  proficiency_choices: ProficiencyChoice[]
}

export type Prerequisite ={
  ability_score: AbilityScore
  minimum_score: number
}

export type AbilityScore ={
  index: string
  name: string
  url: string
}

export type Proficiency ={
  index: string
  name: string
  url: string
}

export type ProficiencyChoice ={
  desc: string
  choose: number
  type: string
  from: From
}

export type From ={
  option_set_type: string
  options: Option[]
}

export type Option ={
  option_type: string
  item: Item
}

export type Item ={
  index: string
  name: string
  url: string
}
