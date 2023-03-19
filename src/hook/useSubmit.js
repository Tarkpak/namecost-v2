import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { searchAtom } from '@/state'
import http from '@/utils/axios'

export function useSubmit() {
  const [searchState, setSearchState] = useAtom(searchAtom)

  const onSubmit = useCallback((url, data) => {

    setSearchState({
      ...searchState,
      isLoading: true,
    })
    http
      .get(url, { params: data })
      .then((data) => {
        setSearchState({
          ...searchState,
          isLoading: false,
          searchResult: data,
        })
      })
      .catch((error) => {
        setSearchState({
          ...searchState,
          isLoading: false,
          isError: true,
          errorMessage: error.message,
        })
      })
  }, [searchState, setSearchState])

  return {onSubmit, searchState, setSearchState}
}
