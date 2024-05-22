import {useContext} from 'react';
import {InternalContext} from '../store/context';

type Args = {
  targetId: string;
};

export const useHero = ({targetId}: Args) => {
  const {targets} = useContext(InternalContext);
  const target = targets.get(targetId);

  return {target};
};
