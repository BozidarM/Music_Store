package rs.ac.singidunum.musicstore_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.musicstore_backend.entity.MusicSoftwares;
import rs.ac.singidunum.musicstore_backend.model.MusicSoftwaresModel;
import rs.ac.singidunum.musicstore_backend.service.MusicSoftwaresService;

import java.util.List;

@RestController
@RequestMapping("softwares")
public class MusicSoftwaresController {

    @Autowired
    private MusicSoftwaresService musicSoftwaresService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<MusicSoftwares> findAll(){
        return musicSoftwaresService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public MusicSoftwares findMusicSoftwaresById(@PathVariable("id") String id){
        return this.musicSoftwaresService.findMusicSoftwaresById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<MusicSoftwares> findAllByName(@PathVariable("name") String name){
        return  musicSoftwaresService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public MusicSoftwares insert(@RequestBody MusicSoftwaresModel model){
        return musicSoftwaresService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.musicSoftwaresService.deleteById(id);
    }

    @GetMapping("mysoftwares/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<MusicSoftwares> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return musicSoftwaresService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public MusicSoftwares update(@RequestBody MusicSoftwaresModel model){
        return musicSoftwaresService.update(model);
    }
}
