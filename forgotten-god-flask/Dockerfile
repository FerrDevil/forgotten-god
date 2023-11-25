FROM python:3.10.13-alpine3.17

# Set working directory
WORKDIR /usr/flask


COPY ./ ./

# Install libs
RUN pip install -r requirements.txt


EXPOSE 5000

# Build app
RUN gunicorn main:app

# Expose the listening port



USER python

