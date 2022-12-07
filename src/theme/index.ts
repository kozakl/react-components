export const themes:{
    [key:string]:any
} = {};

export function useTheme(name:string) {
    return themes[name];
}
