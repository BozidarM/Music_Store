package rs.ac.singidunum.musicstore_backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import rs.ac.singidunum.musicstore_backend.entity.Users;

public interface IUsersRepository extends MongoRepository<Users, String> {
    Users findByUsername(String username);
    Users findByEmail(String email);
}
