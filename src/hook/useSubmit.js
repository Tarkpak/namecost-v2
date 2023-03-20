import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { searchAtom } from '@/state'
import http from '@/utils/axios'

export function useSubmit() {
  const [searchState, setSearchState] = useAtom(searchAtom)

  const onSubmit = useCallback((url, data, methods = 'get') => {

    setSearchState({
      ...searchState,
      isLoading: true,
    })
    http[methods](url, methods === 'get' ? { params: data } : data)
      .then((data) => {
        const resultKey = Array.isArray(data) ? 'searchResult' : 'searchData'
        setSearchState({
          ...searchState,
          isLoading: false,
          [resultKey]: data,
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

  return { onSubmit, searchState, setSearchState }
}
