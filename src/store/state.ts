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
    {
        id: 5,
        question: "Хуки из библиотеки react-redux - это...",
        answer: [
            { variant: 'useState, useMemo', isCorrect: false, number: 0 },
            { variant: 'useCallback, useRef', isCorrect: false, number: 0 },
            { variant: 'useSelector, useDispatch', isCorrect: true, number: 1 }
        ]
    },
    {
        id: 6,
        question: "Методы store...",
        answer: [
            { variant: 'getState, subscribe, dispatch', isCorrect: true, number: 1 },
            { variant: 'reduser, state', isCorrect: false, number: 0 },
            { variant: 'then, catch, finally', isCorrect: false, number: 0 }
        ]
    },
    {
        id: 7,
        question: "Чтобы обновить данные нужно отправить запрос типа...",
        answer: [
            { variant: 'get', isCorrect: false, number: 0 },
            { variant: 'post', isCorrect: false, number: 0 },
            { variant: 'put', isCorrect: true, number: 1 }
        ]
    },
];
