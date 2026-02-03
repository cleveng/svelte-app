export declare namespace API {
  export interface Profile {
    id: number
    email: string
    username: string
    profile_url: string
    email_verified_at?: string | null | undefined
    status: string
  }

  type Theme = 'light' | 'dark' | 'system'
}
