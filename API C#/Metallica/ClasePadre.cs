using System.ComponentModel.DataAnnotations;

namespace Metallica
{
    public abstract class ClasePadre
    {
        [Key]//atributos 
        public long Id { get; set; }//entero de 64 bits en bd bigint
    }
}
