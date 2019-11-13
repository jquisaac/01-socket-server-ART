import { Socket } from 'socket.io';
import socketIO from 'socket.io';;
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

export const usuariosConectados = new UsuariosLista();


/**
 * Agrego el nuevo usuario a la lista de usuarios conectados
 * @param cliente 
 */
export const conectarCliente = ( cliente: Socket ) =>{

    const usuario = new Usuario( cliente.id);
    usuariosConectados.agregar( usuario );    

}

/**
 * Escucha evento desconectar
 * @param cliente 
 */
export const desconectar = ( cliente: Socket, io: socketIO.Server) => {
    
    cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
        usuariosConectados.borrarUsuario( cliente.id ); 
        io.emit('usuarios-activos', usuariosConectados.getLista());     
    });    
}

/**
 * Escuchar mensaje
 * @param cliente
 * @param io 
 */
export const mensaje = ( cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', ( payload: { de:string, cuerpo: string } ) => {
        console.log('Mensaje recibido', payload); 
        
        /**
         * Emito a todos los usuarios conectados
         */
        io.emit('mensaje-nuevo', payload );

    });
}

/**
 * Configurar usuario
 * @param cliente
 * @param io 
 */
export const configurarUsuario = ( cliente: Socket,  io: socketIO.Server ) => {
    cliente.on('configurar-usuario', ( payload: { nombre: string } , callback: Function ) => {

        usuariosConectados.actualizarNombre( cliente.id , payload.nombre);

        io.emit('usuarios-activos', usuariosConectados.getLista());     

        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        })
    });
}

/**
 * Obtiene lista de usuarios conectados y emite unicamente a la persona que se esta conectando
 * @param cliente 
 * @param io 
 */
export const obtenerUsuarios = ( cliente: Socket,  io: socketIO.Server ) => {
    cliente.on('obtener-usuarios',() => {        
        io.to( cliente.id ).emit('usuarios-activos', usuariosConectados.getLista());             
    });
}