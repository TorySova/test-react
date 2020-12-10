export type initStateType = {
    id: number
    question: string;
    answer: answerType
}[]

export type answerType = {
    variant: string;
    isCorrect: boolean;
    number: number
}[]

export const initState: initStateType = [
    {
        id: 1,
        question: "React - это...",
        answer: [
            { variant: 'Библиотека', isCorrect: true, number: 1 },
            { variant: 'Фреймворк', isCorrect: false, number: 0 },
            { variant: 'Язык программирования', isCorrect: false, number: 0 }
        ]
    },
    {
        id: 2,
        question: "Redux - это библиотека для...",
        answer: [
            { variant: 'Визуальных эффектов', isCorrect: false, number: 0 },
            { variant: 'Отрисовки UI', isCorrect: false, number: 0 },
            { variant: 'Управления стейтом', isCorrect: true, number: 1 }
        ]
    },
    {
        id: 3,
        question: "Action - это...",
        answer: [
            { variant: 'Объект у которого как минимум есть "type"', isCorrect: true, number: 1 },
            { variant: 'Функция, которая принимает dispatch и делает внутри асинхрон', isCorrect: false, number: 0 },
            { variant: 'Компонент высшего порядка', isCorrect: false, number: 0 }
        ]
    },
    {
        id: 4,
        question: "Reducer -это...",
        answer: [
            { variant: 'библиотека для управления стейтом', isCorrect: false, number: 0 },
            { variant: 'Чистая функция, которая принимает state и action и возвращает измененный state', isCorrect: true, number: 1 },
            { variant: 'хук, для работы с асинхроном', isCorrect: false, number: 0 }
        ]
    },
];
