export interface UserState {
    isLoaded: boolean,
    error: string|null,
    token: string|null,
    isSuccess: boolean 
  }
  
export interface ActionType {
    type: string,
    payload?: string
}

export interface ProfileState {
    isLoaded: boolean,
    error: string|null,
    data: string|null,
}

export interface FollowState {
    isLoaded: boolean,
    error: string|null,
    data: string[]|null,
}
