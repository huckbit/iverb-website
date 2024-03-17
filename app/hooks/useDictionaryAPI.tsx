import { useState, useEffect } from 'react';

export default function useDictionaryAPI(word: string) {
  const [dictionaryData, setDictionaryData] = useState(null);
  const [dictionaryError, setDictionaryError] = useState(null);
  const [isLoadingDictionary, setIsLoadingDictionary] = useState(false);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setDictionaryData(jsonData);
        setIsLoadingDictionary(false);
      })
      .catch((err) => {
        console.log('There has been a problem with your fetch operation:', err);
        setDictionaryError(err);
        setIsLoadingDictionary(false);
      });
  }, [word]);

  return { dictionaryData, dictionaryError };
}
