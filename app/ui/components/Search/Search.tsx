import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Props {
  inputValue: string;
  placeholder?: string;
  setInputValue: (text: string) => void;
}

export default function Search({ inputValue, setInputValue, placeholder }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        type='search'
        className='w-full px-3 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none peer block border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder || 'Search'}
      />
      {inputValue && isFocused && (
        <button type='button' onClick={handleClearInput} className='right-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
          <XCircleIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-90 cursor-pointer' />
        </button>
      )}
      <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
      <button type='submit' className='sr-only'>
        Search
      </button>
    </div>
  );
}
