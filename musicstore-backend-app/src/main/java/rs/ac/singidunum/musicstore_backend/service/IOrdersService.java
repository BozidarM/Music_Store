package rs.ac.singidunum.musicstore_backend.service;

import rs.ac.singidunum.musicstore_backend.entity.Orders;
import rs.ac.singidunum.musicstore_backend.model.OrdersModel;

import java.util.List;

public interface IOrdersService {
    List<Orders> findAllByUsername(String username);
    void deleteById(String id);
    Orders insert(OrdersModel mode);
}
