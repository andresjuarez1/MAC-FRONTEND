import jwt
from fastapi import HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
import os
security = HTTPBearer()

def decode_token(token):
    try:
        payload = jwt.decode(token,os.getenv("SECRET"),algorithms=['HS256'])
        
        return{
            "user_email":payload["user_email"],
            "user_pwd":payload["user_pwd"], 
        } 
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail='Signature has expired')
    except jwt.InvalidTokenError as e:
        raise HTTPException(status_code=401, detail='Invalid token')

def auth_wrapper(auth: HTTPAuthorizationCredentials = Security(security)):
        return decode_token(auth.credentials)

