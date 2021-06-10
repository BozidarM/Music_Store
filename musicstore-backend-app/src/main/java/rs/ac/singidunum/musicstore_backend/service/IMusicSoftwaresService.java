package rs.ac.singidunum.musicstore_backend.service;

import rs.ac.singidunum.musicstore_backend.entity.MusicSoftwares;
import rs.ac.singidunum.musicstore_backend.model.MusicSoftwaresModel;

import java.util.List;

public interface IMusicSoftwaresService {
    List<MusicSoftwares> findAll();
    MusicSoftwares findMusicSoftwaresById(String id);
    List<MusicSoftwares> findAllByName(String name);
    MusicSoftwares insert(MusicSoftwaresModel model);
    void deleteById(String id);
    List<MusicSoftwares> findAllBySeller_username(String seller_username);
    MusicSoftwares update(MusicSoftwaresModel model);
}
