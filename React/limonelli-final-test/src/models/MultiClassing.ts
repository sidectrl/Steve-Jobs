export type MultiClassing = {
    prerequisites: Prerequisite[]
    proficiencies: Proficiency[]
    proficiency_choices: any[]
  }
  
  export type Prerequisite ={
    ability_score: AbilityScore
    minimum_score: number
  }
  
  export type AbilityScore = {
    index: string
    name: string
    url: string
  }
  
  export type Proficiency ={
    index: string
    name: string
    url: string
  }