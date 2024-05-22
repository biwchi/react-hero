import type {ReactNode} from 'react';

import {memo, useMemo} from 'react';
import {InternalContextDescriptor} from '../store/types';
import {InternalContext} from '../store/context';
import {useMapState} from '../hooks';
import {defaultTargets} from '../store/defaults';

type Props = {
  children: ReactNode;
};

export const HeroContext = memo(function HeroContext({children}: Props) {
  const targets = useMapState(defaultTargets);

  const context = useMemo<InternalContextDescriptor>(() => {
    return {
      targets,
    };
  }, []);

  return (
    <InternalContext.Provider value={context}>
      {children}
    </InternalContext.Provider>
  );
});
