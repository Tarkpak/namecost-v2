import { atom } from 'jotai'

export const domainAtom = atom('')
export const domainListAtom = atom([])
export const typeRegAtom = atom('')

export const searchAtom = atom({
  searchData: {},
  isLoading: false,
  isError: false,
  errorMessage: '',
  searchResult: null,
});
