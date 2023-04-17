export type Character = {
    index: string
    name: string
    hit_die: number
    proficiency_choices: ProficiencyChoice[]
    proficiencies: Proficiency[]
    saving_throws: SavingThrow[]
    starting_equipment: StartingEquipment[]
    starting_equipment_options: StartingEquipmentOption[]
    class_levels: string
    multi_classing: MultiClassing
    subclasses: Subclass[]
    url: string
  }
  
  export type ProficiencyChoice = {
    desc: string
    choose: number
    type: string
    from: From
  }
  
  export type From = {
    option_set_type: string
    options: Option[]
  }
  
  export type Option ={
    option_type: string
    item: Item
  }
  
  export type Item = {
    index: string
    name: string
    url: string
  }
  
  export type Proficiency ={
    index: string
    name: string
    url: string
  }
  
  export type SavingThrow= {
    index: string
    name: string
    url: string
  }
  
  export type StartingEquipment = {
    equipment: Equipment
    quantity: number
  }
  
  export type Equipment ={
    index: string
    name: string
    url: string
  }
  
  export type StartingEquipmentOption ={
    desc: string
    choose: number
    type: string
    from: From2
  }
  
  export type From2 ={
    option_set_type: string
    options: Option2[]
  }
  
  export type Option2 ={
    option_type: string
    count?: number
    of?: Of
    choice?: Choice
  }
  
  export type Of ={
    index: string
    name: string
    url: string
  }
  
  export type Choice ={
    desc: string
    choose: number
    type: string
    from: From3
  }
  
  export type From3 ={
    option_set_type: string
    equipment_category: EquipmentCategory
  }
  
  export type EquipmentCategory = {
    index: string
    name: string
    url: string
  }
  
  export type MultiClassing = {
    prerequisites: Prerequisite[]
    proficiencies: Proficiency2[]
  }
  
  export type Prerequisite = {
    ability_score: AbilityScore
    minimum_score: number
  }
  
  export type AbilityScore = {
    index: string
    name: string
    url: string
  }
  
  export type Proficiency2 = {
    index: string
    name: string
    url: string
  }
  
  export type Subclass = {
    index: string
    name: string
    url: string
  }
  