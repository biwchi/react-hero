import {Dispatch, SetStateAction, useState} from 'react';

class MapState<K, V> extends Map<K, V> {
  private dispatch: Dispatch<SetStateAction<Map<K, V>>>;

  constructor(
    initialState: Map<K, V>,
    dispatch: Dispatch<SetStateAction<Map<K, V>>>
  ) {
    super(initialState);
    this.dispatch = dispatch;
  }

  public get(key: K): V {
    return this.get(key);
  }

  public set(key: K, value: V) {
    this.dispatch((prev) => {
      return prev.set(key, value);
    });

    return this;
  }

  public delete(key: K): boolean {
    this.dispatch((prev) => {
      prev.delete(key);

      return new Map(prev);
    });

    return super.delete(key);
  }
}

export const useMapState = <K, V>(initialState: Map<K, V>) => {
  const [value, setValue] = useState(initialState);
  const map = new MapState(value, setValue);
  return map;
};
