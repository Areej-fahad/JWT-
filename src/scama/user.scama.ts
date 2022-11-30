import { z } from "zod";


export const userscama=z.object({
    body:z.object({
    id : z.string({required_error: "id is required"}),
    username: z.string({required_error: "username is required "}),
    passwoord: z.string({required_error: "password cant be null "}),
    email: z.string({required_error:"email is required"})
    })
    })


    export type userscamatype = z.infer<typeof userscama>['body'];



