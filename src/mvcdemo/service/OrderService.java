package mvcdemo.service;

import mvcdemo.persistence.impl.OrderDAO;
import mvcdemo.persistence.impl.shoppingCartDAO;
import net.sf.json.JSONArray;

public class OrderService {
    private OrderDAO orderDAO;
    public JSONArray catchCustonGood(String name){
        orderDAO =new OrderDAO();
        return orderDAO.catchGoodInfo(name);
    }
}
