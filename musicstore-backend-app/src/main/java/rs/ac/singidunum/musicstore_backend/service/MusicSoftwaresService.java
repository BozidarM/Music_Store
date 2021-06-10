package rs.ac.singidunum.musicstore_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.musicstore_backend.entity.MusicSoftwares;
import rs.ac.singidunum.musicstore_backend.model.MusicSoftwaresModel;
import rs.ac.singidunum.musicstore_backend.repository.IMusicSoftwaresRepository;

import java.util.List;

@Service
public class MusicSoftwaresService implements IMusicSoftwaresService{

    @Autowired
    private IMusicSoftwaresRepository musicSoftwaresRepository;

    @Autowired
    private AutoMapperService autoMapperService;

    @Override
    public List<MusicSoftwares> findAll(){
        return musicSoftwaresRepository.findAll();
    }

    @Override
    public MusicSoftwares findMusicSoftwaresById(String id){
        return musicSoftwaresRepository.findMusicSoftwaresById(id);
    }

    @Override
    public List<MusicSoftwares> findAllByName(String name){
        return musicSoftwaresRepository.findAllByName(name);
    }

    @Override
    public MusicSoftwares insert(MusicSoftwaresModel model){ return musicSoftwaresRepository.insert(autoMapperService.map(model, MusicSoftwares.class)); }

    @Override
    public void deleteById(String id){ this.musicSoftwaresRepository.deleteById(id); }

    @Override
    public MusicSoftwares update(MusicSoftwaresModel model){

        MusicSoftwares musicSoftware = musicSoftwaresRepository.findMusicSoftwaresById(model.getId());

        musicSoftware.setName(model.getName());
        musicSoftware.setDeveloper(model.getDeveloper());
        musicSoftware.setPrice(model.getPrice());
        musicSoftware.setDescription(model.getDescription());
        musicSoftware.setImage(model.getImage());

        this.musicSoftwaresRepository.save(musicSoftware);

        return autoMapperService.map(model, MusicSoftwares.class);
    }

    @Override
    public List<MusicSoftwares> findAllBySeller_username(String seller_username){ return musicSoftwaresRepository.findAllBySeller_username(seller_username); }
}
