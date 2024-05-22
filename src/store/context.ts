import {createContext} from 'react';
import {InternalContextDescriptor} from './types';

export const defaultInternalContext: InternalContextDescriptor = {
  targets: new Map(),
};

export const InternalContext = createContext(defaultInternalContext);
