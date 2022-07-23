import {ObjectId, WithId} from 'mongodb'

export type PhotoDBType = WithId<{
    userId: ObjectId
    userName: string
    imageSrc: string
    addedAt: Date
}>
export type UserDBType = WithId<{
    userName: string
    description: string
    addedAt: Date
}>

export type ProductDBType = WithId<{
    id: number;
    title: string
    addedAt: Date
}>

export type ProductType = Omit<ProductDBType,"_id">