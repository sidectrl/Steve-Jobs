export type SpellCasting = {
  level: number
  spellcasting_ability: SpellcastingAbility
  info: Info[]
}

export type SpellcastingAbility = {
  index: string
  name: string
  url: string
}

export type Info = {
  name: string
  desc: string[]
}
