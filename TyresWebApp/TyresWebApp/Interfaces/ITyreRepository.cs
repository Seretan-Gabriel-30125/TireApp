using TyresWebApp.Models;

namespace TyresWebApp.Interfaces
{
    public interface ITyreRepository
    {
  
        bool TyreExists(int id);
        bool CreateTyre(TyreModels tyre);

        bool Save();
    }
}
