package rs.ac.singidunum.musicstore_backend.service;

import rs.ac.singidunum.musicstore_backend.entity.AdditionalEquipment;
import rs.ac.singidunum.musicstore_backend.model.AdditionalEquipmentModel;

import java.util.List;

public interface IAdditionalEquipmentService {
    List<AdditionalEquipment> findAll();
    AdditionalEquipment findAdditionalEquipmentById(String id);
    List<AdditionalEquipment> findAllByName(String name);
    AdditionalEquipment insert(AdditionalEquipmentModel model);
    void deleteById(String id);
    List<AdditionalEquipment> findAllBySeller_username(String seller_username);
    AdditionalEquipment update(AdditionalEquipmentModel model);
}
