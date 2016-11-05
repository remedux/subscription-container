import test from 'tape';
import { SubContainer } from '../src/Component';


test('SubContainer', (t) => {
  t.ok(SubContainer instanceof Function, 'should be function');
  t.end();
});
