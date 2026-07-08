# Stage 1: Build
FROM nginx:alpine


# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*


# Copy website files
COPY frontend/ /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/


# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf



EXPOSE 80



# Health check
HEALTHCHECK --interval=30s \
CMD wget -qO- http://localhost || exit 1



CMD ["nginx","-g","daemon off;"]
