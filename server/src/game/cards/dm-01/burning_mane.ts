import { creature, civilization, family } from "../types"
import { before, after } from "../../match"

const burningMane: creature = {

    name: "Burning Mane",
    civilization: civilization.NATURE,
    family: family.BEAST_FOLK,
    manaCost: 2,
    manaRequirement: [civilization.NATURE],

    setup() {
        
        before("turn-start", (event, next) => {
            // runs before turn start
        })

        after("turn-start", (event, next) => {
            // runs after turn start
        })

    }

}

export default burningMane