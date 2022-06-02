using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Metallica
{
    
    public class MiPrimerClase:ClasePadre//claseeees se tiene q instanciar
    {
        #region Constructor

        public MiPrimerClase()//constructoooor
        {
            Sexo = 'M';
        } 
        #endregion

        #region Propiedades o campos(bd) o variables
        
        public string Nombre { get; set; }//cadenas en bd varchar(100 )
        public char Sexo { get; set; }//un caracter alfanumerico y se denota con una sola comilla ''
        public int Edad { get; set; }//entero de 32 bits de 
        public DateTime Cumpleaños { get; set; }//fechas
        public bool Activo { get; set; }//booleano en bd tipo bit


        #endregion

        #region Metodos

        public void miMetodo()
        {
            Nombre.Concat("lo que queira");
        } 
        #endregion

    }
}
