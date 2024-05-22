import {useMemo} from 'react';
import {UniqueId} from '../types';

let key = 0;

export const useKey = (id: UniqueId | null) => {
  return useMemo(() => {
    if (id == null) {
      return null;
    }

    key++;
    return key;
  }, [id]);
};
