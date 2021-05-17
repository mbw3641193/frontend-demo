import http from './axios'

export interface ICat {
    name: string,
    gender: string,
    age: number,
    pets: IPet[]
}
export interface IPet {
    name: string,
    type: string
}

export function getCats(): Promise<ICat[]> {
    return http.get('/owners')
}