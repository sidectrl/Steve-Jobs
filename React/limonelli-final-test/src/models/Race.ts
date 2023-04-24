export type Race = {
    index: string
    name: string
    speed: number
    ability_bonuses: AbilityBonuse[]
    age: string
    alignment: string
    size: string
    size_description: string
    starting_proficiencies: StartingProficiency[]
    languages: Language[]
    language_desc: string
    traits: Trait[]
    subraces: Subrace[]
    url: string
}

export type AbilityBonuse = {
    ability_score: AbilityScore
    bonus: number
}

export type AbilityScore = {
    index: string
    name: string
    url: string
}

export type StartingProficiency = {
    index: string
    name: string
    url: string
}

export type Language = {
    index: string
    name: string
    url: string
}

export type Trait = {
    index: string
    name: string
    url: string
}

export type Subrace = {
    index: string
    name: string
    url: string
}
