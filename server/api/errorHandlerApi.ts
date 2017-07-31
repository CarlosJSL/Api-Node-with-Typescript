import {Request, Response, RequestHandler, ErrorRequestHandler,NextFunctionr} from 'express';

export function ErrorHandlerApi(err, req, res, next){
    console.error(`API error handler foi executado: ${err}`);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro Interno do Servidor'
    })
}