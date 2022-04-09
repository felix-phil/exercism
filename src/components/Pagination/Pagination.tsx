import React, { FC, useEffect } from 'react';
import Button from '../Button';
import Container from '../Container';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import PaginationButton from './PaginationButton';
import { DOTS, usePagination } from '../../hooks/use-pagination';

interface PaginationProps {
  currentPage: number;
  totalPageCount: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPageCount,
  siblingCount = 1,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  });
  useEffect(() => {
    if (currentPage > totalPageCount) {
      onPageChange(1);
    }
  }, [currentPage, totalPageCount, onPageChange]);

  const onNextHandler = () => {
    if (currentPage === totalPageCount) {
      return;
    }
    onPageChange(currentPage + 1);
  };
  const onPreviousHandler = () => {
    if (currentPage === 1) {
      return;
    }
    onPageChange(currentPage - 1);
  };
  if (
    currentPage === 0 ||
    !paginationRange?.length ||
    paginationRange?.length < 2
  ) {
    return null;
  }
  return (
    <Container className="flex flex-row gap-x-1 justify-center w-full py-2 px-3 bg-white border-t-2 border-exercism-border dark:bg-gray-700">
      <Button
        disabled={currentPage === 1}
        className="mr-auto"
        left={<ArrowLeftIcon className="w-4 h-5 text-current" />}
        onClick={onPreviousHandler}
      >
        Previous
      </Button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationButton disabled key={index.toString()}>
              &#8230;
            </PaginationButton>
          );
        }
        return (
          <PaginationButton
            className={`${
              pageNumber === currentPage && 'bg-exercism-button-active'
            }`}
            onClick={() => onPageChange(pageNumber as number)}
            key={index.toString()}
          >
            {pageNumber}
          </PaginationButton>
        );
      })}
      <Button
        disabled={currentPage === totalPageCount}
        className="ml-auto"
        right={<ArrowRightIcon className="w-4 h-5 text-current" />}
        onClick={onNextHandler}
      >
        Next
      </Button>
    </Container>
  );
};

export default Pagination;
