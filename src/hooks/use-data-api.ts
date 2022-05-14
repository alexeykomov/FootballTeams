import { useEffect, useReducer, useState } from 'react';

interface State<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
  errorMessage: string;
}

type Action<T> =
  | {
      type: 'FETCH_INIT';
    }
  | {
      type: 'FETCH_FAILURE';
      payload: string;
    }
  | {
      type: 'FETCH_SUCCESS';
      payload: T;
    };

function dataFetchReducer<T>(state: State<T>, action: Action<T>) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      throw new Error();
  }
}

export function useDataApi<T>(fetcher: () => Promise<T>, initialData: T): [State<T>, () => void] {
  const [fetchCount, setFetchCount] = useState(0);

  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
    errorMessage: '',
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        console.log('fetch: ');
        const result = await fetcher();

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result });
        }
      } catch (e) {
        const error = e as Error;
        if (!didCancel) {
          dispatch({
            type: 'FETCH_FAILURE',
            payload: 'message' in error ? error.message : 'Unknown error.',
          });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [fetchCount, fetcher]);

  return [
    state,
    () => {
      setFetchCount((c) => c + 1);
    },
  ];
}
