export const themes:{
    [key:string]:any
} = {};

export function useTheme(name:string) {
    if (!themes[name]) {
        console.error(`Theme '${name}' required but not imported to themes`);
        return {};
    }
    return themes[name];
}
