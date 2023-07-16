# import mysql.connector
# import aiomysql
# import os
# from dotenv import load_dotenv
# import asyncio

# load_dotenv()
# async def create_connection():
#     config = {
#         'user': os.getenv('DB_USER'),
#         'password': os.getenv('DB_PASSWORD'),
#         'host': os.getenv('DB_HOST'),
#         'db': os.getenv('DB_NAMEDB')
#     }

#     try:
#         connection = await aiomysql.connect(**config)
#         print("Conexión establecida a la base de datos.")  
#         return connection
        
#     except aiomysql.Error as error:
#         print(f"Error al conectar a la base de datos: {error}")
#         return None

# loop = asyncio.get_event_loop()
# loop.run_until_complete(create_connection())


# 
# async def cursor():
#     db_connection = await create_connection()
#     cursor = await db_connection.cursor()
#     return cursor

# db_connection = create_connection()
# cursor=db_connection.cursor()
# 