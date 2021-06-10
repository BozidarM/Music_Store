package rs.ac.singidunum.musicstore_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.musicstore_backend.entity.Accessories;

import java.util.List;

public interface IAccessoriesRepository extends MongoRepository<Accessories, String> {
    Accessories findAccessoriesById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<Accessories> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<Accessories> findAllByName(String name);
}
