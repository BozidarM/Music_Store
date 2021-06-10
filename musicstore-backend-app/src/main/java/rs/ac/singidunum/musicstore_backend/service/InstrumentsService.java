package rs.ac.singidunum.musicstore_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.musicstore_backend.entity.Instruments;
import rs.ac.singidunum.musicstore_backend.entity.Users;
import rs.ac.singidunum.musicstore_backend.model.InstrumentsModel;
import rs.ac.singidunum.musicstore_backend.repository.IInstrumentsRepository;
import java.util.List;

@Service
public class InstrumentsService implements IInstrumentsService {

    @Autowired
    private IInstrumentsRepository instrumentsRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<Instruments> findAll(){
        return instrumentsRepository.findAll();
    }

    @Override
    public Instruments findInstrumentById(String id){
        return instrumentsRepository.findInstrumentById(id);
    }

    @Override
    public List<Instruments> findAllByName(String name){
        return instrumentsRepository.findAllByName(name);
    }

    @Override
    public Instruments insert(InstrumentsModel model){ return instrumentsRepository.insert(autoMapperService.map(model, Instruments.class)); }

    @Override
    public void deleteById(String id){ this.instrumentsRepository.deleteById(id); }

    @Override
    public Instruments update(InstrumentsModel model){

        Instruments instrument = instrumentsRepository.findInstrumentById(model.getId());

        instrument.setInstrument(model.getInstrument());
        instrument.setType(model.getType());
        instrument.setName(model.getName());
        instrument.setManufacturer(model.getManufacturer());
        instrument.setPrice(model.getPrice());
        instrument.setDescription(model.getDescription());
        instrument.setImage(model.getImage());

        this.instrumentsRepository.save(instrument);

        return autoMapperService.map(model, Instruments.class);
    }

    @Override
    public List<Instruments> findAllBySeller_username(String seller_username){ return instrumentsRepository.findAllBySeller_username(seller_username); }
}
