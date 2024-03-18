import { Button } from '@elements/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, handlePageChange }) => {
  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  return (
    <nav aria-label='Pagination'>
      <div className='mt-3 md:mt-6 flex flex-row items-center justify-center'>
        <Button onClick={handlePrevPage} disabled={page === 1}>
          <ChevronLeftIcon className='w-6 h-6' />
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button key={i} onClick={() => handlePageChange(i + 1)} disabled={page === i + 1}>
            {i + 1}
          </Button>
        ))}
        <Button onClick={handleNextPage} disabled={page === totalPages}>
          <ChevronRightIcon className='w-6 h-6' />
        </Button>
      </div>
    </nav>
  );
};

export default Pagination;
