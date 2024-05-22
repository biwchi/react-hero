import {useCallback, useRef} from 'react';

export const useNodeRef = () => {
  const node = useRef<HTMLElement | null>(null);

  const setNodeRef = useCallback(
    (element: HTMLElement | null) => (node.current = element),
    []
  );

  return [node, setNodeRef] as const;
};
