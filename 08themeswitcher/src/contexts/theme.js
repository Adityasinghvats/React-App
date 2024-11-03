import { useContext, createContext } from "react";

export const Themecontext = createContext({
    themeMode: 'light',
    lightTheme: () => {},
    darkTheme: () => {}
})

export const Themeprovider = Themecontext.Provider

// hook to be able use all features of themecontext
export default function UseTheme(){
    return useContext(Themecontext)
}