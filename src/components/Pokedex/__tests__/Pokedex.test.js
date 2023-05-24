
import { render } from '@testing-library/react-native';
import  Pokedex  from '../Pokedex';

describe('LinePoke', () => {
    test('teste para saber se o componente renderizou', () => {
        expect(render(<Pokedex />))
    })
})
