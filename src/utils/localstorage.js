export const getItem = name => {
    return localStorage.getItem(name);
} 

export const setItem = (name, value) => {
    return localStorage.setItem(name, value);
} 