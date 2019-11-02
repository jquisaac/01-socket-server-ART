import { Usuario } from './usuario';
export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor(){}

    /**
     * Agregar un usuario
     * @param usuario 
     */
    public agregar ( usuario: Usuario ){
        this.lista.push ( usuario );
        console.log(this.lista );
        return usuario;
    }

    /**
     * Actualiza el nombre de un usuario en base a su id
     * @param id 
     * @param nombre 
     */
    public actualizarNombre( id: string, nombre: string){
        
        for( let usuario of this.lista) {
            if( usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }

        console.log(' === Actualizando usuario ===');
        console.log(this.lista);
    }

    /**
     * Obtener lista de usuarios
     */
     public getLista(){
         return this.lista;
     }

     /**
      * Obtener un usuario
      * @param id 
      */
     public getUsuario( id: string){
         return this.lista.find( usuario => usuario.id === id);
     }

    /**
     * Obtener usuarios de una sala
     * @param sala 
     */
    public getUsuarioEnSala( sala: string) {
        return this.lista.filter(  usuario => usuario.sala === sala);
    }

    /**
     * Borrar usuario
     * @param id 
     */
    public borrarUsuario( id: string){
        const temUsuario = this.getUsuario(id);

        this.lista = this.lista.filter(usuario => usuario.id !== id);
                
        return temUsuario;
    }
}
