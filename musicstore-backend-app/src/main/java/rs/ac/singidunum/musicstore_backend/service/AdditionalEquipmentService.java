package rs.ac.singidunum.musicstore_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.musicstore_backend.entity.AdditionalEquipment;
import rs.ac.singidunum.musicstore_backend.model.AdditionalEquipmentModel;
import rs.ac.singidunum.musicstore_backend.repository.IAdditionalEquipmentRepository;

import java.util.List;

@Service
public class AdditionalEquipmentService implements IAdditionalEquipmentService{

    @Autowired
    private IAdditionalEquipmentRepository additionalEquipmentRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<AdditionalEquipment> findAll(){
        return additionalEquipmentRepository.findAll();
    }

    @Override
    public AdditionalEquipment findAdditionalEquipmentById(String id){
        return additionalEquipmentRepository.findAdditionalEquipmentById(id);
    }

    @Override
    public List<AdditionalEquipment> findAllByName(String name){
        return additionalEquipmentRepository.findAllByName(name);
    }

    @Override
    public AdditionalEquipment insert(AdditionalEquipmentModel model){ return additionalEquipmentRepository.insert(autoMapperService.map(model, AdditionalEquipment.class)); }

    @Override
    public void deleteById(String id){ this.additionalEquipmentRepository.deleteById(id); }

    @Override
    public AdditionalEquipment update(AdditionalEquipmentModel model){

        AdditionalEquipment additionalEquipment = additionalEquipmentRepository.findAdditionalEquipmentById(model.getId());

        additionalEquipment.setEquipment(model.getEquipment());
        additionalEquipment.setName(model.getName());
        additionalEquipment.setManufacturer(model.getManufacturer());
        additionalEquipment.setPrice(model.getPrice());
        additionalEquipment.setDescription(model.getDescription());
        additionalEquipment.setImage(model.getImage());

        this.additionalEquipmentRepository.save(additionalEquipment);

        return autoMapperService.map(model, AdditionalEquipment.class);
    }

    @Override
    public List<AdditionalEquipment> findAllBySeller_username(String seller_username){ return additionalEquipmentRepository.findAllBySeller_username(seller_username); }
}
