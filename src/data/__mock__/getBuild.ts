import { Mock } from '../../mock';
import * as module from '../getBuild';

const { getBuild } = Mock.module(module, { getBuild: () => Mock.get()?.build });

export { getBuild };
