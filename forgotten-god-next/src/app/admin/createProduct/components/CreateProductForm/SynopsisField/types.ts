export interface ISynopsisField{
    synopsis: string
    setSynopsis: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}