import type {UniqueId} from '../types';
import type {Target} from '../store/types';

import {useContext} from 'react';
import {useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect';
import {useNodeRef} from './utilities/useNodeRef';
import {InternalContext} from '../store/context';
import {simpleUUID} from '../utilities';

type Args = {
  id: UniqueId;
};

export const useTarget = ({id}: Args) => {
  const key = simpleUUID();
  const {targets} = useContext(InternalContext);
  const [node, setNodeRef] = useNodeRef();

  useIsomorphicLayoutEffect(() => {
    const target: Target = {
      id,
      key,
      node,
    };

    targets.set(id, target);

    return () => {
      const target = targets.get(id);

      if (target && target.key === key) {
        targets.delete(id);
      }
    };
  }, [id]);

  return {node, setNodeRef};
};
