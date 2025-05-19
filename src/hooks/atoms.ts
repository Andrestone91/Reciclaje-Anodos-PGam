import { atom, selector } from "recoil";
const url = "https://jc-muebles-bff.vercel.app";
const urlLocal = "http://localhost:3000";

export const itemState = atom({
    key: "item",
    default: "",
})
export const linkState = atom({
    key: "link",
    default: {
        Nombre: ""
    },
})

export const fotoState = atom({
    key: "default",
    default: [{ id: "", url: "" }]
})
export const itemsState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: async ({ get }) => {
        get(itemState)
        const res = await fetch(urlLocal + "/api/products")
        const data = await res.json()
        return data;
    },
});