/*
 * This file contains type definitions for the data.
 * It describes the shape of the data, and what data type each property should accept.
 */
export type Verb = {
  id: string;
  infinitive: string;
  presentParticiple: string;
  past: string;
  pastParticiple: string;
};

export type Pagination = {
  start: number;
  end: number;
};

export type DictionaryData = {
  meanings: {
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example: string;
    }[];
  }[];
};
