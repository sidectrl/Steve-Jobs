export type Monster ={
    index: string
    name: string
    size: string
    type: string
    alignment: string
    armor_class: ArmorClass[]
    hit_points: number
    hit_dice: string
    hit_points_roll: string
    speed: Speed
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    proficiencies: Proficiency[]
    damage_vulnerabilities: From[]
    damage_resistances: From[]
    damage_immunities: string[]
    condition_immunities: From[]
    senses: Senses
    languages: string
    challenge_rating: number
    xp: number
    special_abilities: SpecialAbility[]
    actions: Action[]
    legendary_actions: LegendaryAction[]
    image: string
    url: string
  }
  
  export type From = {
    index: string
    name: string
    url: string
    }
    
  export type ArmorClass ={
    type: string
    value: number
  }
  
  export type Speed ={
    walk: string
    fly: string
    swim: string
  }
  
  export type Proficiency ={
    value: number
    proficiency: Proficiency2
  }
  
  export type Proficiency2 ={
    index: string
    name: string
    url: string
  }
  
  export type Senses ={
    blindsight: string
    darkvision: string
    passive_perception: number
  }
  
  export type SpecialAbility ={
    name: string
    desc: string
    usage?: Usage
  }
  
  export type Usage = {
    type: string
    times: number
    rest_types: any[]
  }
  
  export type Action= {
    name: string
    multiattack_type?: string
    desc: string
    actions: Action2[]
    attack_bonus?: number
    damage?: Damage[]
    dc?: Dc
    usage?: Usage2
  }
  
  export type Action2 ={
    action_name: string
    count: number
    type: string
  }
  
  export type Damage= {
    damage_type: DamageType
    damage_dice: string
  }
  
  export type DamageType ={
    index: string
    name: string
    url: string
  }
  
  export type Dc ={
    dc_type: DcType
    dc_value: number
    success_type: string
  }
  
  export type DcType ={
    index: string
    name: string
    url: string
  }
  
  export type Usage2 ={
    type: string
    dice: string
    min_value: number
  }
  
  export type LegendaryAction ={
    name: string
    desc: string
    dc?: Dc2
    damage?: Damage2[]
  }
  
  export type Dc2= {
    dc_type: DcType2
    dc_value: number
    success_type: string
  }
  
  export type DcType2 ={
    index: string
    name: string
    url: string
  }
  
  export type Damage2 ={
    damage_type: DamageType2
    damage_dice: string
  }
  
  export type DamageType2 ={
    index: string
    name: string
    url: string
  }
  