import { z } from "zod";

export const UserValidation = z.object({
    profile_phot: z.string().url().nonempty(),
    name: z.string().min(3, {message: 'The minimum number of characters is 3'}).max(30, {message: 'The maximum number of characters is 30'}),
    username: z.string().min(3, {message: 'The minimum number of characters is 3'}).max(20, {message: 'The maximum number of characters is 30'}),
})