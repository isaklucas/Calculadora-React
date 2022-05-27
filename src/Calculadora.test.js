import React from "react";
import { ReactDOM } from "react-dom";
import Calculadora from "./Calculadora";
import { render, fireEvent, getByTestId, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('calculadora', () => {

    it('deve limpar o campo de numeros', () =>{
        const {getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));
        expect(getByTestId('txtNumeros')).toHaveValue('0');

    })

    it('deve somar 2 + 3 e obter 5', () => {
        const {getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('5');
    })

    it('deve subtrair 9 - 5 e obter 2', () => {
        const {getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('9'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('4');
    })

    it('deve dividir 4 / 2 e obter 2', () => {
        const {getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('4'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('2');
    })

    it('deve multiplicar 2 * 8 e obter 2', () => {
        const {getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('*'));
        fireEvent.click(getByText('8'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('16');
    })

    it('deve somar 2.5 + 3 e obter 5.5', () => {
        const {getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('5.5');
    })
})