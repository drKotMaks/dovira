# Використовуємо офіційний Node.js образ
FROM node:18-alpine

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо весь проект у контейнер
COPY . .

# Встановлюємо залежності
RUN npm install --only=production

# Створюємо білд Next.js додатка
RUN npm run build

# Відкриваємо порт для додатку
EXPOSE 3000

# Запускаємо Next.js додаток
CMD ["npm", "start"]

