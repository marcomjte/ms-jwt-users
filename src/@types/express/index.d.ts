export {}
declare global {
  namespace Express{
    export interface Request {
      user: {
        email: string,
        id: number
      },
      permissions: string[]
      validParams: any,
      validBody: any,
      validQuery: any
    }
    
  }
}