# Dockerfile for dovira project

# Використовуємо офіційний Node.js образ
FROM node:18-alpine

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо package.json і package-lock.json для встановлення залежностей
COPY package.json package-lock.json ./

# Встановлюємо залежності
RUN npm ci --only=production

# Копіюємо весь проект у контейнер
COPY . .

# Створюємо білд Next.js додатка
RUN npm run build

# Відкриваємо порт для додатку
EXPOSE 3000

# Запускаємо Next.js додаток
CMD ["npm", "start"]
