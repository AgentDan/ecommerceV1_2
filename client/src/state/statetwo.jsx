import {v1} from "uuid"

export const Statetwo =
    [
        {
            id: v1(),
            check: false,
            components: [
                {id: v1(), name: "Vendor code LC01", check: true, elems:["lightConcrete1elem1", "lightConcrete1elem2", "lightConcrete1elem3"]},
                {id: v1(), name: "Vendor code LC02", check: false, elems:["lightConcrete2elem1","lightConcrete2elem2","lightConcrete2elem3"]},
                {id: v1(), name: "Vendor code LC03", check: false, elems:["lightConcrete3elem1", "lightConcrete3elem2","lightConcrete3elem3"]},
                {id: v1(), name: "Vendor code LC04", check: false, elems:["lightConcrete4elem1", "lightConcrete4elem2"]},
            ]
        },
        {
            id: v1(),
            check: false,
            nameProject: "poligonFox",
            def: [
                {file: "poligonRhinoDefoult"},
            ],
            components: [
                {id: v1(), groupElements: 0, name: "FoxChrome", file: "poligonFoxChrome", check: true},
                {id: v1(), groupElements: 0, name: "FoxGold", file: "poligonFoxGold", check: false},
                {id: v1(), groupElements: 0, name: "FoxBlack", file: "poligonFoxBlack", check: false},
            ]
        },
        {
            id: v1(),
            check: false,
            nameProject: "poligonBear",
            def: [
                {file: "poligonRhinoDefoult"},
            ],
            components: [
                {id: v1(), groupElements: 0, name: "BearChrome", file: "poligonBearChrome", check: true},
                {id: v1(), groupElements: 0, name: "BearGold", file: "poligonBearGold", check: false},
                {id: v1(), groupElements: 0, name: "BearBlack", file: "poligonBearBlack", check: false},
            ]
        },
        {
            id: v1(),
            check: false,
            nameProject: "poligonHorse",
            def: [
                {file: "poligonRhinoDefoult"},
            ],
            components: [
                {id: v1(), groupElements: 0, name: "HorseChrome", file: "poligonHorseChrome", check: true},
                {id: v1(), groupElements: 0, name: "HorseGold", file: "poligonHorseGold", check: false},
                {id: v1(), groupElements: 0, name: "HorseBlack", file: "poligonHorseBlack", check: false},
            ]
        },
        {
            id: v1(),
            check: false,
            nameProject: "poligonBull",
            def: [
                {file: "poligonRhinoDefoult"},
            ],
            components: [
                {id: v1(), groupElements: 0, name: "BullChrome", file: "poligonBullChrome", check: true},
                {id: v1(), groupElements: 0, name: "BullGold", file: "poligonBullGold", check: false},
                {id: v1(), groupElements: 0, name: "BullBlack", file: "poligonBullBlack", check: false},
            ]
        },
    ]
