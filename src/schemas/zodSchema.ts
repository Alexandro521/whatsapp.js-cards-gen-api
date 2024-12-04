import { z } from 'zod';

export const userCardSchema = z.object({
    picture:  z.string({required_error: 'picture is required', invalid_type_error: 'picture must be a string',}).url({message: 'Invalid URL'}),
    kickname: z.string({required_error: 'kickname is required', invalid_type_error: 'kickname must be a string',}).min(1,{message: 'kickname must be at least 2 characters long'}),
    exp: z.number({required_error: 'exp is required', invalid_type_error: 'exp must be a number',}),
    lvl: z.number({required_error: 'lvl is required', invalid_type_error: 'lvl must be a number',}),
    rank: z.number({required_error: 'rank is required', invalid_type_error: 'rank must be a number',}),
    requiredXP: z.number({required_error: 'status is required', invalid_type_error: 'status must be a string',}).min(1,{message: 'status must be at least 1 characters long'}),
});