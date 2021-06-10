package rs.ac.singidunum.musicstore_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.musicstore_backend.entity.Instruments;

import java.util.List;

public interface IInstrumentsRepository extends MongoRepository<Instruments, String> {
    Instruments findInstrumentById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<Instruments> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<Instruments> findAllByName(String name);

}
