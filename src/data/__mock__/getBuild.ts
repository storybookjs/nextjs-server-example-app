import { mockFn } from '../../mock';
import { getBuild as getBuildOriginal } from '../getBuild';

export const getBuild = mockFn(getBuildOriginal, 'getBuild');
