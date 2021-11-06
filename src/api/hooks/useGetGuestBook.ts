import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import Api from '../index';
import { guidebookList, guidebookListTest } from '../mock';

async function getGuestBooks() {
  const res = await Api.getGuestBooks();
  return res.data;
}

async function getGuestBooksWithPagination(url: string) {
  const res = await Api.getGuestBooksWithPagination(url);
  return res.data.data;
}

export function useGetGuestBook() {
  const { data, error, mutate } = useSWR<typeof guidebookList>(
    [`/attendance`],
    getGuestBooks,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
    mutate,
  };
}

//useSWRInfinite for articles
export function useGetGuestBookWithPagination({ _limit }: { _limit: number }) {
  const limit = _limit || 10;
  const getKey = (
    pageIndex: number,
    previousPageData: typeof guidebookListTest.data,
  ) => {
    if (previousPageData && previousPageData.length + 1 < limit) return null; // reached the end
    return `attendance/test?num=${pageIndex + 1}&offset=${limit}`;
  };
  const { data, size, setSize, error, mutate } = useSWRInfinite<any>(
    getKey,
    getGuestBooksWithPagination,
    {
      persistSize: true,
    },
  );

  const guideBooks = data ? ([] as any).concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && !!data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length + 1 < limit);

  return {
    guideBooks: guideBooks,
    error,
    isLoadingMore,
    loading: isLoadingInitialData || isLoadingMore,
    size,
    setSize,
    mutate,
    isReachingEnd,
  };
}
