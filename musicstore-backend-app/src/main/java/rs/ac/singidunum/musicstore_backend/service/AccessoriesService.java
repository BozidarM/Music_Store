package rs.ac.singidunum.musicstore_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.musicstore_backend.entity.Accessories;
import rs.ac.singidunum.musicstore_backend.model.AccessoriesModel;
import rs.ac.singidunum.musicstore_backend.repository.IAccessoriesRepository;

import java.util.List;

@Service
public class AccessoriesService implements IAccessoriesService{

    @Autowired
    private IAccessoriesRepository accessoriesRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Accessories> findAll(){
        return accessoriesRepository.findAll();
    }

    @Override
    public Accessories findAccessoriesById(String id){
        return accessoriesRepository.findAccessoriesById(id);
    }

    @Override
    public List<Accessories> findAllByName(String name){
        return accessoriesRepository.findAllByName(name);
    }

    @Override
    public Accessories insert(AccessoriesModel model){ return accessoriesRepository.insert(autoMapperService.map(model, Accessories.class)); }

    @Override
    public void deleteById(String id){ this.accessoriesRepository.deleteById(id); }

    @Override
    public Accessories update(AccessoriesModel model){

        Accessories accessory = accessoriesRepository.findAccessoriesById(model.getId());

        accessory.setAccessory(model.getAccessory());
        accessory.setName(model.getName());
        accessory.setManufacturer(model.getManufacturer());
        accessory.setPrice(model.getPrice());
        accessory.setDescription(model.getDescription());
        accessory.setImage(model.getImage());

        this.accessoriesRepository.save(accessory);

        return autoMapperService.map(model, Accessories.class);
    }

    @Override
    public List<Accessories> findAllBySeller_username(String seller_username){ return accessoriesRepository.findAllBySeller_username(seller_username); }
}
