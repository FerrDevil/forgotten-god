export interface IToastMessageWrapper{
    $timeout: number,
    $isError: boolean
}


export type Message = {
    message: string,
    isError: boolean,
    timeout: number
}