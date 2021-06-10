package rs.ac.singidunum.musicstore_backend.service;

import rs.ac.singidunum.musicstore_backend.entity.Accessories;
import rs.ac.singidunum.musicstore_backend.model.AccessoriesModel;

import java.util.List;

public interface IAccessoriesService {
    List<Accessories> findAll();
    Accessories findAccessoriesById(String id);
    List<Accessories> findAllByName(String name);
    Accessories insert(AccessoriesModel model);
    void deleteById(String id);
    List<Accessories> findAllBySeller_username(String seller_username);
    Accessories update(AccessoriesModel model);
}
