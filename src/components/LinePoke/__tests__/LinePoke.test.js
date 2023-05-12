
import { render } from '@testing-library/react-native';
import  LinePoke  from '../LinePoke';

describe('LinePoke', () => {
    test('teste para saber se o componente renderizou', () => {
        expect(render(<LinePoke />))
    })
})
