package rs.ac.singidunum.musicstore_backend.service;

import rs.ac.singidunum.musicstore_backend.entity.Users;
import rs.ac.singidunum.musicstore_backend.model.UsersModel;

public interface IUsersService {
    Users insert(UsersModel model);
    //Users login(UsersModel model);
    Users update(UsersModel model);
    Users findByUsername(String username);
}
