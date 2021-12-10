using Alertas.Models;

namespace Alertas.Data
{
    public class AlertasDAO
    {
        private Alerta alerta;
        private List<Alerta> alertasList;
        private List<Proyecto> proyectosList;
        private List<Proceso> procesosList;
        public AlertasDAO()
        {
            alerta = new();
            alertasList = new();
            proyectosList = new();
        }

        public List<Alerta> GetAlerts()
        {

            alerta = new()
            {
                IdUsuario = 1,
                Proyectos = proyectosList
            };
            return alertasList;
        }
    }
}
