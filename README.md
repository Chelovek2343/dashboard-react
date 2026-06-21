# FinDash — Банковский Dashboard на React

Многостраничное SPA приложение в стиле интернет-банкинга, построенное на React + Vite.

## 🚀 Live Demo
[chelovek2343.github.io/dashboard-react](https://chelovek2343.github.io/dashboard-react/)

## 🛠 Стек
- **React 18** — компонентный подход, useState, useEffect
- **React Router v6** — клиентский роутинг между страницами (HashRouter)
- **Vite** — сборщик проекта
- **CSS Modules** — стили разделены по компонентам
- **ExchangeRate API** — живые курсы валют через fetch/async/await
- **localStorage** — сохранение данных профиля между сессиями
- **GitHub Actions** — автоматический деплой на GitHub Pages (CI/CD)

## 📱 Страницы
- **Dashboard** — карточки баланса, транзакции с фильтрацией, курсы валют
- **Транзакции** — полная история с фильтрацией по категориям
- **Карты** — банковские карты и счета
- **Аналитика** — график доходов и расходов по месяцам
- **Настройки** — редактирование профиля с сохранением в localStorage

## ⚙️ Фичи
- Живые курсы валют с автообновлением каждые 30 секунд
- Skeleton loader пока данные загружаются
- Фильтрация транзакций по категории без перезагрузки страницы
- Данные профиля сохраняются в localStorage
- Адаптивная верстка + бургер-меню для мобильных
- CI/CD через GitHub Actions — каждый push автоматически деплоится

## 🚦 Запуск локально
```bash
git clone https://github.com/Chelovek2343/dashboard-react.git
cd dashboard-react
npm install
npm run dev
```

## 📁 Структура проекта
```
src/
├── components/    # Переиспользуемые компоненты (Sidebar, Topbar и др.)
├── pages/         # Страницы приложения
├── styles/        # CSS файлы для каждого компонента
└── App.jsx        # Главный компонент с роутингом
```
