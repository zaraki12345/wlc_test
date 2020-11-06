FROM wordpress:5-php7.3

COPY ./application/wp-content ./wp-content
RUN chown -R www-data:www-data ./wp-content
