package rs.ac.singidunum.musicstore_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.musicstore_backend.entity.Orders;
import rs.ac.singidunum.musicstore_backend.entity.Users;
import rs.ac.singidunum.musicstore_backend.model.OrdersModel;
import rs.ac.singidunum.musicstore_backend.repository.IOrdersRepository;
import rs.ac.singidunum.musicstore_backend.repository.IUsersRepository;

import java.util.List;

@Service
public class OrdersService implements IOrdersService {

    @Autowired
    private IOrdersRepository ordersRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Autowired
    private IUsersRepository usersRepository;

    @Override
    public List<Orders> findAllByUsername(String username){
        return ordersRepository.findAllByUsername(username);
    }

    @Override
    public Orders insert(OrdersModel model){
        Users user = usersRepository.findByUsername(model.getUsername());

        model.setAddress(user.getAddress());
        model.setCity(user.getCity());

        return ordersRepository.insert(autoMapperService.map(model, Orders.class));
    }

    @Override
    public void deleteById(String id){
        this.ordersRepository.deleteById(id);
    }
}
