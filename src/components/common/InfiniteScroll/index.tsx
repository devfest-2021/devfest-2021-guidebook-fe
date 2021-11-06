import React, { ReactNode, useEffect } from 'react';
import { InView } from 'react-intersection-observer';

interface InfiniteScrollProps extends IntersectionObserverInit {
  onFetch?: () => void;
  hasMore?: boolean;
  loader?: ReactNode;
  children?: ReactNode;
  loading?: boolean;
}
export function InfiniteScroll({
  onFetch,
  rootMargin = '0px',
  threshold = 0.5,
  hasMore = false,
  loader,
  children,
  loading = false,
}: InfiniteScrollProps) {
  const handleViewChange = (inView: any) => {
    if (inView && !loading && onFetch) onFetch();
  };

  return (
    <>
      {children}
      {hasMore && (
        <InView
          onChange={handleViewChange}
          rootMargin={rootMargin}
          threshold={threshold}
        >
          {loader}
        </InView>
      )}
    </>
  );
}
