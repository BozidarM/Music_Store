package rs.ac.singidunum.musicstore_backend.service;

import rs.ac.singidunum.musicstore_backend.entity.Instruments;
import rs.ac.singidunum.musicstore_backend.model.InstrumentsModel;

import java.util.List;

public interface IInstrumentsService {
    List<Instruments> findAll();
    Instruments findInstrumentById(String id);
    List<Instruments> findAllByName(String name);
    Instruments insert(InstrumentsModel model);
    void deleteById(String id);
    List<Instruments> findAllBySeller_username(String seller_username);
    Instruments update(InstrumentsModel model);
}
