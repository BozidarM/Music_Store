package rs.ac.singidunum.musicstore_backend.model;

import lombok.Data;

@Data
public class InstrumentsModel {
    private String id;
    private String instrument;
    private String type;
    private String name;
    private String manufacturer;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
