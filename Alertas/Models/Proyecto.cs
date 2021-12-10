namespace Alertas.Models
{
    public class Proyecto
    {
        public int IdProyecto { get; set; }
        public int IdAlerta { get; set; }
        public string Nombre { get; set; }
        public List<Proceso> Procesos  { get; set; }
    }
}
