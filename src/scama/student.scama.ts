import { z } from "zod";


export const studentscama=z.object({
    body:z.object({
    id : z.string({required_error: "id is required"}),
    name: z.string({required_error: "username is required "}),
    majer: z.string({required_error: "password cant be null "}),
    age: z.string({required_error:"email is required"})
    })
    })
    export const classscama=z.object({
        body:z.object({
        id : z.string({required_error: "id is required"}),
        name: z.string({required_error: "username is required "})

        })
    })

    export const classscamaId=z.object({
        params:z.object({
        id : z.string({required_error: "id is required"}),

        })
    })


    export const teacherscama=z.object({
        body:z.object({
        id : z.string({required_error: "id is required"}),
        name: z.string({required_error: "username is required "})

        })

    })

    