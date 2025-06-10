// Демо-данные (в будущем можно брать с сервера или формировать динамически)
const demoData = {
    courses: [
        { id: 1, title: "Математика для 7 класса", progress: 60 },
        { id: 2, title: "Английский: Базовый уровень", progress: 35 }
    ],
    tasks: [
        { id: 1, title: "Домашнее задание по алгебре", status: "Новое" },
        { id: 2, title: "Тест по грамматике", status: "Выполнено" },
        { id: 3, title: "Чтение текста на английском", status: "Ожидает проверки" }
    ],
    stats: {
        totalCourses: 2,
        completedTasks: 1,
        totalTasks: 3,
        averageProgress: 47.5
    }
};

// Сохраняем демо-данные в localStorage при первом запуске
if (!localStorage.getItem('eduflowData')) {
    localStorage.setItem('eduflowData', JSON.stringify(demoData));
}