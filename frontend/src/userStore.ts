import {create} from "zustand"

interface IUserState{
    accessToken:string;
    username:string;
    setUsername:(username:string) => void;
    setAccessToken:(accessToken:string ) => void;
}


export const useUser = create<IUserState>()((set)=> ({
    accessToken:"",
    username:"",
    setUsername:(username) => set({username}),
    setAccessToken:(accessToken) => set({accessToken})
}))




