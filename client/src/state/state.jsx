import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "david",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "kinkiGame",
                def: [
                    {file: "kinkiTypeOneDefoult1"},
                    {file: "kinkiTypeOneDefoult2"},
                    {file: "kinkiTypeOneDefoult3"},
                    {file: "kinkiTypeOneDefoult4"},
                    {file: "kinkiTypeOneDefoult5"},
                    {file: "kinkiTypeOneDefoult6"},
                    {file: "kinkiTypeOneDefoult7"},
                    {file: "kinkiTypeOneDefoult8"},
                    {file: "kinkiTypeOneDefoult9"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                    {id: v1(), groupElements: 1, name: "balka", file: "balka", check: false},
                    {id: v1(), groupElements: 1, name: "balkaFalse", file: "balkaFalse", check: true},
                    {id: v1(), groupElements: 2, name: "bad", file: "bad", check: false},
                    {id: v1(), groupElements: 2, name: "badFalse", file: "badFalse", check: true},
                ]
            },
        ]
    }
]