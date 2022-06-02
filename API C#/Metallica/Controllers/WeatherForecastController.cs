using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Metallica.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly List<MiPrimerClase> miLista;


        public WeatherForecastController()
        {
            miLista = new List<MiPrimerClase>();
            var miInstancMiguel = new MiPrimerClase
            {
                Id = 3,
                Nombre = "Miguel",
                Activo=true,
                Sexo='M',
                Edad=2,
                Cumpleaños=DateTime.Now
            };            

            var miInstanciaDavid = new MiPrimerClase
            {
                Id = 1002,
                Nombre = "david",
                Sexo = 'F'
            };

            miLista.Add(miInstanciaDavid);
            miLista.Add(miInstancMiguel);
        }

        [HttpGet]
        [Route("GetById/{Id}")]
        public string TraerInformacionGet(long Id)
        {
            var model = miLista.Find(x => x.Id == Id);

            return JsonConvert.SerializeObject(model);
        }

        [HttpGet]
        [Route("traerTodaLaInfo")]
        public string TraerTodaaaaLaInformacionGet()
        {

            return JsonConvert.SerializeObject(miLista);
        }

        [HttpPost]
        public string ActualizarInformacionPost(MiPrimerClase model)
        {
            //voy a la persistencia de datos es decir a la bd y actualizo y devuelvo el nuevo model
            return JsonConvert.SerializeObject(model);
        }
    }
}