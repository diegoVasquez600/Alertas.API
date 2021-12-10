using Alertas.Models;

namespace Alertas.Data
{
    public class ProyectosDAO
    {
        private Proyecto proyecto;
        private List<Proceso> procesosList;
        private List<Proyecto> proyectosList;
        public ProyectosDAO()
        {
            proyecto = new();
            procesosList = new();
            proyectosList = new();
        }

        public List<Proyecto> GetProyectos(int IdAlerta)
        {
            proyecto = new()
            {
                IdProyecto = 1,
                IdAlerta = 1,
                Nombre = "Brinsa",
                Procesos = FillProcesos(proyecto.IdProyecto),
            };
            proyectosList.Add(proyecto);
            return proyectosList;
        }


        private List<Proceso> FillProcesos(int IdProyecto)
        {

            procesosList = procesosList.FindAll(pl => pl.IdProyecto == IdProyecto);
            return procesosList;
        }

    }
}
