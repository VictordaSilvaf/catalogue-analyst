# Stage 1: Build assets and Laravel dependencies
FROM php:8.4-fpm AS builder

# Install system packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    nodejs \
    npm

# Install PHP extensions needed for Laravel
RUN docker-php-ext-install pdo pdo_mysql

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy application code
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Copy env example for artisan to work on build
RUN cp .env.example .env

# Generate app key (Wayfinder precisa disso para rodar comandos artisan)
RUN php artisan key:generate

# Build frontend assets
RUN npm install && npm run build

# Stage 2: Nginx production image
FROM nginx:alpine

# Copy nginx config
COPY ./docker/production/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built public assets
COPY --from=builder /var/www/public /var/www/public

WORKDIR /var/www/public

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
