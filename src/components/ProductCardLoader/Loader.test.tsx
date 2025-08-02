import { render } from "../../test/utils";
import { screen } from '@testing-library/react';
import Loader from './Loader';
import { describe, expect, it } from "vitest";


describe('Loader', () => {
    it('отображает скелетон загрузки', () => {
        render(<Loader />)
        expect(screen.getByTestId('loader-skeleton')).toBeInTheDocument()
    })

    it('отображение картинки загрузки', () => {
        render (<Loader />)
        expect(screen.getByTestId('loader-image')).toBeInTheDocument()
    })
})