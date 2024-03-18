export type VNAction = { id: number, type: "message" | "component", action: Message | React.ReactNode }
type Message = string