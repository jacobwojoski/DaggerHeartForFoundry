import { DH } from "./scripts/config/config.js";

export default class DHplayerCharacterSheet extends ActorSheet {
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            template: DH.template[0],
            classes: ["dh", "sheet", "namedCharacter"]
        })
    }

    getData(){
        const data = super.getData();
        data.config = DH;
    }
}