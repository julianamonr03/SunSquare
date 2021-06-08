#!/usr/bin/python3
""" Configuration file """


class Config:
    SECRET_KEY = "secret123345key"


class DevelopmentConfig(Config):
    DEBUG = True
    MYSQL_HOST='localhost'
    MYSQL_USER='root'
    MYSQL_PASSWORD='sunsquare'
    MYSQL_DB='sunsquare' #Nombre de la base de datos


config = {"development": DevelopmentConfig, "default": DevelopmentConfig}
