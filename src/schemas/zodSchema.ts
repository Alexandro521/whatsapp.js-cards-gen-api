import { z } from 'zod';

export const userCardSchema = z.object({
    picture:  z.string({required_error: 'picture is required', invalid_type_error: 'picture must be a string',}).url({message: 'Invalid URL'}),
    kickname: z.string({required_error: 'kickname is required', invalid_type_error: 'kickname must be a string',}).min(1,{message: 'kickname must be at least 2 characters long'}),
    exp: z.number({required_error: 'exp is required', invalid_type_error: 'exp must be a number',}),
    lvl: z.number({required_error: 'lvl is required', invalid_type_error: 'lvl must be a number',}),
    rank: z.number({required_error: 'rank is required', invalid_type_error: 'rank must be a number',}),
    requiredXP: z.number({required_error: 'status is required', invalid_type_error: 'status must be a string',}).min(1,{message: 'status must be at least 1 characters long'}),
});

export const leaderTableSchema = z.object({
  header: z.object({
    title: z.string({required_error: 'title is required', invalid_type_error: 'title must be a string',}).min(1,{message: 'title must be at least 2 characters long'}),
    image: z.string({required_error: 'image is required', invalid_type_error: 'image must be a string',}).url({message: 'Invalid URL'}).url({message: 'Invalid URL'}),
    subtitle: z.string({required_error: 'subtitle is required', invalid_type_error: 'subtitle must be a string',}).min(1,{message: 'subtitle must be at least 2 characters long'}),
  }),
  body: z.array(
    z.object({
      avatar: z.string({required_error: 'avatar is required', invalid_type_error: 'avatar must be a string',}).url({message: 'Invalid URL'}),
      username: z.string({required_error: 'username is required', invalid_type_error: 'username must be a string',}).min(1,{message: 'username must be at least 2 characters long'}),
      displayName: z.string({required_error: 'displayName is required', invalid_type_error: 'displayName must be a string',}).min(1,{message: 'displayName must be at least 2 characters long'}),
      level: z.number({required_error: 'level is required', invalid_type_error: 'level must be a number',}),
      xp: z.number({required_error: 'xp is required', invalid_type_error: 'xp must be a number',}),
      rank: z.number({required_error: 'rank is required', invalid_type_error: 'rank must be a number',}),
    })
  )
})
