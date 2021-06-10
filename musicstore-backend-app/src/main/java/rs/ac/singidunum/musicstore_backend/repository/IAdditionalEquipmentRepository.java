package rs.ac.singidunum.musicstore_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.musicstore_backend.entity.AdditionalEquipment;

import java.util.List;

public interface IAdditionalEquipmentRepository extends MongoRepository<AdditionalEquipment, String> {
    AdditionalEquipment findAdditionalEquipmentById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<AdditionalEquipment> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<AdditionalEquipment> findAllByName(String name);
}
