import { fotoState, itemsState, linkState } from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export function useItem() {
    return useRecoilValue(itemsState)
}
export function useMesas() {
    const mesas = useRecoilValue(itemsState).results.filter(function (item) { return item.Tipo == "mesas" })
    return mesas
}
export function useSillas() {
    const sillas = useRecoilValue(itemsState).results.filter(function (item) { return item.Tipo == "sillas" })
    return sillas
}
export function useLink() {
    return useRecoilState(linkState)
}
export function useFotos() {
    return useRecoilState(fotoState)
}
