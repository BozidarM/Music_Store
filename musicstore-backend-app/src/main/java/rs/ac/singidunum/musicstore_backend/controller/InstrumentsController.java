package rs.ac.singidunum.musicstore_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.musicstore_backend.entity.Instruments;
import rs.ac.singidunum.musicstore_backend.model.InstrumentsModel;
import rs.ac.singidunum.musicstore_backend.service.InstrumentsService;

import java.util.List;

@RestController
@RequestMapping("instruments")
public class InstrumentsController {

    @Autowired
    private InstrumentsService instrumentsService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<Instruments> findAll(){
        return instrumentsService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public Instruments findInstrumentById(@PathVariable("id") String id){
        return this.instrumentsService.findInstrumentById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<Instruments> findAllByName(@PathVariable("name") String name){
        return  instrumentsService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Instruments insert(@RequestBody InstrumentsModel model){
        return instrumentsService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.instrumentsService.deleteById(id);
    }

    @GetMapping("myinstruments/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<Instruments> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return instrumentsService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Instruments update(@RequestBody InstrumentsModel model){
        return instrumentsService.update(model);
    }
}
