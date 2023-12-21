import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type toggleType = { name: string, statusType: string }
export const toggleBtnList: toggleType[] = [
    {name: 'Все', statusType: 'all'},
    {name: 'В ожидание', statusType: 'pending'},
    {name: 'В работе', statusType: 'processing'},
    {name: 'Выполнено', statusType: 'done'}]
export type CreationType = {
    text: string,
    status: StatusType,
    description: string
}
export type StatusType = 'pending' | 'processing' | 'done'
export type todoListType = {
    id: number,
    text: string,
    status: StatusType,
    description: string
}
type todoStateType = {
    todos: todoListType[],
    loading: boolean
}
const initialState: todoStateType = {
    todos: [
        {
            id: 1,
            text: 'Создать макет приложения для тренировок',
            status: 'pending',
            description: `1. Провести анализ конкурентов и лучших практик в области дизайна приложений для тренировок.
        2. Составить список ключевых экранов и их функционала для начального макета.`
        },
        {
            id: 2,
            text: 'Добавить функцию регистрации пользователей',
            status: 'processing',
            description: `1. Разработать UI формы регистрации с полями для основных данных пользователя.
        2. Настроить валидацию вводимых данных на стороне клиента для предотвращения ошибок.`
        },
        {
            id: 3,
            text: 'Разработать интерфейс для выбора тренировок',
            status: 'done',
            description: `1. Изучить потребности пользователей и определить основные функции экрана выбора тренировок.
        2. Создать пользовательские сценарии для разных категорий тренировок и их фильтрацию.`
        },
        {
            id: 4,
            text: 'Создать систему отслеживания прогресса',
            status: 'pending',
            description: `1. Определить основные метрики и показатели для отслеживания прогресса пользователей.`
        },
        {
            id: 5,
            text: 'Добавить уведомления о тренировках',
            status: 'processing',
            description: `1. Определить типы уведомлений и их формат для различных событий и тренировок.`
        },
        {
            id: 6,
            text: 'Интегрировать платежную систему',
            status: 'done',
            description: `1. Изучить и выбрать наиболее подходящий API для интеграции платежных функций в приложение.`
        },
        {
            id: 7,
            text: 'Создать страницу профиля пользователя',
            status: 'processing',
            description: `1. Определить функционал страницы профиля и необходимые данные для отображения.`
        },
        {
            id: 8,
            text: 'Оптимизировать приложение для мобильных устройств',
            status: 'done',
            description: `1. Проанализировать текущую производительность приложения на мобильных устройствах.
        2. Оптимизировать код и ресурсы для улучшения скорости работы и уменьшения потребления ресурсов`
        },
        {
            id: 9,
            text: 'Добавить функцию подбора индивидуальных тренировок',
            status: 'pending',
            description: `1. Провести исследование предпочтений пользователей при выборе индивидуальных тренировок.
        2. Разработать алгоритм подбора тренировок с учетом предпочтений и целей пользователя.`
        }, {
            id: 10,
            text: 'Разработать систему отзывов и рейтинга тренировок',
            status: 'processing',
            description: `1. Создать интерфейс для написания и просмотра отзывов пользователей о тренировках.
        2. Разработать систему оценки и рейтинга тренировок на основе отзывов.`
        },
        {
            id: 11,
            text: 'Интегрировать синхронизацию данных между устройствами',
            status: 'done',
            description: `1. Выбрать подходящий механизм для синхронизации данных на разных устройствах.
        2. Разработать протокол обмена данными и механизм синхронизации.`
        },
        {
            id: 12,
            text: 'Провести тестирование безопасности приложения',
            status: 'processing',
            description: `1. Провести анализ уязвимостей и потенциальных угроз безопасности.
        2. Создать план тестирования, включая тесты на проникновение и обнаружение уязвимостей.`
        }, {
            id: 13,
            text: 'Разработать функцию добавления друзей в приложении',
            status: 'pending',
            description: `1. Создать механизм поиска и добавления друзей через различные каналы связи.
        2. Разработать интерфейс для управления списком друзей и отправки запросов на добавление.`
        },
        {
            id: 14,
            text: 'Создать интерактивные видеоуроки по упражнениям',
            status: 'processing',
            description: `1. Разработать сценарии видеоуроков для разных уровней сложности упражнений.
        2. Подготовить материалы и ресурсы для создания интерактивных видеоуроков.`
        },
        {
            id: 15,
            text: 'Интегрировать функцию планирования тренировок',
            status: 'done',
            description: `1. Разработать интерфейс для создания и управления планами тренировок.
        2. Создать систему учета и хранения персональных планов тренировок для каждого пользователя.`
        }
    ],
    loading: false
}

const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            createNewTodo: (state, action: PayloadAction<{ text: string, status: StatusType, description: string }>) => {
                if (action.payload.text.length < 30 && action.payload.text.length > 0) {
                    state.todos.unshift({id: Date.now(), text: action.payload.text, status: action.payload.status, description: action.payload.description})
                }
            },
            changeTodoStatus(state, action: PayloadAction<{ id: number, status: StatusType }>) {
                const todo = state.todos.find((todo) => todo.id === action.payload.id)
                if (todo) {
                    todo.status = action.payload.status
                }
            },
            deleteTodo: (state, action: PayloadAction<number>) => {
                state.todos = state.todos.filter(todo => todo.id != action.payload)
            }
        }
    }
)
export const {
    createNewTodo,
    changeTodoStatus,
    deleteTodo
} = todoSlice.actions

export default todoSlice.reducer