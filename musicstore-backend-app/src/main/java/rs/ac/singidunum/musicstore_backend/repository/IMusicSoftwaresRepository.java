package rs.ac.singidunum.musicstore_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import rs.ac.singidunum.musicstore_backend.entity.MusicSoftwares;

import java.util.List;

public interface IMusicSoftwaresRepository extends MongoRepository<MusicSoftwares, String> {
    MusicSoftwares findMusicSoftwaresById(String id);
    @Query(value = "{'seller_username': {$regex : ?0, $options: 'i'}}")
    List<MusicSoftwares> findAllBySeller_username(String seller_username);
    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<MusicSoftwares> findAllByName(String name);
}
