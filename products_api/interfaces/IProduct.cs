using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace products_api.interfaces
{
    public interface IProduct
    {
         Task<IEnumerable<string>> GetItemsAsync();
    }
}