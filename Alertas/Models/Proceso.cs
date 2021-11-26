namespace Alertas.Models
{
    public class Proceso
    {
        public int IdProyecto { get; set; }
        public string NombreProceso { get; set; }
        public List<Tarea> Tareas { get; set; }
    }
}
