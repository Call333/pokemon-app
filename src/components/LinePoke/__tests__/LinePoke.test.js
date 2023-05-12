
import { render } from '@testing-library/react-native';
import  LinePoke  from '../LinePoke';

describe('LinePoke', () => {
    test('o componente renderizou', () => {
        expect(render(<LinePoke />))
    })
})
