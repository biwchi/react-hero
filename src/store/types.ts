import {MutableRefObject} from 'react';
import {UniqueId} from '../types';

export type InternalContextDescriptor = {
  targets: Map<UniqueId, Target>;
};

export type Targets = Map<UniqueId, Target>;

export type Target = {
  id: UniqueId;
  key: UniqueId;
  node: MutableRefObject<HTMLElement | null>;
};
