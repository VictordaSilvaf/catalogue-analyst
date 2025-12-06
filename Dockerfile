# Etapa de build — agora instala TUDO (incluindo devDependencies)
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./

RUN npm ci --frozen-lockfile

# Copia o resto e faz build
COPY . .
RUN npm run build

# Etapa 2: Imagem final leve com nginx
FROM nginx:alpine AS runner

# Remove config padrão do nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copia o build do Vite/React
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia config otimizada do nginx (opcional mas recomendada)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]