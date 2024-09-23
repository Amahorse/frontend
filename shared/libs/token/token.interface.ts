export interface Token{
    jti: string
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
    scope: string
}